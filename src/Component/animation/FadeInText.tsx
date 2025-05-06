import React, {useMemo } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';


type BaseAnimationProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  onAnimationComplete?: () => void;
}

type Direction = 'left' | 'right' | 'top' | 'bottom';


interface FadeInTextProps extends BaseAnimationProps {
  delay?: number;
  duration?: number;
  scale?: number;
}

const FadeInText: React.FC<FadeInTextProps> = React.memo(({ 
  children, 
  delay = 200, 
  duration = 500,
  scale = 0.95,
  className,
  style,
  disabled = false,
  onAnimationComplete
}) => {
  const styles = useSpring({
    from: { opacity: 0, transform: `scale(${scale})` },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { ...config.gentle, duration },
    delay,
    reset: false, 
    immediate: disabled,
    onRest: onAnimationComplete,
  });

  return (
    <animated.div 
      style={{ ...style, ...styles }} 
      className={className}
    >
      {children}
    </animated.div>
  );
});


interface SlideInProps extends BaseAnimationProps {
  direction: Direction;
  duration?: number;
  distance?: number;
}

const SlideInComponent: React.FC<SlideInProps> = React.memo(({ 
  direction, 
  children, 
  duration = 500,
  distance = 100,
  className,
  style,
  disabled = false,
  onAnimationComplete
}) => {
  const translateMap = useMemo(() => ({
    left: `translateX(-${distance}%)`,
    right: `translateX(${distance}%)`,
    top: `translateY(-${distance}%)`,
    bottom: `translateY(${distance}%)`,
  }), [distance]);

  const styles = useSpring({
    from: { opacity: 0, transform: translateMap[direction] },
    to: { opacity: 1, transform: 'translate(0)' },
    config: { mass: 1, tension: 210, friction: 20, duration },
    immediate: disabled,
    onRest: onAnimationComplete,
  });

  return (
    <animated.div 
      style={{ ...style, ...styles }}
      className={className}
    >
      {children}
    </animated.div>
  );
});


interface ScrollAnimationProps extends BaseAnimationProps {
  threshold?: number;
  offset?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

const createScrollAnimation = (isHorizontal: boolean) => {
  return React.memo<ScrollAnimationProps>(({ 
    children, 
    threshold = 0.1, 
    offset = 20,
    className,
    style,
    disabled = false,
    triggerOnce = true,
    rootMargin = "0px",
    onAnimationComplete
  }) => {
    const { ref, inView } = useInView({ 
      threshold,
      triggerOnce,
      rootMargin
    });

    const transform = isHorizontal ? 
      `translateX(${offset}px)` : 
      `translateY(${offset}px)`;

    const styles = useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? 'translate(0)' : transform,
      config: { tension: 180, friction: 24 },
      immediate: disabled,
      onRest: inView ? onAnimationComplete : undefined,
    });

    return (
      <animated.div 
        ref={ref} 
        style={{ ...style, ...styles }}
        className={className}
      >
        {children}
      </animated.div>
    );
  });
};

const ScrollAnimation = createScrollAnimation(false);
const ScrollAnimationX = createScrollAnimation(true);


interface BounceProps extends BaseAnimationProps {
  delay?: number;
  intensity?: number;
  duration?: number;
  infinite?: boolean;
}

const BounceComponent: React.FC<BounceProps> = React.memo(({ 
  children, 
  delay = 200,
  intensity = 1.2,
  duration = 1000,
  infinite = true,
  className,
  style,
  disabled = false,
  onAnimationComplete
}) => {
  const styles = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: `scale(${intensity})` },
    reset: false,
    reverse: true,
    loop: infinite,
    delay,
    config: { tension: 200, friction: 10, duration },
    immediate: disabled,
    onRest: onAnimationComplete,
  });

  return (
    <animated.div 
      style={{ ...style, ...styles }}
      className={className}
    >
      {children}
    </animated.div>
  );
});


FadeInText.displayName = 'FadeInText';
SlideInComponent.displayName = 'SlideInComponent';
ScrollAnimation.displayName = 'ScrollAnimation';
ScrollAnimationX.displayName = 'ScrollAnimationX';
BounceComponent.displayName = 'BounceComponent';

export { 
  FadeInText, 
  SlideInComponent, 
  ScrollAnimation, 
  ScrollAnimationX, 
  BounceComponent,
  type Direction 
};