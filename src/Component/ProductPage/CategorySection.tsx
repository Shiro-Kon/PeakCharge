import React from 'react';
import ProductItem from './ProductItem';
import { Product } from '../../Utils/Products';
import { ScrollAnimationX } from '../animation/FadeInText';

const CategorySection: React.FC<{ category: string; products: Product[] }> = ({
  category,
  products,
}) => {
  return (
    <ScrollAnimationX threshold={0.1} offset={50} >
      <div className="flex flex-col my-6 sm:px-6 px-4 ">
        <h2 className="text-4xl md:text-5xl lg:text-7xl   font-normal text-white/90 sm:text-center ">
          {category}
        </h2>
        <div className="h-[1px] md:h-[1px] bg-white w-full mt-2 md:mt-4 rounded-[50px]" />
      </div>
      {products.map((product, index) => (
        <ProductItem key={product.id} product={product} delay={index * 0.1} />
      ))}
    </ScrollAnimationX>
  );
};

export default CategorySection;
