import { RiLoginBoxLine, RiMenuLine } from "react-icons/ri";
import AppLogo from "@/components/app_logo";
import { NavbarData } from "./static/data";
import Button from "./button";

const Navbar = ({ type = "tailwind" }: { type?: "tailwind" | "bootstrap" }) => {
  return (
    <>
      {type === "tailwind" ? (
        <nav className="p-4 items-center justify-between flex sticky top-0 bg-white/50 backdrop-blur-xl font-jakarta z-10">
          <AppLogo />
          <div className="aspect-square w-10 text-2xl flex items-center justify-center md:hidden">
            <RiMenuLine />
          </div>
          <div className="hidden md:flex gap-4 gap-x-8 items-center">
            {NavbarData.menu.map((v, i) => (
              <a key={i} href={v.link}>
                <button className="hover:underline cursor-pointer text-lg">
                  {v.title}
                </button>
              </a>
            ))}
            <Button className="flex items-center gap-x-2">
              Masuk <RiLoginBoxLine className="text-xl" />
            </Button>
          </div>
        </nav>
      ) : (
        <nav className="navbar p-3 d-flex align-items-center justify-content-between sticky-top font-jakarta">
          <AppLogo variant="bootstrap" />
          <div className="ratio-1x1 w-10 fs-2xl d-flex align-items-center justify-content-center d-md-none">
            <RiMenuLine />
          </div>
          <div className="d-none d-md-flex gap-4 column-gap-5 align-items-center">
            {NavbarData.menu.map((v, i) => (
              <a
                key={i}
                href={v.link}
                className="text-black link-underline fs-6 link-underline-opacity-0 link-underline-opacity-100-hover"
              >
                {v.title}
              </a>
            ))}
            <Button
              variant="bootstrap"
              className="d-flex align-items-center column-gap-2"
            >
              Masuk <RiLoginBoxLine className="text-xl" />
            </Button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
