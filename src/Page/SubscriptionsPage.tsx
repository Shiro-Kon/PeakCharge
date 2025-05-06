import React from "react";
import SubscriptionsHS from "../Component/SubscriptionsPage/SubscriptionsHS";
import SubscriptionsWHy from "../Component/SubscriptionsPage/SubscriptionsWHy";
import SubscriptionsFAQ from "../Component/SubscriptionsPage/SubscriptionsFAQ";
import SubscriptionsCTA from "../Component/SubscriptionsPage/SubscriptionsCTA";
import PricingSections from "../Component/Main/PricingSections";



const SubscriptionsPage: React.FC = () => {
  

  return (
    <div className="">
      <SubscriptionsHS/>
      <SubscriptionsWHy/>
      <PricingSections/>
      <SubscriptionsFAQ/>
      <SubscriptionsCTA/>
      </div>
  );
};

export default SubscriptionsPage;