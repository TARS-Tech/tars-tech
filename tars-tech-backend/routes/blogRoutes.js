const express = require('express');
const router = express.Router();
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const Blog = require('../models/Blog');
const authenticateToken = require("../middlewares/authMiddleware")

// Cloudinary configuration
const cloudinaryBaseUrl = 'https://api.cloudinary.com/v1_1/dxo0r3jgb/image/upload'; // Replace with your Cloudinary base URL
const uploadPreset = 'tarsblogimage'; // Replace with your unsigned preset name

// Configure Multer without storing files locally (for handling multipart form-data)
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage }); // Use memory storage

// Add a new blog with Cloudinary image upload
router.post('/', upload.single('image'), authenticateToken , async (req, res) => {
  try {
    const { title, content, author } = req.body;

    let imageUrl = '';

    // If an image is uploaded, upload it to Cloudinary
    if (req.file) {
      try {
        const formData = new FormData();
        formData.append('file', req.file.buffer, req.file.originalname); // Use the buffer from memory storage
        formData.append('upload_preset', uploadPreset);

        const response = await axios.post(cloudinaryBaseUrl, formData, {
          headers: { ...formData.getHeaders() },
        });

        imageUrl = response.data.secure_url; // Get the Cloudinary image URL
      } catch (uploadError) {
        return res.status(500).json({ message: 'Failed to upload image to Cloudinary', error: uploadError.message });
      }
    }

    const blog = new Blog({ title, content, author, image: imageUrl });
    await blog.save();

    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single blog by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const blogPost = await Blog.findById(id);
    if (!blogPost) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blogPost);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching blog post' });
  }
});

// Delete a blog by ID
router.delete('/:id', authenticateToken,async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

