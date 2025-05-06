import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedElement from '../AnimatedElement/AnimatedElement';
import { BlogPost, blogPosts } from '../../Utils/BlogPosts/BlogPosts';

const BlogPage: React.FC = () => {
  const useGroupedPosts = () => {
    return useMemo(() => {
      return blogPosts.reduce((acc, post) => {
        if (!acc[post.category]) {
          acc[post.category] = [];
        }
        acc[post.category].push(post);
        return acc;
      }, {} as Record<string, BlogPost[]>);
    }, []);
  };

  const groupedPosts = useGroupedPosts();

  return (
    <div className="container mx-auto md:w-[90%] overflow-hidden">
      {Object.entries(groupedPosts).map(([category, posts]) => (
        <AnimatedElement direction="right" key={category}>
          <div className="flex flex-col my-6 sm:px-6 px-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white/90  sm:text-center flex justify-center">
              {category}
            </h2>
            <div className="h-[1px] md:h-[1px] bg-white/90 w-full mt-2 md:mt-4 rounded-[50px]" />
          </div>
          {posts.map((post, index) => (
            <BlogPostItem key={post.id} post={post} delay={index * 0.1} />
          ))}
        </AnimatedElement>
      ))}
    </div>
  );
};

interface BlogPostItemProps {
  post: BlogPost;
  delay: number;
}

const BlogPostItem: React.FC<BlogPostItemProps> = ({ post, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay }}
      className="will-change-transform"
    >
      <main className="flex flex-col md:flex-row mb-20 sm:text-center md:text-left sm:px-6 px-4">
        
        <div className="flex-grow sm:mt-4">
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white/90  mb-2 lg:mb-6">
            {post.title}
          </h3>
          <p className="text-sm lg:text-md xl:text-xl leading-relaxed whitespace-pre-line font-light text-white/90 my-4 xl:my-6">
            {post.summary}
          </p>
          <Link
            to={`/blog/${post.id}`}
            className="rounded-[10px] bg-white/10 backdrop-blur-3xl ring-1 ring-gray-400 px-6 py-3 text-sm md:text-sm lg:text-xl xl:text-xl xxl:text-3xl font-normal text-white/90 shadow-sm duration-200 ease-out hover:bg-white/30 hover:scale-[1.03] active:scale-95 mobile-landscape:text-base"
          >
            Читати далі
          </Link>
        </div>
      </main>
    </motion.div>
  );
};

export default BlogPage;