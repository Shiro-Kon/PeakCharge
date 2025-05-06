import { TiThumbsOk, TiThumbsUp } from "react-icons/ti";
import AnimatedElement from "../Component/AnimatedElement/AnimatedElement";

export default function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-black py-16 sm:py-24 lg:py-32 border-t border-gray-600 text-white/90">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 scale-150"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00ff99] to-[#ff0066] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <AnimatedElement
            direction="up"
            delay={0.1}
            className="text-5xl md:text-5xl lg:text-5xl xl:text-6xl xxl:text-7xl text-soft-sand font-pushkin mb-2 md:mb-6 lg:mb-4"
          >
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight ">
                Будь кращим з PeakCharge
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Руйнуй всі стіни на шляху до кращої цілі. Підпишись на корисні
                поради та цікаві пропозиції.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Електронна пошта
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base  outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
                <button
                  type="submit"
                  className="rounded-[10px] bg-white/10 backdrop-blur-3xl ring-1 ring-gray-400 px-6 py-3 text-sm md:text-sm lg:text-xl xl:text-xl xxl:text-3xl font-normal text-white/90 shadow-sm duration-200 ease-out hover:bg-white/30 hover:scale-[1.03] active:scale-95 mobile-landscape:text-base"
                >
                  Підписатися
                </button>
              </div>
            </div>
          </AnimatedElement>
          <AnimatedElement
            direction="up"
            delay={0.2}
            className="text-5xl md:text-5xl lg:text-5xl xl:text-6xl xxl:text-7xl text-soft-sand font-pushkin mb-2 md:mb-6 lg:mb-4"
          >
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <TiThumbsOk className="size-8" />
                </div>
                <dt className="mt-4 text-base font-semibold ">Кожну неділю </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Прийми участь у розіграші нашого мерчу
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 ">
                  <TiThumbsUp className="size-8" />
                </div>
                <dt className="mt-4 text-base font-semibold ">Без спаму</dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Тільки корисні поради та цікаві пропозиції, які залежать на
                  основі ваших замовлень
                </dd>
              </div>
            </dl>
          </AnimatedElement>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
}
