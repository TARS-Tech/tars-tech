import { useState } from 'react';
import { Menu, X, Home, Users, Box, BarChart, LogOut } from 'lucide-react';
import { useAuth } from "../context/AuthContext";
import { ProductsAdmin } from './products-admin/ProductsAdmin';
import { CasesAdmin } from './cases-admin/CasesAdmin';
import { ContactsAdmin } from './contacts-admin/ContactAdmin';
import { BlogsAdmin } from './blogs-admin/BlogsAdmin';

const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeContent, setActiveContent] = useState('products');
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const { logout } = useAuth();

    const handleLogout = () => {
        setShowLogoutModal(true);
    };

    const confirmLogout = () => {
        logout();
        setShowLogoutModal(false);
    };

    const menuItems = [
        { id: 'products', label: 'Products', icon: Home },
        { id: 'cases', label: 'Cases', icon: Users },
        { id: 'contact', label: 'Contact', icon: Box },
        { id: 'blogs', label: 'Blogs', icon: BarChart },
    ];

    const renderContent = () => {
        switch (activeContent) {
            case 'products':
                return <ProductsAdmin />;
            case 'cases':
                return <CasesAdmin />;
            case 'contact':
                return <ContactsAdmin />;
            case 'blogs':
                return <BlogsAdmin />;
            default:
                return <ProductsAdmin />;
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Mobile Navigation Bar */}
            <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50">
                <div className="flex items-center justify-between p-4">
                    <h1 className="text-xl font-bold">Admin Panel</h1>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 rounded-lg hover:bg-gray-100"
                    >
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                    fixed md:sticky top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 
                    transform transition-transform duration-300 ease-in-out flex flex-col
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                `}
            >
                <div className="hidden md:block p-4 border-b">
                    <h1 className="text-xl font-bold">Admin Panel</h1>
                </div>
                <nav className="mt-4 flex-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveContent(item.id);
                                    setIsSidebarOpen(false);
                                }}
                                className={`
                                    w-full flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100
                                    ${activeContent === item.id ? 'bg-gray-100 text-blue-600' : ''}
                                `}
                            >
                                <Icon size={20} className="mr-3" />
                                {item.label}
                            </button>
                        );
                    })}
                </nav>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center px-6 py-3 text-red-600 hover:bg-red-50 border-t"
                >
                    <LogOut size={20} className="mr-3" />
                    Logout
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 md:ml-0">
                <main className="p-4 mt-16 md:mt-0">
                    {renderContent()}
                </main>
            </div>

            {/* Custom Logout Modal */}
            {showLogoutModal && (
                <>
                    {/* Modal Backdrop */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-50"
                        onClick={() => setShowLogoutModal(false)}
                    />

                    {/* Modal Content */}
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl z-50 w-full max-w-md p-6">
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">
                                Confirm Logout
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Are you sure you want to logout? You&apos;ll need to sign in again to access the admin panel.
                            </p>
                            <div className="flex justify-end space-x-4">
                                <button
                                    onClick={() => setShowLogoutModal(false)}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={confirmLogout}
                                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AdminDashboard;