import React, { useState, useEffect } from 'react';
import AnimatedElement from '../Component/AnimatedElement/AnimatedElement';
import OrderConfirmationModal from '../Component/OrderConfirmationModal/OrderConfirmationModal';
import { useCart } from '../Component/CartPage/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    city: '',
    postOffice: '',
    paymentMethod: 'card',
    deliveryMethod: 'pickup'
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleButtonClick = (type: 'delivery' | 'payment', value: string) => {
    setFormData(prevState => ({ ...prevState, [`${type}Method`]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderData = {
      products: cart.map(item => ({
        name: item.product.name,
        subname: item.product.subname,
        quantity: item.quantity
      })),
      totalPrice: getTotalPrice(),
      ...formData
    };

    console.log('Order Data:', orderData);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    clearCart(); 
    navigate('/product');
  };

  return (
    <main className=" flex flex-col items-center   md:my-18 xxl:my-28 px-4 md:px-8 lg:px-12 isolate z-10 mt-[100px]">
      <div className="w-full max-w-4xl   rounded-lg overflow-hidden">
        <AnimatedElement direction="up" delay={0.1} className="p-6">
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 mb-6 text-center">
            Ваше замовлення
          </div>

          <div className="space-y-6">
  {cart.map(item => (
    <div key={item.product.id} className="flex items-start justify-between border-b pb-4">
      <div className="flex items-start">
        <img
          alt={item.product.name}
          src={item.product.image}
          className="h-14 w-14 object-cover rounded-md"
        />
        <div className="ml-4 flex flex-col justify-between">
          <p className="text-lg font-semibold text-white/90">{item.product.name} {item.product.subname}</p>
          <p className="text-md text-white/90">{item.quantity} шт.</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-medium text-white/90">{(item.product.price * item.quantity).toFixed(2)}₴</p>
      </div>
    </div>
  ))}
  <div className="mt-6 border-t pt-4 text-right">
    <p className="text-xl font-normal text-white/90"><b>Разом:</b> <span className="text-xl font-normal text-white/90">{getTotalPrice().toFixed(2)}₴ </span></p>
  </div>
</div>

        </AnimatedElement>

        <AnimatedElement direction="up" delay={0.2} className="p-6 ">
          <div  className="text-xl md:text-2xl lg:text-3xl font-normal text-white/90 mb-6 text-center">
            Оформлення замовлення
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-base font-normal text-white/90">ПІБ</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white/20  text-white/90 font-normal"
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-base font-normal text-white/90 ">Номер телефону</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white/20 text-white/90 font-normal"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-normal text-white/90">Електронна пошта</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white/20 text-white/90 font-normal"
                  required
                />
              </div>
              
            </div>

            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold text-white/90">Спосіб доставки</legend>
              <div className="flex flex-col md:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => handleButtonClick('delivery', 'pickup')}
                  className={`py-2 px-4 rounded-lg border border-text-white/90 text-sm font-semibold hover:scale-105 active:scale-100 duration-300 ease-in  ${formData.deliveryMethod === 'pickup' ? '  text-white bg-white/20' : 'hover:bg-white/10 text-white/90'}`}
                >
                  Забрати в магазині
                </button>
                <button
                  type="button"
                  onClick={() => handleButtonClick('delivery', 'delivery')}
                  className={`py-2 px-4 rounded-lg border border-text-white/90 text-sm font-semibold hover:scale-105 active:scale-100 duration-300 ease-in ${formData.deliveryMethod === 'delivery' ? '  text-white bg-white/20' : 'hover:bg-white/10 text-white/90'}`}
                >
                  Доставка
                </button>
              </div>
              {formData.deliveryMethod === 'delivery' && (
                <div className='space-y-4'>
                  <label htmlFor="city" className="block text-base font-medium text-white/90">Місто</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg "
                  />
                  <label htmlFor="postOffice" className="block text-base font-medium text-white/90">Відділення Нова Пошта</label>
                  <input
                    type="text"
                    id="postOffice"
                    name="postOffice"
                    value={formData.postOffice}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg "
                  />
                </div>
              )}
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold text-white/90">Спосіб оплати</legend>
              <div className="flex flex-col md:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => handleButtonClick('payment', 'card')}
                  className={`py-2 px-4 rounded-lg border border-white/90/30 text-sm font-semibold hover:scale-105 active:scale-100 duration-300 ease-in  ${formData.paymentMethod === 'card' ? '  text-white  bg-white/20' : 'hover:bg-white/10 text-white/90'}`}
                >
                  Оплата карткою
                </button>
                <button
                  type="button"
                  onClick={() => handleButtonClick('payment', 'cash')}
                  className={`py-2 px-4 rounded-lg border border-white/90/30 text-sm font-semibold hover:scale-105 active:scale-100 duration-300 ease-in ${formData.paymentMethod === 'cash' ? '  text-white bg-white/20' : 'hover:bg-white/10 text-white/90'}`}
                >
                  Готівкою
                </button>
              </div>
            </fieldset>

            <button
              type="submit"
              className="w-full rounded-[10px] bg-white/10 backdrop-blur-3xl ring-1 ring-gray-400 px-6 py-3 text-sm md:text-sm lg:text-xl xl:text-xl xxl:text-3xl font-normal text-white/90 shadow-sm duration-200 ease-out hover:bg-white/30 hover:scale-[1.03] active:scale-95 mobile-landscape:text-base"
            >
              Підтвердити замовлення
            </button>
          </form>
        </AnimatedElement>
      </div>

      {isModalOpen && (
        <OrderConfirmationModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          orderData={{
            products: cart.map(item => ({
              name: item.product.name,
              subname: item.product.subname,
              quantity: item.quantity
            })),
            totalPrice: getTotalPrice(),
            ...formData
          }}
        />
      )}
    </main>
  );
};

export default CheckoutPage;
