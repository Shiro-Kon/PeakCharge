import { useParams } from 'react-router-dom';
import { blogPosts } from '../../Utils/BlogPosts/BlogPosts';

const BlogDetailsPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find((p) => p.id.toString() === postId);


  if (!post) {
    return <div>Статья не найдена</div>;
  }

  return (
    <div className="container mx-auto mt-[100px] md:mt-[120px] xxl:mt-[150px] md:w-[90%] ">
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-2xl md:text-5xl lg:text-4xl xl:text-5xl  text-white/90 text-center px-4 my-10 font-normal">
          {post.title}
        </h1>
        <div className="text-sm lg:text-lg xl:text-xl leading-relaxed text-white/90 font-normal">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
