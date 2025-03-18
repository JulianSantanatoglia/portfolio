"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "../data";
import MotionTransition from "./transition-component";

const Navbar = () => {
  const router = usePathname();

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full bottom-0 md:bottom-10"
    >
      <nav className="w-full md:w-auto">
        <div className="flex items-center justify-center gap-2 md:gap-4 px-4 md:px-6 py-2 md:rounded-full bg-blue-950/80 backdrop-blur-md overflow-x-auto">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 md:px-4 py-2 md:py-3 transition duration-150 rounded-full cursor-pointer hover:bg-sky-600 flex-shrink-0 ${
                router === item.link && "bg-black"
              }`}
              data-tooltip-target="tooltip-default"
            >
              <Link href={item.link}>{item.icon} </Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;