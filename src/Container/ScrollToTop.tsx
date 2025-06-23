import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const iconAnimation = {
    initial: { y: 0, opacity: 1 },
    animate: { y: -50, opacity: 0 },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center rounded-full bg-black/20 text-white shadow-lg ring-2 ring-gray-600 hover:ring-gray-300 transition duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-12 h-12 rotate-180  "
        aria-label="Scroll to top"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
          initial={iconAnimation.initial}
          whileTap={iconAnimation.animate}
          transition={iconAnimation.transition}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </motion.svg>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
