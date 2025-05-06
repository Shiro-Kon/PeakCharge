import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../../../Utils/Products';
import {  AnimatePresence } from 'framer-motion';
import AnimatedElement from '../../AnimatedElement/AnimatedElement';
import { useCart } from '../../CartPage/CartContext';
import Notification from './Notification';

const ProductDetailsPage: React.FC = () => {
 
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);
  const [showNotification, setShowNotification] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return <div>Продукт не  знайден</div>;
  }

  

  const handleAddToCart = () => {
    addToCart(product);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000); 
  };

  return (
    <main className="container mx-auto py-16 md:py-28 px-4 md:px-6 lg:px-8 xl:max-w-6xl xxl:max-w-7xl min-h-screen overflow-hidden ">
      
      <div className="flex flex-col md:flex-row gap-12 cursor-default">
        <div className="md:w-1/2">
          <AnimatedElement direction="right" delay={0.2}>
            <img 
             src={product.image.startsWith('.') ? product.image.slice(1) : product.image} 
            alt={`${product.name} ${product.subname}`} 
            className="w-full h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover rounded-[30px] shadow-black/20 shadow-lg" />
          
          </AnimatedElement>
        </div>
        <div className="md:w-1/2">
          <AnimatedElement direction="right" delay={0.3}>
            <h1 className="text-3xl md:text-4xl  font-normal text-white/90 mb-6">
              {product.name} <br /> <span className="text-gray-400 text-xl md:text-2xl">{product.subname}</span>
            </h1>
            <div className="space-y-3 text-sm md:text-sm lg:text-md xl:text-lg text-white/90 mb-8 font-normal">
              <p><b>Група товару:</b> {product.productGroup}</p>
              <p><b>Призначення:</b> {product.purpose}</p>
              <p><b>Об'єм:</b> {product.volume}</p>
              <p><b>Примітка:</b> {product.note}</p>
              <p><b>Зроблено в</b> {product.madeIn}</p>
            </div>
         
             <div className='flex flex-row justify-between items-end self-end'>
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold text-white/90">
                {product.price.toFixed(2)}₴
              </p>
              <button 
                className="rounded-[10px] bg-white/10 backdrop-blur-3xl ring-1 ring-gray-400 px-6 py-3 text-sm md:text-sm lg:text-xl xl:text-xl xxl:text-3xl font-normal text-white/90 shadow-sm duration-200 ease-out hover:bg-white/30 hover:scale-[1.03] active:scale-95 mobile-landscape:text-base"
                onClick={handleAddToCart}
              >
                Додати в кошик
              </button>
            </div>
            </AnimatedElement>
          
        </div>
      </div>
      <div className="my-10 max-w-6xl xl:max-w-6xl space-y-8 text-white/90">
  <div>
    <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2">Опис</h2>
    <p className="text-sm md:text-md lg:text-lg xl:text-xl font-normal">{product.description}</p>
  </div>
  <div>
    <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2">Склад</h2>
    <p className="text-sm md:text-md lg:text-lg xl:text-xl font-normal">{product.composition}</p>
  </div>
  <div>
    <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2">Застосування</h2>
    <p className="text-sm md:text-md lg:text-lg xl:text-xl font-normal">{product.usage}</p>
  </div>
  <div>
    <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2">Протипоказання</h2>
    <p className="text-sm md:text-md lg:text-lg xl:text-xl font-normal">{product.contraindication}</p>
  </div>
</div>

      <AnimatePresence>
        {showNotification && (
          <Notification 
            message="Товар додано в кошик!" 
            onClose={() => setShowNotification(false)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProductDetailsPage;
