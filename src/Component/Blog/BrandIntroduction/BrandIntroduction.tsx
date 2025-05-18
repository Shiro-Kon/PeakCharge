

const BrandIntroduction = () => {

  const benefits = [
    { title: "Натуральні інгредієнти", description: "У нашій продукції використовуються лише високоякісні, натуральні компоненти без штучних підсолоджувачів та барвників." },
    { title: "Підтримка експертів", description: "Ми надаємо консультації з харчування та тренувань для досягнення максимального результату." },
    { title: "Зручна доставка", description: "Швидка доставка по всій Україні прямо до ваших дверей." },
    { title: "Ексклюзивні пропозиції", description: "Отримуйте бонуси та спеціальні знижки як підписник PeakCharge." },
  ];

  return (
    <main className="relative   text-white/90  py-12 px-2">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl  md:text-6xl font-bold leading-tight">
          PeakCharge — спортивне харчування нового покоління
        </h1>
        <p className="mt-6 text-sm md:text-xl text-gray-400 max-w-2xl mx-auto">
          Ми створили продукцію, яка поєднує якість, ефективність та доступність. Ідеально підходить як для професіоналів, так і для тих, хто тільки починає шлях до своєї найкращої форми.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="bg-white/10 rounded-2xl p-6 shadow-md hover:bg-white/20 transition">
            <h3 className="text-sm md:text-xl font-semibold text-green-500">{benefit.title}</h3>
            <p className="mt-2 text-gray-300 text-[12px] md:text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl  font-bold">Чому обирають нас?</h2>
          <p className="mt-4 text-gray-300 text-sm">
            Ми не просто продаємо спортивне харчування. Ми допомагаємо досягати цілей. Кожен продукт PeakCharge — це результат досліджень, консультацій з експертами та відгуків наших клієнтів.
          </p>
          <ul className="mt-6 space-y-4 text-gray-300 list-disc list-inside">
            <li>Індивідуальний підбір продуктів</li>
            <li>Програми харчування та тренувань</li>
            <li>Підтримка спільноти однодумців</li>
            <li>Гарантія якості</li>
          </ul>
        </div>
        <div>
          <img
            src="../Images/Product_page/Protein2KG.png"
            alt="Продукт PeakCharge"
            className="rounded-2xl shadow-lg object-cover w-full h-120"
          />
        </div>
      </div>
    </main>
  );
};

export default BrandIntroduction;
