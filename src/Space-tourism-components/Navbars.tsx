import { NavLink } from "react-router-dom";
import menuBtn from "/assets/shared/icon-hamburger.svg";
import menuCls from "/assets/shared/icon-close.svg";
import logo from "/assets/shared/logo.svg";
import { useState, useEffect } from "react";
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function handleMenuBtn() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` text-white flex h-20 lg:h-22 items-center justify-between fixed w-full p-5 md:pr-0 md:mt-10 md:py-0 ${scrolled ? "bg-blue-950 md:bg-blue-950/30" : "bg-transparent"} lg:pl-15`}
    >
      <img className="w-10" src={logo} alt="logo" />
      <section
        className={`${isOpen ? "translate-none opacity-100" : "translate-x-full opacity-10"} md:translate-0 md:opacity-100 bg-blue-950 absolute md:static top-0 right-0 h-screen w-1/2 md:w-fit md:bg-white/10 transition-all duration-500 md:h-full md:px-5 lg:pl-25 lg:pr-40`}
      >
        <nav className="flex flex-col md:flex-row gap-6 lg:gap-12 uppercase font-semibold p-5 pt-20 md:p-0 md:h-full relative">
          <NavLink
            onClick={handleMenuBtn}
            to="/Home"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 w-fit md:h-full pb-2 md:flex md:items-center"
                : "pb-2 md:h-full md:flex md:items-center"
            }
          >
            <div className="h-px bg-white/30 w-150 hidden lg:flex absolute -left-167"></div>
            {" "}
            00 Home
          </NavLink>
          <NavLink
            onClick={handleMenuBtn}
            to="/destination"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 w-fit pb-2 md:h-full md:flex md:items-center"
                : "pb-2 md:h-full md:flex md:items-center"
            }
          >
            01 Destination
          </NavLink>
          <NavLink
            onClick={handleMenuBtn}
            to="/crew"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 w-fit pb-2 md:h-full md:flex md:items-center"
                : "pb-2 md:h-full md:flex md:items-center"
            }
          >
            02 Crew
          </NavLink>
          <NavLink
            onClick={handleMenuBtn}
            to="/technology"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 w-fit pb-2 md:h-full md:flex md:items-center"
                : "pb-2 md:h-full md:flex md:items-center"
            }
          >
            03 Technology
          </NavLink>
        </nav>
      </section>
      <img
        onClick={handleMenuBtn}
        src={isOpen ? menuCls : menuBtn}
        className="cursor-pointer size-7 z-50 md:hidden"
        alt="humburger"
      />
    </header>
  );
}
