import  { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import MobileMenu from './MobileMenu';
import Cart from '../../Component/CartPage/Cart';
import { useCart } from '../../Component/CartPage/CartContext';
import { SlBasketLoaded } from "react-icons/sl";

const navigation = [
  { name: 'Головна', to: '/' },
  { name: 'Продукція', to: '/product' },
  { name: 'Доставка та оплата', to: '/delivery-payment' },
  { name: 'Підписка', to: '/subscriptions-page' },
  { name: 'Блог', to: '/blog' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const { getTotalQuantity } = useCart();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (to: string) => {
    setActiveLink(to);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(to);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-white bg-opacity-10 backdrop-blur-md ring-1 ring-white/30 rounded-full m-4">
      <nav className="flex items-center justify-between py-3 xxl:py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5" onClick={() => handleLinkClick('/')}>
            <span className="text-white  text-xl">PeakCharge</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex gap-x-4 xl:gap-x-6 xxl:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => handleLinkClick(item.to)}
              className={`relative text-base sm:text-lg md:text-xl lg:text-xl xxl:text-2xl font-light text-white transition-colors duration-300 pb-1 ${
                item.to === activeLink ? 'text-white' : 'text-white/80'
              }`}
            >
              {item.name}

              {item.to === activeLink && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/40 transform translate-y-1 transition-transform duration-300 rounded-full"
                  style={{
                    transformOrigin: 'left center',
                    transform: 'scaleX(1)',
                  }}
                />
              )}

              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/40 transform translate-y-1/2 transition-transform duration-300 rounded-full"
                style={{
                  transformOrigin: 'left center',
                  transform: item.to === activeLink ? 'scaleX(1)' : 'scaleX(0)',
                }}
              />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end md:space-x-6">
          
          <button
            className="relative"
            onClick={() => setCartOpen(true)}
          >
<SlBasketLoaded className='invert size-6' />            {getTotalQuantity() > 0 && (
              <span className="absolute -top-3 -right-3 flexitems-center justify-center   text-white">
                {getTotalQuantity()}
              </span>
            )}
          </button>
        </div>
      </nav>
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeLink={activeLink}
        handleLinkClick={handleLinkClick}
        navigation={navigation}
        openCart={() => setCartOpen(true)}
      />
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
};

export default Header;
