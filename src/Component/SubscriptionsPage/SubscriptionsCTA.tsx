import { Link } from "react-router-dom";

type Props = {};

const SubscriptionsCTA = (props: Props) => {
  return (
    <section className="py-16 px-4  text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto leading-snug">
        Почни свій шлях до кращої форми вже сьогодні
      </h2>
      <p className="mt-4 text-lg max-w-xl mx-auto text-white/80">
        Оформи передплату прямо зараз — і отримай безкоштовну консультацію
        тренера у подарунок!
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to="/subscriptions-page"
          className="rounded-md bg-green-600 px-6 py-3 text-md font-semibold text-white/90 shadow-md hover:bg-green-500 "
        >
          Оформити передплату
        </Link>
      </div>
    </section>
  );
};

export default SubscriptionsCTA;
