'use client';
import { motion } from 'framer-motion';
import { BackgroundGradient } from "./ui/background-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from 'next/image';

const Blog = () => {
  const introText = "Stay informed with our blog, featuring industry insights, guides, and the latest trends in VR real estate technology.";

  // const blogCategories = [
  //   {
  //     title: "Industry Insights",
  //     description: "Learn how VR is reshaping real estate",
  //     icon: "🎯",
  //     color: "from-blue-500 to-purple-500"
  //   },
  //   {
  //     title: "Guides & Tutorials",
  //     description: "Step-by-step resources for using VR tools effectively",
  //     icon: "📚",
  //     color: "from-purple-500 to-pink-500"
  //   },
  //   {
  //     title: "Trends",
  //     description: "Keep up with the latest developments in VR and real estate tech",
  //     icon: "📈",
  //     color: "from-pink-500 to-red-500"
  //   }
  // ];

  const blogPosts = [
    {
      title: "The Future of Real Estate in VR",
      excerpt: "Discover how virtual reality is transforming property viewings and sales.",
      image: "/Images/image05.jpg",
      date: "March 15, 2024",
      category: "Industry Insights"
    },
    {
      title: "Getting Started with VR Tours",
      excerpt: "A comprehensive guide to creating your first virtual property tour.",
      image: "/Images/image06.jpg",
      date: "March 10, 2024",
      category: "Guides & Tutorials"
    },
    {
      title: "2024 VR Real Estate Trends",
      excerpt: "Exploring the latest innovations in virtual property showcasing.",
      image: "/Images/image07.jpg",
      date: "March 5, 2024",
      category: "Trends"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16" id="blog">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Blog & Resources
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <TextGenerateEffect words={introText} />
        </div>
      </div>

      {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
        {blogCategories.map((category, index) => (
          <BackgroundGradient key={index} className="rounded-xl bg-black p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center space-y-4"
            >
              <span className="text-4xl">{category.icon}</span>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
              <p className="text-gray-400">{category.description}</p>
            </motion.div>
          </BackgroundGradient>
        ))}
      </div> */}

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {blogPosts.map((post, index) => (
          <BackgroundGradient key={index} className="rounded-xl bg-black p-2">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="overflow-hidden rounded-lg"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes= "(max-width : 768px )  (max-width: 1200px) 50vw, 33vw"

                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-400">{post.category}</span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read More →
                </motion.button>
              </div>
            </motion.article>
          </BackgroundGradient>
        ))}
      </div>
      
      <BackgroundGradient className="rounded-xl bg-black p-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with VR Estate
          </h3>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter for the latest insights, guides, and trends in VR real estate technology.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </BackgroundGradient>
    </div>
  );
};

export default Blog;