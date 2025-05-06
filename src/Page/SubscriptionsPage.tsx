import React from "react";
import Subscriptions_HS from "../Component/SubscriptionsPage/Subscriptions_HS";
import PricingSections from "../Component/Main/PricingSections";
import Subscriptions_WHy from "../Component/SubscriptionsPage/Subscriptions_WHy";
import Subscriptions_FAQ from "../Component/SubscriptionsPage/Subscriptions_FAQ";
import Subscriptions_CTA from "../Component/SubscriptionsPage/Subscriptions_CTA";

const SubscriptionsPage: React.FC = () => {
  

  return (
    <div className="">
      <Subscriptions_HS/>
      <Subscriptions_WHy/>
      <PricingSections/>

      <Subscriptions_FAQ/>
      <Subscriptions_CTA/>
      </div>
  );
};

export default SubscriptionsPage;