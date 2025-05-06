type DeliveryContent = {
    type: 'delivery';
    logo: string;
    title: string;
    description: string;
  };
  
  type PaymentContent = {
    type: 'payment';
    logos?: string[];
    logo?: string;
    title: string;
    description: string;
  };
  
  type TextContent = {
    type: 'text';
    text: string;
  };
  
  type SectionContent = DeliveryContent | PaymentContent | TextContent;
  
  type Section = {
    title: string;
    content: SectionContent[];
  };


const  DelPaySectionsData:Section[] = [
    {
      title: 'Способи доставки',
      content: [
        {
        
          type: 'delivery',
          logo: './Images/Delivery_page/Nova/Nova.svg',
          title: 'Нова Пошта на склад',
          description: 'Безкоштовна доставка від будь-якої суми. Відправка протягом 1-2 робочих днів, при накладеному платежі, повернення коштів оплачує клієнт. В період акцій термін доставки та очікування може бути продовженим.',
        },
        {
          type: 'delivery',
          logo: './Images/Delivery_page/Nova/Nova.svg',
          title: 'Нова Пошта кур’єром',
          description: 'Безкоштовна доставка від будь-якої суми. Відправка протягом 1-2 робочих днів, при накладеному платежі, повернення коштів оплачує клієнт. В період акцій термін доставки та очікування може бути продовженим.',
        },
      ],
    },
    {
      title: 'Способи оплати',
      content: [
        {
          type: 'payment',
          logos: ['./Images/Delivery_page/Nova/A.svg', './Images/Delivery_page/Nova/G.svg'],
          title: 'Оплата онлайн',
          description: 'Оплатіть онлайн своє замовлення безпосередньо на сайті',
        },
        {
          type: 'payment',
          logo: './Images/Delivery_page/Nova/Nova.svg',
          title: 'При отриманні',
          description: 'Оформіть замовлення і оплатіть його при отриманні.',
        },
      ],
    },
    {
      title: 'Терміни та оплата доставки',
      content: [
        {
          type: 'text',
          text: 'Відправка відбувається компанією Нова пошта протягом 1-2 робочих днів. Комісія за накладений платіж оплачується отримувачем.',
        },
      ],
    },
    
  ];
  
  export default DelPaySectionsData;
  