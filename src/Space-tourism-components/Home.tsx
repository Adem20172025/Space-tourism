// import mobbg from "../assets/home/background-home-mobile.jpg";
export function Home() {
  return (
    <section
      className="bg-[url('/assets/home/background-home-mobile.jpg')]
      md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')] min-h-screen bg-cover bg-center bg-no-repeat w-full flex justify-center lg:items-end"
    >
      <section className="flex flex-col lg:flex-row gap-20 md:gap-20 items-center pb-15 lg:pb-0 w-full lg:justify-between max-w-7xl mt-25 lg:mt-0 mx-10 min-h-screen">
        <article className="flex text-white pt-30 flex-col gap-5 md:gap-10 text-center text-xl px-5 lg:text-start w-full">
          <p className="text-4xl font-light tracking-wider">
            So, you want to travel to
          </p>
          <h1 className="text-9xl uppercase md:tracking-widest "> Space</h1>
          <p className="text-xl font-light leading-9 tracking-wider lg:tracking-widest">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <div className="flex items-center lg:items-end justify-center w-full min-h-130">
          <div className="bg-white text-3xl uppercase rounded-full size-60 flex items-center justify-center tracking-wider font-medium">
            explore
          </div>
        </div>
      </section>
    </section>
  );
}
