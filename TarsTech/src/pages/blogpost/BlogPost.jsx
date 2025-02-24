import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogPost();
  }, [id]);

  const fetchBlogPost = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`https://tars-tech-backend-chi.vercel.app/api/blogs/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blog post');
      }
      const data = await response.json();
      setPost(data);
      document.title = `${data.title} | Blog`;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      setError('Failed to load blog post. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/blog'); // This will take the user to the blog page
  };

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse" />
          <div className="flex gap-4">
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="aspect-video w-full bg-gray-200 rounded animate-pulse" />
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <div className="flex">
            <div className="ml-3">
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={fetchBlogPost}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <button
          onClick={handleBack}
          className="mb-8 -ml-4 inline-flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Articles
        </button>

        <article>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="relative aspect-video">
              <img
                src={`${post.image}`}
                alt={post.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/fallback-image.jpg';
                }}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-6 leading-tight text-gray-900">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <time dateTime={post.createdAt}>
                    {new Date(post.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </div>
            </header>

            {/* <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div> */}

            <div className="prose lg:prose-lg max-w-full">
              <article dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>

        </article>
      </div>
    </div>
  );
};

export default BlogPost;