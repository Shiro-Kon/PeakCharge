import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useMemo } from "react";


type Direction = "up" | "down" | "left" | "right" | "visibility";


interface AnimatedElementProps {
  className?: string;
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  threshold?: number;
  distance?: number;
  customVariants?: Variants;
}


type AnimationVariant = {
  opacity: number;
  x?: number;
  y?: number;
}


const getVariants = (direction: Direction, distance: number = 100): Variants => {
  const baseVariants = {
    hidden: { opacity: 0 } as AnimationVariant,
    visible: { opacity: 1 } as AnimationVariant,
  };

  const animations: Record<Direction, Variants> = {
    up: {
      hidden: { ...baseVariants.hidden, y: distance },
      visible: { ...baseVariants.visible, y: 0 },
    },
    down: {
      hidden: { ...baseVariants.hidden, y: -distance },
      visible: { ...baseVariants.visible, y: 0 },
    },
    left: {
      hidden: { ...baseVariants.hidden, x: -distance },
      visible: { ...baseVariants.visible, x: 0 },
    },
    right: {
      hidden: { ...baseVariants.hidden, x: distance },
      visible: { ...baseVariants.visible, x: 0 },
    },
    visibility: baseVariants,
  };

  return animations[direction];
};

const AnimatedElement = React.memo<AnimatedElementProps>(({
  className = "",
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  distance = 100,
  customVariants
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });
  const variants = useMemo(
    () => customVariants || getVariants(direction, distance),
    [direction, distance, customVariants]
  );
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: Math.max(0.1, duration),
        ease: [0.25, 0.1, 0.25, 1],
        delay: Math.max(0, delay),
      }}
    >
      {children ?? <div>Контент отсутствует</div>}
    </motion.div>
  );
});


AnimatedElement.displayName = 'AnimatedElement';

export default AnimatedElement;