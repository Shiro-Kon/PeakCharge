
import React, { useState } from 'react';
import AnimatedElement from '../Component/AnimatedElement/AnimatedElement';
import DelPaySectionsData from '../Utils/DelPaySectionsData';
import Section from '../Component/DeliveryPayment/Section';
import DeliveryOption from '../Component/DeliveryPayment/DeliveryOption';
import PaymentOption from '../Component/DeliveryPayment/PaymentOption';
import { animated, useChain, useSpring, useSpringRef } from '@react-spring/web';


const DeliveryPaymentPage: React.FC = () => {
  const [sections, setSections] = useState(DelPaySectionsData.map(() => false));

  const toggleSection = (index: number) => {
    setSections((prevSections) =>
      prevSections.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const backgroundRef = useSpringRef();
 

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


  useChain([backgroundRef], [0, 0.5, 1]);

  return (
    <main className="container isolate mx-auto lg:w-[90%]  overflow-hidden  my-12 md:my-16 xxl:my-28 flex justify-center min-h-screen  text-white/90 ">
       <animated.div style={backgroundSpring} className="absolute inset-0">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00ff99] to-[#ff0066] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
        </div>

        
      </animated.div>

      <div className="container mx-auto px-6 py-14 md:py-24 text-center">
        <div className="grid gap-0 md:gap-8">
          <div className="mb-8 md:mb-0 md:mx-16">
            <AnimatedElement
              direction="left"
              delay={0.1}
              className="text-4xl lg:text-5xl xl:text-6xl font-normal  mb-2 md:mb-6 lg:mb-4"
            >
              Доставка та оплатa
            </AnimatedElement>
            <AnimatedElement direction="left" delay={0.2}>
              <p className="text-md md:text-2xl lg:text-2xl xl:text-xl mb-2 lg:mb-4 font-light">
                У нас є 2 способи доставки та 3 способи оплати, ви можете
                скористатись найбільш зручним для вас.
              </p>
            </AnimatedElement>
            <AnimatedElement direction="left" delay={0.3}>
              <p className="text-md md:text-2xl lg:text-2xl xl:text-xl  font-normal ">
                ЗВЕРНІТЬ УВАГУ! <span className='font-light'>Посилка зберігається на відділенні 5 днів.</span>
              </p>
            </AnimatedElement>
          </div>

          

          <div className="mb-14  mx-auto max-w-md">
            {DelPaySectionsData.map((section, index) => (
              <AnimatedElement  key={index} direction="left" delay={0.3 + index * 0.1}>
                <Section
                  title={section.title}
                  isOpen={sections[index]}
                  toggleSection={() => toggleSection(index)}
                >
                  {section.content.map((content, idx) => {
                    if (content.type === 'delivery') {
                      return (
                        <DeliveryOption
                          key={idx}
                          logo={content.logo}
                          title={content.title}
                          description={content.description}
                        />
                      );
                    } else if (content.type === 'payment') {
                      return (
                        <PaymentOption
                          key={idx}
                          logos={content.logos}
                          logo={content.logo}
                          title={content.title}
                          description={content.description}
                        />
                      );
                    } else {
                      return <p key={idx} className="font-light text-left text-sm md:text-md md:text-md   xxl:text-xl mb-4 p-4 rounded-xl ">{content.text}</p>;
                    }
                  })}
                </Section>
              </AnimatedElement>
            ))}
          </div>
          
        </div>
        
      </div>
      
    </main>
  );
};

export default DeliveryPaymentPage;
