import { useState } from "react";
import tech from "../Info.tsx/data.json";
export function Technology() {
  const [activeTech, setActiveTech] = useState(0);
  return (
    <section className="bg-[url('/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] text-white bg-cover bg-center bg-no-repeat w-full min-h-screen lg:flex justify-end">
      <section className="mt-30 md:mt-42 max-w-340 flex flex-col gap-10 items-center mb-15 w-full">
        <h1 className="text-4xl px-5 uppercase tracking-wider md:text-start w-full text-center">
          <span className="text-white/30">03</span> space launch 101
        </h1>
        <section className="flex flex-col lg:flex-row gap-15 lg:gap-20 px-5 lg:pr-0 items-center w-full">
          <article className="order-1 flex flex-col gap-10 lg:flex-row lg:gap-19 lg:w-1/2 ">
            <div className="flex lg:flex-col lg:w-fit gap-10 lg:justify-between w-full justify-center">
              {tech.technology.map((techn, ind) => (
                <div
                  className={`border-2 border-white/30 size-15 lg:size-20 rounded-full flex items-center justify-center cursor-pointer ${activeTech === ind ? "bg-white text-black text-md font-semibold" : "bg-transparent"}`}
                  onClick={() => setActiveTech(ind)}
                  key={ind}
                >
                  {techn.id}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5 lg:gap-8 text-center lg:text-start">
              <div className="flex flex-col gap-2">
                <p className="text-md font-light">The terminology...</p>
                <h2 className="text-4xl lg:text-5xl uppercase tracking-wider">
                  {tech.technology[activeTech].name}
                </h2>
              </div>
              <p className="text-md font-light leading-8 lg:leading-10 max-w-130">
                {tech.technology[activeTech].description}
              </p>
            </div>
          </article>
          <article className="lg:order-2 lg:w-1/2 lg:flex lg:justify-end">
            <img
              className="hidden lg:flex w-full"
              src={tech.technology[activeTech].images.portrait}
              alt={tech.technology[activeTech].name}
            />{" "}
            <img
              className="lg:hidden"
              src={tech.technology[activeTech].images.landscape}
              alt={tech.technology[activeTech].name}
            />
          </article>
        </section>
      </section>
    </section>
  );
}
