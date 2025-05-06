
import React from 'react';

type PaymentOptionProps = {
  logos?: string[];
  logo?: string;
  title: string;
  description: string;
};

const PaymentOption: React.FC<PaymentOptionProps> = ({ logos, logo, title, description }) => (
  <div className="bg-white/20  rounded-xl p-4  my-2">
    {logos ? (
      <div className="flex flex-row gap-6">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="Payment Option" className="w-8 h-8 object-scale-down mb-4 invert" />
        ))}
      </div>
    ) : (
      <img src={logo} alt="Payment Option" className="w-8 h-8 object-scale-down mb-4" />
    )}
    <div className="font-light text-lg md:text-lg mb-2">{title}</div>
    <p className="font-light text-justify text-sm md:text-sm lg:text-md mb-2">{description}</p>
  </div>
);

export default PaymentOption;
