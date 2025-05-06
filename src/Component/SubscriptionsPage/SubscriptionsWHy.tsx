import React from 'react'

type Props = {}
const text1 = [
    { name: 'Search', description: 'Постійно шукати знижки та акції?' },
    { name: 'Money for nothing', description: 'Платити за кожне замовлення доставки?' },
    { name: 'Doubt', description: 'Сумніватись, чи підходить тобі продукт?' },
  ]
const text2 = [
    { name: 'Personalization', description: 'Персональний підбір добавок з урахуванням твоїх цілей (зниження ваги, набір маси, підтримка форми).' },
    { name: 'Saving money on delivery', description: 'Безкоштовна доставка на кожне замовлення.' },
    { name: 'Consultation', description: 'Консультація з фітнес-тренером для налаштування плану харчування та тренувань.' },
    { name: 'Telegram publics', description: 'Доступ до Telegram-спільноти PeakCharge — поділися успіхами, ставай питання, спілкуйся з однодумцями.' },
    { name: 'Gifts', description: 'Подарунки та спецпропозиції для передплатників.' },
  ]

const SubscriptionsWHy = (props: Props) => {
  return (
    <main className="relative min-h-screen overflow-hidden border-b border-gray-600 ">
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 text-white/90 ">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ти знаєш, чого хочеш. Ми допоможемо досягти цього.</h2>
          <p className="mt-4 text-gray-400 font-normal">
          У сучасному ритмі життя складно підібрати відповідне спортивне харчування, стежити за правильним дозуванням та не переплачувати за доставку. А ще хочеться мати підтримку експертів, коли потрібна допомога.
          </p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {text1.map((feature) => (
              <div key={feature.name} className="border-t-4 border-red-600 pt-4">
                <dt className="font-medium ">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-400 font-normal">{feature.description}</dd>
              </div>
            ))}
          </dl>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-16">З PeakCharge підпискою все простіше:</h2>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {text2.map((feature) => (
              <div key={feature.name} className="border-t-4 border-green-600 pt-4">
                <dt className="font-medium ">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-400 font-normal">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src="/Images/Product_page/Protein700g.png"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            src="/Images/Product_page/Creatine2kg.png"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Side of walnut card tray with card groove and recessed card area."
            src="/Images/Product_page/Protein2KG.png"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            src="/Images/Product_page/Creatine300g.png"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
      </main>
  )
}

export default SubscriptionsWHy