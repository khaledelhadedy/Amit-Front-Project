
import { useRouter } from 'next/router';

// Sample blog data (this can be replaced with dynamic data from a CMS or database)
const blogPosts = [
  { id: 1, title: 'How to Start an E-commerce Business', slug: 'start-ecommerce', content: 'Starting an e-commerce business can be a rewarding experience. You can start by researching the market and choosing a niche...' },
  { id: 2, title: 'Top 10 Tips for E-commerce Success', slug: 'top-10-tips', content: 'In order to succeed in e-commerce, it’s important to be aware of the latest trends and strategies. Here are the top 10 tips...' },
  { id: 3, title: 'How to Market Your Products Online', slug: 'market-your-products', content: 'Marketing your products online requires a mix of SEO, paid advertising, and organic strategies. Here’s how you can get started...' },
  { id: 4, title: 'The Future of E-commerce: Trends to Watch', slug: 'future-of-ecommerce', content: 'The future of e-commerce looks promising with the rise of artificial intelligence, augmented reality, and blockchain technology...' },
];

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the blog post by slug
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{post.title}</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-700">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
