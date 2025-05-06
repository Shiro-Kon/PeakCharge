import React from 'react'

type Props = {}

const Subscriptions_FAQ = (props: Props) => {
  return (
    <section className="py-16 px-4  text-white border-y border-gray-600">
    <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-semibold mb-8">Часті питання</h2> 
<div className="space-y-6 text-center"> 
<div> 
<h3 className="font-normal text-lg ">Чи можна змінити продукт у передплаті?</h3> 
<p className="text-gray-400 font-normal">Так, перед кожним новим місяцем менеджер зв'яжеться з вами для узгодження.</p> 
</div> 
<div> 
<h3 className="font-normal text-lg ">А якщо я хочу зупинити передплату?</h3> 
<p className="text-gray-400 font-normal">Можна призупинити на строк до 3 місяців без втрати привілеїв.</p> 
</div> 
<div> 
<h3 className="font-normal text-lg ">Як отримати подарунки?</h3> 
<p className="text-gray-400 font-normal">Вони автоматично додаються до вашого замовлення за акцією або квартальним бонусом.</p> 
</div>
      </div>
    </div>
  </section>
  )
}

export default Subscriptions_FAQ