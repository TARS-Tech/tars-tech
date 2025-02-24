import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import About from './pages/about/About'
import Cases from './pages/cases/Cases'
import Contact from './pages/contact/Contact'
import Service from './pages/services/Services'
import Product from './pages/product/Product'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ProductDevelopment from './components/product-development/Product-development'
import IndustryAutomation from './pages/industry-automation/Industry-Automation'
import BlogPost from './pages/blogpost/BlogPost'
import ProductDetail from './pages/productpage/ProductDetails'
import CaseSubPage from './pages/casesubpage/CaseSubPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/cases/:id" element={<CaseSubPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/home/product-development" element={<ProductDevelopment />} />
        <Route path="/home/indusrty-automation" element={<IndustryAutomation />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App