import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  const fetchProductDetail = async () => {
    try {
      setLoading(true);

      // console.log(id);
      const response = await fetch(`https://tars-tech-backend-chi.vercel.app/api/products/${id}`);

      // console.log(response);
      if (!response.ok) {
        throw new Error('Product not found');
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching product details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-2xl text-red-600">Error: {error}</h1>
    </div>
  );

  if (!product) return null;

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12 z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Image */}
          <div className="lg:w-1/2">
            <div className="sticky top-8">
              <img
                src={`${product.image}`}
                alt={product.name}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div className="w-20 h-1 bg-blue-500"></div>
            </div>

            <div className="prose max-w-none">
            <article dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>

            {product.features && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Key Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.specifications && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Technical Specifications</h2>
                <div className="grid grid-cols-1 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="border-b border-gray-200 pb-2">
                      <span className="font-medium">{key}: </span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;