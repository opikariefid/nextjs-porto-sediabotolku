import Image from "next/image";

const AppLogo = () => {
  return (
    <div className="flex items-center gap-4 font-black select-none">
      <Image
        draggable="false"
        alt="logo"
        src="/media/logo/logo.svg"
        width={50}
        height={50}
        className="stroke-black"
      ></Image>
      <div className="uppercase font-black leading-3.75 font-poppins text-black">
        <div>Sedia</div>
        <div>Botolku</div>
      </div>
    </div>
  );
};

export default AppLogo;
