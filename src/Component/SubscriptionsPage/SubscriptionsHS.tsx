import { useState } from "react";
import SubscriptionModal from "./SubscriptionModal"; 

const SubscriptionsHS = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden border-b border-gray-600 text-center flex flex-col items-center justify-center px-4 text-white/90 font-normal">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
        PeakCharge - Твоя сила, твої правила
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl">
        Оформи підписку на спортивне харчування та отримай більше, ніж просто продукт: безкоштовна доставка, консультації, доступ до спільноти та ексклюзивні подарунки.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-md bg-green-600 px-6 py-3 text-md font-semibold text-white/90 shadow-md hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Оформити підписку
        </button>
      </div>

      <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default SubscriptionsHS;
