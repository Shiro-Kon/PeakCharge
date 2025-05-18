import { Link } from "react-router-dom";
import { ScrollAnimation } from "../animation/FadeInText";

const BlogCTA = () => {
  return (
    <ScrollAnimation threshold={0.1} offset={50} > 
    <div className="max-w-[90%] mx-auto px-4 lg:px-8 py-12  text-white text-center rounded-lg bg-purple-900/20  backdrop-blur-3xl ring-1 ring-gray-400/70">
      <h2 className="text-2xl md:text-5xl lg:text-6xl font-forum mb-4">
        Хочете більше контенту?
      </h2>
      <p className="text-md md:text-lg mb-6">
        Підпишіться на наш блог, щоб отримувати більше рекомендації від PeakCharge.
      </p>
      <Link
  to="#"
  onClick={() => window.open("", "_blank")}
  className="inline-block bg-white/10 px-6 py-3 rounded-lg font-semibold  transition duration-300  ring-1 ring-gray-400/70 hover:bg-white/30"
>
  Підписатися
</Link>

    </div>
    </ScrollAnimation>  );
};

export default BlogCTA;
