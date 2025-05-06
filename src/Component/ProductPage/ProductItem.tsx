import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../Utils/Products';
import { ScrollAnimationX } from '../animation/FadeInText';

const ProductItem: React.FC<{ product: Product; delay: number }> = ({ product, delay }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    

    <ScrollAnimationX threshold={0.1} offset={50} >

      <main className='flex flex-col md:flex-row mb-20 text-wrap sm:text-center md:text-left sm:px-6 px-4 '> 
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-[300px] lg:w-[400px] xl:w-[350px] xxl:w-[550px] h-[350px] md:h-[350px] lg:h-[450px] xl:h-[400px] xxl:h-[600px] object-cover mb-4 md:mb-0 md:mr-6 lg:mr-12 rounded-3xl shadow-md  ring-1 ring-black/10"
      />
      <div className="flex-grow sm:mt-4">
        <h3 className="text-4xl md:text-4xl lg:text-5xl  text-white/90 font-normal mb-2 lg:mb-6 ">
          {product.name} <br />
          <span className="text-gray-400 text-2xl md:text-3xl lg:text-4xl">{product.subname}</span>
        </h3>
        <p className="text-sm md:text-md lg:text-lg   font-normal text-white/90 my-4 xl:my-6 text-balance break-words ">
          {product.shirtDescription}
        </p>
        <button
          className="rounded-[10px] bg-white/10 backdrop-blur-3xl ring-1 ring-gray-400 px-6 py-3 text-sm md:text-sm lg:text-xl xl:text-xl xxl:text-3xl font-normal text-white/90 shadow-sm duration-200 ease-out hover:bg-white/30 hover:scale-[1.03] active:scale-95 mobile-landscape:text-base"
          onClick={handleButtonClick}
        >
          Детальніше
        </button>
      </div>
      </main>
    </ScrollAnimationX>
  );
};

export default ProductItem;
