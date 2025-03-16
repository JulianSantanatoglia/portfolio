import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "../data";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute w-full top-5 md:top-10"
    >
      <header>
        <div className="container px-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <Link href="/home">
            <h1 className="my-3 text-2xl font-bold text-center md:text-left md:text-4xl">
              Julián
              <span className="text-sky-600"> Santanatoglia</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-6 md:gap-7 mt-3 md:mt-0">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-blue-500 z-41"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;