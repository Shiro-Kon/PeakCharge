import React from "react";
import { ImHappy, ImHipster, ImUserCheck } from "react-icons/im";
import AnimatedElement from "../AnimatedElement/AnimatedElement";
import { useSpring, animated, useChain, useSpringRef } from '@react-spring/web';


const FeatureIcon: React.FC<{ icon: JSX.Element }> = ({ icon }) => (
  <div className="w-16 h-16 sm:w-20 sm:h-20">{icon}</div>
);

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-white text-center break-words leading-relaxed font-sans content-center">
    <div className="flex text-center content-center justify-center size-14 text-green-500">
    <FeatureIcon  icon={icon}  />
    </div>
    <h3 className="my-4 text-xl lg:text-3xl">{title}</h3>
    <p className="text-sm lg:text-lg font-light">{description}</p>
  </div>
);



const WhyUs: React.FC = () => {
  const backgroundRef = useSpringRef();
  const logoRef = useSpringRef();

  const backgroundSpring = useSpring({
    ref: backgroundRef,
    from: { 
      opacity: 0, 
      transform: 'translateY(30px)', 
    },
    to: { 
      opacity: 1, 
      transform: 'translateY(0px)',
    },
    config: { tension: 350, friction: 250, duration: 600 },
  });

  const logoSpring = useSpring({
    ref: logoRef,
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 180, friction: 24 },
  });



  useChain([backgroundRef, logoRef], [0, 0.5,]);

  return (
    <div className="mx-auto w-[90%] py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <animated.div style={backgroundSpring} className="">

          <span className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl ">
           Чим ми кращі ?
          </span>
          </animated.div>
        </div>
        <AnimatedElement
                        direction="up"
                        delay={0.2}
                        className="text-5xl md:text-5xl lg:text-5xl xl:text-6xl xxl:text-7xl text-soft-sand font-pushkin mb-2 md:mb-6 lg:mb-4"
                      >
<animated.div style={logoSpring}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 text-center">
                    
          
          <Feature
            icon={
              <ImHipster  className="size-12"/>

            }
            title="Професіоналізм"
            description="Досвід більше 10 років"
          />

          <Feature
            icon={
              <ImHappy className="size-12" />
            }
            title="Якість"
            description="Ми обираємо тільки найкращі інгредієнти, щоб забезпечити ваші результаті"
          />

          <Feature
            icon={
              <ImUserCheck className="size-12"/>
            }
            title="Індивідуальний підхід"
            description="Наші менеджери підбруть для вас найкращий продукт під ваші потреби "
          />
        </div>
        </animated.div>

        </AnimatedElement>
      </div>
    </div>
  );
};

export default WhyUs;