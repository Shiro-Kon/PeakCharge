import React, { useState, useRef, useCallback } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { products } from "../../../Utils/Products";

const Carousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideClick = useCallback(
    (index: number) => {
      if (swiperRef.current) {
        if (activeSlide === index) {
          swiperRef.current.autoplay.start();
          setActiveSlide(null);
        } else {
          swiperRef.current.autoplay.stop();
          setActiveSlide(index);
        }
      }
    },
    [activeSlide]
  );

  return (
    <div className="container mx-auto relative ">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-[400px] -z-10 transform-gpu overflow-hidden blur-3xl "
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00ff99] to-[#ff0066] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00ff99] to-[#ff0066] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-sage-green",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-olive-green",
        }}
        onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        speed={800}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id} className="p-6 mb-6">
            <div className="relative">
              <div
                className="relative cursor-pointer transition-transform duration-500 rounded-3xl hover:scale-[102%] active:scale-[98%] shadow-lg ease-in-out ring-2 ring-white/30 text-center drop-shadow-xl shadow-white/10 text-white/90 font-normal"
                onClick={() => handleSlideClick(index)}
              >
                <img
                  src={product.image}
                  alt={`${product.name} ${product.subname}`}
                  className="w-full h-[400px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover rounded-3xl"
                  loading="lazy"
                />
                <InfoCard activeSlide={activeSlide} index={index}>
                  <h3 className="text-xl md:text-xl   mb-2 ">
                    {product.name} {product.subname}
                  </h3>
                  <p className="text-sm md:text-md  mb-2 ">
                    {product.shirtDescription}
                  </p>
                  <p className="text-sm md:text-md lg:text-lg  mb-2 ">
                    {product.price} грн.
                  </p>
                  <Link to={`/product/${product.id}`}>
                    <button className="rounded-3xl border-2  backdrop-blur-md px-4 py-2  shadow-sm transition-transform hover:bg-black/50 hover:scale-[105%] active:scale-[95%] duration-300 ease-in">
                      Детальніше
                    </button>
                  </Link>
                </InfoCard>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

interface InfoCardProps {
  activeSlide: number | null;
  index: number;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
  activeSlide,
  index,
  children,
}) => {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 p-6 bg-black/30 backdrop-blur-md  rounded-3xl transition-all duration-500 ${
        activeSlide === index
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
};

export default Carousel;
