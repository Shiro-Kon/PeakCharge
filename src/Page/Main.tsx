import HeroBlock from "../Component/Main/HeroBlock";
import Carousel from "../Component/Main/Carousel/Carousel";
import WhyUs from "../Component/Main/WhyUs";
import PricingSections from "../Component/Main/PricingSections";

const Main: React.FC = () => {
  return (
    <div className=" grid gap-12">
      <HeroBlock />
      <Carousel />
      <WhyUs />
      <section className="pt-12 pb-16">
        <PricingSections />
      </section>
    </div>
  );
};

export default Main;
