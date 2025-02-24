import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import TarsRobot from "../../components/tarsrobot/TarsRobot"

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  const fetchBlogPosts = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await fetch("https://tars-tech-backend-chi.vercel.app/api/blogs")
      if (!response.ok) {
        throw new Error("Failed to fetch blog posts")
      }
      const data = await response.json()
      setBlogPosts(data)
    } catch (error) {
      console.error("Error fetching blog posts:", error)
      setError("Failed to load blog posts. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const FeaturedPost = ({ post }) => (
    <Link to={`/blog/${post._id}`}>
      <div className="relative h-[500px] mb-12 rounded-lg overflow-hidden group">
        <img src={`${post.image}`} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
            {post.title}
          </h2>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm text-gray-300">{new Date(post.createdAt).toLocaleDateString()}</p>
              <p className="text-sm text-gray-300">By: {post.author}</p>
              <p className="text-sm text-gray-300 line-clamp-2">{post.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )

  const BlogCard = ({ post }) => (
    <Link to={`/blog/${post._id}`}>
      <div className="group shadow-lg rounded-lg p-2">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 ">
          <img
            src={`${post.image}`}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = "/fallback-image.jpg"
            }}
          />
        </div>
        <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h3>
        <div className="flex items-center gap-3">
          <div>
            <p className="font-medium text-sm">By: {post.author}</p>
            <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{post.description}</p>
          </div>
        </div>
      </div>
    </Link>
  )

  const ComingSoon = () => (
    <div className="text-center py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Blog Posts Coming Soon!</h2>
        <p className="text-gray-600 mb-8">
          We're working on creating amazing content for you. Stay tuned for exciting articles and updates!
        </p>
        <div className="w-24 h-24 mx-auto mb-8">
          <svg
            className="animate-spin text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      </div>
    </div>
  )

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8" />
          <div className="h-[500px] bg-gray-200 rounded-lg mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="space-y-4">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg" />
                <div className="h-6 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Oops!</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchBlogPosts}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      {blogPosts.length === 0 ? (
        <ComingSoon />
      ) : (
        <>
          <FeaturedPost post={blogPosts[0]} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </>
      )}

      <TarsRobot />
    </div>
  )
}

export default Blog

