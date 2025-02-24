import { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

export const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", description: "", image: null });
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://tars-tech-backend.vercel.app/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setNewProduct({ ...newProduct, image: files[0] });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("description", newProduct.description);
    formData.append("image", newProduct.image);

    try {
      const response = await fetch("https://tars-tech-backend.vercel.app/api/products", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        fetchProducts();
        setNewProduct({ name: "", description: "", image: null });
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const confirmDelete = (id) => {
    setSelectedProductId(id);
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://tars-tech-backend.vercel.app/api/products/${selectedProductId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchProducts();
        setShowModal(false);
        setSelectedProductId(null);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6 sm:mb-8">
        Manage Products
      </h2>

      <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            placeholder="Enter product name"
            required
            className="block w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleInputChange}
            accept="image/*"
            required
            className="block w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <div className="h-[200px] sm:h-[250px]">
            <ReactQuill
              value={newProduct.description}
              onChange={(description) => setNewProduct({ ...newProduct, description })}
              className="h-full"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-14 py-2 sm:py-3 bg-gray-600 text-white rounded-md font-medium hover:bg-gray-700 transition duration-200"
        >
          Add Product
        </button>
      </form>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto -mx-4 sm:-mx-6">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="py-3 px-4 text-left text-xs sm:text-sm font-semibold">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-4 text-left text-xs sm:text-sm font-semibold">
                    Image
                  </th>
                  <th scope="col" className="py-3 px-4 text-left text-xs sm:text-sm font-semibold hidden md:table-cell">
                    Description
                  </th>
                  <th scope="col" className="py-3 px-4 text-left text-xs sm:text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {products.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm sm:text-base whitespace-nowrap">{product.name}</td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <img
                        src={`${product.image}`}
                        alt={product.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="py-4 px-4 text-sm max-w-[200px] md:max-w-md hidden md:table-cell">
                      <div className="line-clamp-2 hover:line-clamp-none">
                        {product.description}
                      </div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <button
                        onClick={() => confirmDelete(product._id)}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-sm w-full mx-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Confirm Delete</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Are you sure you want to delete this product?
            </p>
            <div className="flex justify-end gap-3 sm:gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
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
