import Link from 'next/link';

const blogPosts = [
  { id: 1, title: 'How to Start an E-commerce Business', slug: 'start-ecommerce', excerpt: 'Starting an e-commerce business can be a rewarding experience.' },
  { id: 2, title: 'Top 10 Tips for E-commerce Success', slug: 'top-10-tips', excerpt: 'Tips for e-commerce success.' },
  { id: 3, title: 'How to Market Your Products Online', slug: 'market-your-products', excerpt: 'Learn how to market your products online.' },
  { id: 4, title: 'The Future of E-commerce', slug: 'future-of-ecommerce', excerpt: 'The future of e-commerce is evolving.' }
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-12">E-commerce Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-4">{post.excerpt}</p>
            {/* Correct use of Link for navigation */}
            <Link href={`/blog/${post.slug}`}>
             Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
