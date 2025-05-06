import { Link } from "react-router-dom";
import AnimatedElement from "../AnimatedElement/AnimatedElement";

const tiers = [
    {
      name: 'Місячна підписка',
      id: 'tier-hobby',
      href: '/',
      priceMonthly: '₴999',
      description: " Ідеальний варіант для тих, хто хоче спробувати наші продукти або шукає гнучкість у планах.",
      features: ['Безкоштовна доставка', 'Персоналізований набір добавок', 'Можливість зміни набору кожного місяця',],
      featured: false,
    },
    {
      name: 'Річна підписка',
      id: 'tier-enterprise',
      href: '/',
      priceMonthly: '₴9999',
      description: 'Економічно вигідний варіант для тих, хто готовий інвестувати в свій прогрес довгостроково.',
      features: [
        'Безкоштовна доставка протягом року',
        'Ексклюзивні подарунки кожного місяця ',
        'Знижка 20% на всі аксесуари ',
        'Доступ до закритого контенту (тренувальні плани, поради)',
        'Можливість зміни набору кожного місяця',
        'Адаптований набір добавок',
      ],
      featured: true,
    },
  ];
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }
  
  const PricingSections = () => {
    return (
      <div className="relative isolate  px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 text-white border-y border-gray-600">
  
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
  
    
        <div className="mx-auto max-w-2xl sm:max-w-4xl text-center">
        <AnimatedElement
            direction="up"
            delay={0.1}
            className="text-5xl md:text-5xl lg:text-5xl xl:text-6xl xxl:text-7xl text-soft-sand  mb-2 md:mb-6 lg:mb-4"
          >
          <h2 className="text-sm sm:text-4xl font-semibold text-white/90">Місячна або річна підписка на продукти від PeakCharge</h2>
          <p className="mt-6 text-2xl font-normal tracking-tight text-green-500 ">
          Виберіть план, який підходить саме вам
          </p>
          <p className="mt-2 text-base sm:text-lg font-normal text-white/90">
          Оберіть доступний план, наповнений найкращими можливостями для досягнення ваших цілей.
          </p>
          </AnimatedElement>

        </div>
     
        
        <div className="mx-auto mt-12 sm:mt-16 max-w-md sm:max-w-3xl lg:max-w-5xl grid grid-cols-1 gap-6 lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <AnimatedElement
            direction="up"
            delay={0.2}
            className="text-5xl md:text-5xl lg:text-5xl xl:text-6xl xxl:text-7xl text-soft-sand font-pushkin mb-2 md:mb-6 lg:mb-4"
          >
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? 'relative bg-white/10 shadow-2xl' : 'bg-black/60',
                tier.featured
                  ? ''
                  : tierIdx === 0
                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                    : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                'rounded-3xl p-6 sm:p-8 ring-1 ring-white/10',
              )}
            >
              <h3 className={classNames(tier.featured ? 'text-green-500' : 'text-gray-400', 'text-sm font-semibold')}>
                {tier.name}
              </h3>
  
              <p className="mt-3 flex items-baseline gap-x-2">
                <span className={classNames(tier.featured ? 'text-white' : 'text-gray-300', 'text-3xl sm:text-4xl font-semibold')}>
                  {tier.priceMonthly}
                </span>
                <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-sm')}>/month</span>
              </p>
  
              <p className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-300', 'mt-4 text-sm sm:text-base')}>
                {tier.description}
              </p>
  
              <ul className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-300', 'mt-6 space-y-3 text-sm')}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className={classNames(tier.featured ? 'text-green-500' : 'text-gray-400', 'h-5 w-5 shrink-0')}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
  
              <Link
  to={tier.href}
  aria-describedby={tier.id}
  className={classNames(
    tier.featured
      ? 'bg-green-500 text-black hover:bg-green-600 focus-visible:outline-green-500'
      : 'text-green-500 ring-1 ring-green-200 ring-inset hover:ring-green-300 focus-visible:outline-green-500',
    'mt-6 block rounded-md px-4 py-2.5 text-center text-sm font-semibold cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-8', // добавлен cursor-pointer
  )}
>
  Почати сьогодні
</Link>

            </div>
            </AnimatedElement>
          ))}
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
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00ff99] to-[#ff0066] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      </div>
    );
  };
  
  export default PricingSections;
  