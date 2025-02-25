import { useState, useEffect } from "react";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

export const BlogsAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    image: null,
    author: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {

    // Retrieve token from localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found.");
      return;
    }


    setLoading(true);
    try {
      const response = await fetch("https://tars-tech-backend-chi.vercel.app/api/blogs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setBlogs(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setMessage({ type: "error", text: "Failed to load blogs." });
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setNewBlog({ ...newBlog, image: files[0] });
    } else {
      setNewBlog({ ...newBlog, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve token from localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found.");
      return;
    }


    if (!newBlog.title || !newBlog.content || !newBlog.author || !newBlog.image) {
      setMessage({ type: "error", text: "All fields are required." });
      return;
    }

    const formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("content", newBlog.content);  // HTML content from ReactQuill
    formData.append("image", newBlog.image);  // Image file
    formData.append("author", newBlog.author);

    try {
      setLoading(true);
      const response = await fetch("https://tars-tech-backend-chi.vercel.app/api/blogs", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },

      });

      if (response.ok) {
        fetchBlogs();  // Reload the blogs list
        setNewBlog({ title: "", content: "", image: null, author: "" });
        setMessage({ type: "success", text: "Blog added successfully!" });
      } else {
        setMessage({ type: "error", text: "Failed to add blog." });
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      setMessage({ type: "error", text: "Error occurred while adding the blog." });
    } finally {
      setLoading(false);
    }
  };
  const confirmDelete = (id) => {
    setSelectedBlogId(id);
    setShowModal(true);
  };
  const handleDelete = async () => {

    // Retrieve token from localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found.");
      return;
    }


    try {
      setLoading(true);
      const response = await fetch(`https://tars-tech-backend-chi.vercel.app/api/blogs/${selectedBlogId}`, {
        method: "DELETE", headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchBlogs();
        setMessage({ type: "success", text: "Blog deleted successfully!" });
      } else {
        setMessage({ type: "error", text: "Failed to delete blog." });
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      setMessage({ type: "error", text: "Error occurred while deleting the blog." });
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <div className="w-full min-h-screen p-4 md:p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6 md:mb-8">
          Manage Blogs
        </h2>

        {message.text && (
          <div
            className={`p-3 md:p-4 mb-4 md:mb-6 text-sm md:text-base text-white rounded ${message.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6 md:mb-8">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBlog.title}
              onChange={handleInputChange}
              placeholder="Blog title"
              required
              className="block w-full p-2 md:p-3 text-sm md:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="author" className="block text-gray-700 font-medium mb-2">Author Name:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={newBlog.author}
              onChange={handleInputChange}
              placeholder="Author name"
              required
              className="block w-full p-2 md:p-3 text-sm md:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-medium mb-2">Content:</label>
            <div className="text-sm md:text-base">
              <ReactQuill value={newBlog.content} onChange={(content) => setNewBlog({ ...newBlog, content })} />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleInputChange}
              accept="image/*"
              required
              className="block w-full p-2 md:p-3 text-sm md:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 md:py-3 text-sm md:text-base bg-gray-600 text-white rounded-md font-medium hover:bg-gray-700 transition duration-200"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Blog"}
          </button>
        </form>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md overflow-hidden">
          {loading && !blogs.length ? (
            <p className="text-center text-gray-500 text-sm md:text-base">Loading blogs...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto text-gray-700">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 md:py-3 px-2 md:px-4 text-left text-xs md:text-sm font-semibold">Title</th>
                    <th className="py-2 md:py-3 px-2 md:px-4 text-left text-xs md:text-sm font-semibold hidden md:table-cell">Author</th>
                    <th className="py-2 md:py-3 px-2 md:px-4 text-left text-xs md:text-sm font-semibold hidden lg:table-cell">Content</th>
                    <th className="py-2 md:py-3 px-2 md:px-4 text-left text-xs md:text-sm font-semibold">Image</th>
                    <th className="py-2 md:py-3 px-2 md:px-4 text-left text-xs md:text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog._id} className="border-b hover:bg-gray-50">
                      <td className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-sm">
                        <div className="md:hidden font-medium mb-1">Title:</div>
                        {blog.title}
                      </td>
                      <td className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-sm hidden md:table-cell">{blog.author}</td>
                      <td className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-sm hidden lg:table-cell">
                        {blog.content.substring(0, 50)}...
                      </td>
                      <td className="py-2 md:py-4 px-2 md:px-4">
                        <img
                          src={`${blog.image}`}
                          alt={blog.title}
                          className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-md"
                        />
                      </td>
                      <td className="py-2 md:py-4 px-2 md:px-4">
                        <button
                          onClick={() => confirmDelete(blog._id)}
                          className="px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-200"
                          disabled={loading}
                        >
                          {loading ? "Deleting..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-sm w-full">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">Confirm Delete</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">Are you sure you want to delete this blog?</p>
            <div className="flex justify-end gap-3 md:gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

