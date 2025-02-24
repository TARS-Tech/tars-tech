import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-black text-white py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img src="/tarsLogo.svg" alt="logo" className="h-10 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="hover:text-gray-300 transition-colors">
                            Home
                        </Link>
                        <Link to="/service" className="hover:text-gray-300 transition-colors">
                            Service
                        </Link>
                        <Link to="/product" className="hover:text-gray-300 transition-colors">
                            Product
                        </Link>
                        <Link to="/cases" className="hover:text-gray-300 transition-colors">
                            Cases
                        </Link>
                        <Link to="/blog" className="hover:text-gray-300 transition-colors">
                            Blog
                        </Link>
                        <Link to="/about" className="hover:text-gray-300 transition-colors">
                            About
                        </Link>
                        <Link to="/contact" className="hover:text-gray-300 transition-colors">
                            Contact
                        </Link>
                        <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors">
                            Get Quotes
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 hover:bg-gray-900 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/service"
                            className="block px-3 py-2 rounded-md hover:bg-gray-900 transition-colors"
                        >
                            Service
                        </Link>
                        <Link
                            to="/product"
                            className="block px-3 py-2 rounded-md hover:bg-gray-900 transition-colors"
                        >
                            Product
                        </Link>
                        <Link
                            to="/cases"
                            className="block px-3 py-2 rounded-md hover:bg-gray-900 transition-colors"
                        >
                            Cases
                        </Link>
                        <Link
                            to="/blog"
                            className="block px-3 py-2 rounded-md hover:bg-gray-900 transition-colors"
                        >
                            Blog
                        </Link>
                        <Link
                            to="/about"
                            className="block px-3 py-2 rounded-md hover:bg-gray-900 transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="block px-3 py-2 rounded-md hover:bg-gray-900 transition-colors"
                        >
                            Contact
                        </Link>
                        <div className="px-3 py-2">
                            <button className="w-full px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors">
                                Get Quotes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

