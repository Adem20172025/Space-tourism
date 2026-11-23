import { useState } from "react";
import data from "../Info.tsx/data.json";
export function Destination() {
  const [activDest, setActiveDest] = useState(0);
  return (
    <section className="bg-[url('/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] text-white min-h-screen bg-cover bg-center bg-no-repeat w-full flex items-center justify-center">
      <section className="max-w-7xl flex flex-col gap-17 mt-35 lg:mt-40 items-center mb-15 w-full">
        <h1 className="px-5 border flex gap-2 lg:gap-5 md:justify-start text-center lg:text-start justify-center text-3xl uppercase font-light tracking-widest w-full">
          <span className="w-full lg:w-fit font-semibold border text-white/30 text-end lg:text-start">01</span>pick your
          destination
        </h1>
        <section
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-25 w-full"
          key={data.destinations[activDest].name}
        >
          <article className="px-8 lg:w-1/2 lg:flex lg:justify-end">
            <img src={data.destinations[activDest].images.png} />
          </article>
          <article className=" text-center flex flex-col gap-7 items-center px-5 w-full lg:w-1/2 lg:text-start lg:items-start">
            <div className="flex gap-4">
              {data.destinations.map((planet, index) => {
                return (
                  <p
                    onClick={() => setActiveDest(index)}
                    key={planet.name}
                    className={`${activDest === index ? "border-b-3" : ""} uppercase text-md font-light cursor-pointer pb-1`}
                  >
                    {planet.name}
                  </p>
                );
              })}
            </div>
            <div className="flex flex-col gap-5 border-b border-b-white/30 pb-15 w-full items-center lg:items-start">
              <h1 className="text-7xl md:text-8xl font-semibold uppercase tracking-widest">
                {data.destinations[activDest].name}
              </h1>
              <p className="max-w-130 text-md font-light leading-10">
                {data.destinations[activDest].description}
              </p>
            </div>
            <article className="pt-5 flex flex-col lg:flex-row w-full lg:gap-23 gap-5">
              <div>
                <p className="text-md font-light leading-10 uppercase">
                  avg. distance
                </p>
                <h2 className="text-4xl font-light uppercase">
                  {data.destinations[activDest].distance}
                </h2>
              </div>
              <div>
                <p className="text-md font-light leading-10 uppercase">
                  est. travel time
                </p>
                <h2 className="text-4xl uppercase font-light">
                  {data.destinations[activDest].travel}
                </h2>
              </div>
            </article>
          </article>
        </section>
      </section>
    </section>
  );
}
