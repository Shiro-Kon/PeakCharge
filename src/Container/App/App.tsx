import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import ScrollToTop from "../../Component/ScrollToTop/ScrollToTop";
import Main from "../../Page/Main";
import ScrollToTopButton from "../ScrollToTop";
import Footer from "../Footer";

const ProductPage = lazy(() => import("../../Page/ProductPage"));
const DeliveryPaymentPage = lazy(
  () => import("../../Page/DeliveryPaymentPage")
);
const ProductDetailsPage = lazy(
  () => import("../../Component/ProductPage/ProductDetails/ProductDetailsPage")
);
const SubscriptionsPage = lazy(() => import("../../Page/SubscriptionsPage"));
const Blog = lazy(() => import("../../Page/Blog"));
const BlogDetailsPage = lazy(
  () => import("../../Component/Blog/BlogDetailsPage")
);
const CheckoutPage = lazy(() => import("../../Page/CheckoutPage"));
const NotFoundPage = lazy(() => import("../../Page/NotFoundPage"));

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main className="min-h-screen">
        <div className="fixed inset-0">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
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
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00ff99] to-[#ff0066] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen text-sm md:text-sm lg:text-md xl:text-xl  font-normal text-white/90 my-4 xl:my-6 text-balance break-words ">
              Заватаження
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/product" element={<ProductPage />} />
            <Route
              path="/product/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="/delivery-payment" element={<DeliveryPaymentPage />} />
            <Route path="/subscriptions-page" element={<SubscriptionsPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogDetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default App;
