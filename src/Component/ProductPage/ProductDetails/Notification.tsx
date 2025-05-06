import React from 'react';
import { motion } from 'framer-motion';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed top-[12%] right-2 text-[12px]  rounded-[10px] bg-white/10 backdrop-blur-3xl ring-1 ring-gray-400 px-4 py-2 text-sm  font-normal text-white/90 shadow-sm "
    >
      <p>{message}</p>
    </motion.div>
  );
};

export default Notification;
