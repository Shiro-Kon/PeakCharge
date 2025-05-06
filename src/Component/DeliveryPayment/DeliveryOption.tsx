
import React from 'react';

type DeliveryOptionProps = {
  logo: string;
  title: string;
  description: string;
};

const DeliveryOption: React.FC<DeliveryOptionProps> = ({ logo, title, description }) => (
  <div className="bg-white/20  rounded-xl p-4 my-2">
    <img src={logo} alt="Delivery Option" className="w-8 h-8 object-scale-down mb-2" />
    <div className="font-light text-lg md:text-lg mb-2">{title}</div>
    <p className="font-light text-justify text-sm md:text-sm lg:text-md mb-2">{description}</p>
  </div>
);

export default DeliveryOption;
