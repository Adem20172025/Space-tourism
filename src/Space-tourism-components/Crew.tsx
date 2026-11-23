import { useState } from "react";
import crew from "../Info.tsx/data.json";
export function Crew() {
  const [activeCrew, setActiveCrew] = useState(0);
  return (
    <section className="bg-[url('/assets/crew/background-crew-mobile.jpg')]  md:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] bg-no-repeat bg-cover bg-center text-white w-full flex justify-center">
      <section className="flex w-full flex-col items-center lg:items-start max-w-7xl text-center gap-10 mt-30 md:mt-40 mb-10">
        <h1 className="px-5 text-4xl uppercase lg:px-5 md:text-start w-full">
          <span className="text-white/30">02</span> Meet your crew
        </h1>
        <section className="flex flex-col lg:flex-row w-full gap-7">
          <article className="flex flex-col items-center lg:items-start lg:justify-center lg:text-start gap-5 md:gap-8 lg:gap-10 order-2 md:order-1 px-7 lg:w-1/2">
            <h2 className="text-4xl uppercase text-white/40 order-2 md:order-1">{crew.crew[activeCrew].role}</h2>
            <h1 className="text-5xl lg:text-6xl uppercase order-3 md:order-2">{crew.crew[activeCrew].name}</h1>
            <p className="max-w-135 lg:max-w-120 text-xl font-light order-4 md:order-3 leading-10">{crew.crew[activeCrew].bio}</p>
            <div className="flex gap-4 md:order-4 lg:mt-15">
              {crew.crew.map((crew, ind) => {
                return (
                  <div
                    key={crew.name}
                    onClick={() => setActiveCrew(ind)}
                    className={`${activeCrew === ind ? "bg-white" : "bg-white/30"} size-3 rounded-full cursor-pointer`}
                  ></div>
                );
              })}
            </div>
          </article>
          <article className="px-7 md:order-1 lg:w-1/2 flex justify-center items-center">
            <img
              src={crew.crew[activeCrew].images.png}
              alt={crew.crew[activeCrew].name}
            />
          </article>
        </section>
      </section>
    </section>
  );
}
