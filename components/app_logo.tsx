import Image from "next/image";

const AppLogo = ({
  variant = "tailwind",
}: {
  variant?: "tailwind" | "bootstrap";
}) => {
  const variantClass = {
    tailwind: {
      body: "flex items-center gap-4 font-black select-none",
      logo: "uppercase font-black leading-3.75 font-poppins text-black",
    },
    bootstrap: {
      body: "d-flex align-items-center gap-4 fw-bolder user-select-none",
      logo: "text-uppercase fw-bolder lh-1 font-poppins text-black",
    },
  };
  return (
    <div className={`${variantClass[variant].body}`}>
      <Image
        draggable="false"
        alt="logo"
        src="/media/logo/logo.svg"
        width={50}
        height={50}
      ></Image>
      <div className={`${variantClass[variant].logo}`}>
        <div>Sedia</div>
        <div>Botolku</div>
      </div>
    </div>
  );
};

export default AppLogo;
