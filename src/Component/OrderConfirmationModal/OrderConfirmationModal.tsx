import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FaCheckCircle } from 'react-icons/fa';

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: {
    products: { name: string; subname: string; quantity: number }[];
    totalPrice: number;
    fullName: string;
    phoneNumber: string;
    email: string;
    city : string;
    postOffice: string;
    paymentMethod: string;
    deliveryMethod: string;
  };
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({ isOpen, onClose, orderData }) => {
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

  const handleSubmitOrder = async () => {
    try {
      const response = await fetch('http://localhost:4000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log('Order successfully sent to Telegram');
        setIsOrderSubmitted(true);
        onClose();
      } else {
        console.log('Failed to submit order');
        alert('Не удалось отправить заказ. Пожалуйста, попробуйте позже.');
      }
    } catch (error) {
      console.error('Error sending order:', error);
      alert('Произошла ошибка при отправке заказа. Пожалуйста, попробуйте позже.');
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50 text-white/90 font-normal">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-lg" onClick={onClose} />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <DialogPanel className="w-full max-w-md max-h-md bg-white/10 backdrop:blur-3xl rounded-lg shadow-lg p-4 relative">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 text-white/90 hover:text-white/70"
            >
              <span className="sr-only">Закрити</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="text-center mb-6">
              <FaCheckCircle className="text-white/90 h-12 w-12 mx-auto mb-4" />
              <h1 className="text-lg font-normal mb-4 text-center text-white/90">
                Ваше замовлення підтверджено!
              </h1>
              <p className="text-sm mb-4 text-center">
                Дякуємо за ваше замовлення. Ми отримали його і обробимо найближчим часом.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-normal text-white/90">Дані замовника</h3>
                <p><strong>ФІО:</strong> {orderData.fullName}</p>
                <p><strong>Телефон:</strong> {orderData.phoneNumber}</p>
                <p><strong>Email:</strong> {orderData.email}</p>
                <p><strong>Спосіб доставки:</strong> {orderData.deliveryMethod === 'pickup' ? 'Забрати в салоні' : 'Доставка на Нову Пошту'}</p>
                <p><strong>Місто:</strong> {orderData.city}</p>
                {orderData.deliveryMethod === 'delivery' && (
                  <p><strong>Відділення Нова Пошта:</strong> {orderData.postOffice}</p>
                )}
                <p><strong>Спосіб оплати:</strong> {orderData.paymentMethod === 'card' ? 'Картка' : 'Готівка'}</p>
              </div>
              <div>
                <h3 className="text-sm font-normal text-white/90">Товари в замовленні</h3>
                <ul className="space-y-2">
                  {orderData.products.map((product, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{product.name} {product.subname}</span>
                      <span>{product.quantity} шт.</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-normal">Разом: {orderData.totalPrice.toFixed(2)}₴</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={handleSubmitOrder}
                className="rounded-[10px] bg-white/10 backdrop-blur-3xl ring-1 ring-gray-400 px-6 py-3 text-sm  font-normal text-white/90 shadow-sm duration-200 ease-out hover:bg-white/30 hover:scale-[1.03] active:scale-95 mobile-landscape:text-base"
                disabled={isOrderSubmitted}
              >
                {isOrderSubmitted ? 'Замовлення підтверджено' : 'Підтвердити замовлення'}
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default OrderConfirmationModal;
