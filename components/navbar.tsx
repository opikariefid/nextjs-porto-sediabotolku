import { RiLoginBoxLine, RiMenuLine } from "react-icons/ri";
import AppLogo from "@/components/app_logo";
import { NavbarData } from "./static/data";
import Button from "./button";

const Navbar = () => {
  return (
    <nav className="w-max-w-5xl p-4 items-center justify-between flex sticky top-0 bg-white/50 backdrop-blur-xl font-jakarta z-10">
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
  );
};

export default Navbar;
