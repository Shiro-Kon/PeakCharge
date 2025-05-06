import BlogCTA from "../Component/Blog/BlogCTA";
import BlogPosts from "../Component/Blog/BlogPosts";
import BrandIntroduction from "../Component/Blog/BrandIntroduction/BrandIntroduction";


const BlogPage = () => {
  return (
    <div className=" container mx-auto md:w-[90%] overflow-hidden my-12 md:my-16 xl:my-24">
        <BrandIntroduction />
        <section className="pt-12 pb-4">
        </section>
      <section className="pt-12 pb-4">
        <BlogPosts />
      </section>
      <section className=" pb-16">
        <BlogCTA />
      </section>
    </div>
  );
};

export default BlogPage;
