import { useSpring, animated, useChain, useSpringRef } from '@react-spring/web';
import { Link } from 'react-router-dom';

const HeroBlock = () => {
  const backgroundRef = useSpringRef();
  const logoRef = useSpringRef();
  const buttonRef = useSpringRef();

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

  const buttonSpring = useSpring({
    ref: buttonRef,
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 180, friction: 24 },
  });

  useChain([backgroundRef, logoRef, buttonRef], [0, 0.5, 1]);

  

  return (
    <div className="relative h-screen overflow-hidden border-b border-gray-600">
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
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-[#00ff99] to-[#ff0066] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
        
      </div>

    
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
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
      <div className="relative z-10 flex items-center justify-center h-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <animated.div style={buttonSpring}>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center font-light tracking-wider">
          <div className="relative rounded-full px-3 py-1 text-sm text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
           Більше про бренд та мету.{' '}
            <Link to="/blog" className=" text-green-500">
              <span aria-hidden="true" className="absolute inset-0" />
              Читати більше <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
          </animated.div>
          <animated.div style={logoSpring}>
            <div className="mt-6  flex justify-center">
            <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl  font-semibold  text-white/90">
          Розкрийте свій піковий потенціал із PeakCharge
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-gray-400 font-normal">
          Якісне спортивне харчування, персоналізовані набори та аксесуари для ваших тренувань. Все, що потрібно для досягнення ваших цілей, — в одному місці.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            
            <Link
              to="/subscriptions-page"
              className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-black shadow-md hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Спробуйте Monthly Box сьогодні
            </Link>
            <Link to="/product" className="text-sm font-semibold text-gray-400 hover:text-gray-300 ">
            Вибрати продукти самостійно <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;