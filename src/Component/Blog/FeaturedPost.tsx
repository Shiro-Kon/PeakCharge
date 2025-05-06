
const FeaturedPost = () => {
  const post = {
    title: "Поради по догляду за волоссям від професіоналів",
    image: "./Images/featured-post/featured-hair-care.jpg",
    excerpt: "Дізнайтесь, як доглядати за волоссям, щоб воно залишалося здоровим і блискучим.",
    link: "/blog/featured-post"
  };

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-forum text-center text-white/90 mb-8">
        Рекомендована стаття
      </h2>
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
        <div className="w-full lg:w-1/2 h-64 lg:h-96 overflow-hidden">
          {post.image ? (
            <img
              src={post.image}
              alt={`Зображення до статті ${post.title}`}
              className="w-[500px] h-[400px] object-cover rounded-3xl transition-opacity duration-300"
            />
          ) : (
            <div className="w-[500px] h-[400px] object-cover rounded-3xl bg-gray-200 animate-pulse"></div>
          )}
        </div>

        <div className="p-6 flex flex-col justify-between">
          <h3 className="text-2xl md:text-3xl font-pushkin text-white/90 mb-4">
            {post.title}
          </h3>
          <p className="text-gray-700 text-md md:text-lg leading-relaxed mb-4">
            {post.excerpt}
          </p>
          <a
            href={post.link}
            className="w-[25%] inline-block bg-white/90 text-white px-4 py-2 rounded-lg font-semibold hover:bg-soft-sand transition duration-300"
          >
            Читати статтю
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
