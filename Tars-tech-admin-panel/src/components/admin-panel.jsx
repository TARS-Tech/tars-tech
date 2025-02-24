import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ProductsAdmin } from "./products-admin/ProductsAdmin";
import { ContactsAdmin } from "./contacts-admin/ContactAdmin";
import { BlogsAdmin } from "./blogs-admin/BlogsAdmin";
import { CasesAdmin } from "./cases-admin/CasesAdmin";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("products");
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-semibold text-center text-gray-800">
            Admin Panel
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center space-x-6 mb-6">
          <button
            className={`px-6 py-3 text-lg font-medium rounded-lg transition duration-300 ${
              activeTab === "products"
                ? "bg-gray-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
            onClick={() => setActiveTab("products")}
          >
            Products
          </button>
          <button
            className={`px-6 py-3 text-lg font-medium rounded-lg transition duration-300 ${
              activeTab === "contacts"
                ? "bg-gray-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
            onClick={() => setActiveTab("contacts")}
          >
            Contacts
          </button>
          <button
            className={`px-6 py-3 text-lg font-medium rounded-lg transition duration-300 ${
              activeTab === "blogs"
                ? "bg-gray-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
            onClick={() => setActiveTab("blogs")}
          >
            Blogs
          </button>
          <button
            className={`px-6 py-3 text-lg font-medium rounded-lg transition duration-300 ${
              activeTab === "cases"
                ? "bg-gray-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
            onClick={() => setActiveTab("cases")}
          >
            Cases
          </button>
        </div>

        {/* Tab Content */}
        <div className="admin-content">
          {activeTab === "products" && <ProductsAdmin />}
          {activeTab === "contacts" && <ContactsAdmin />}
          {activeTab === "blogs" && <BlogsAdmin />}
          {activeTab === "cases" && <CasesAdmin />}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
