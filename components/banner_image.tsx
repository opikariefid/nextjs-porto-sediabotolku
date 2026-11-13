import Image, { ImageProps } from "next/image";
import React from "react";

type BannerImageProps = Omit<ImageProps, "alt"> & {
  title?: string;
  description?: string;
  variant?: "default" | "left" | "right";
  type?: "tailwind" | "bootstrap";
  component?: React.ReactNode;
};

const BannerImage = ({
  title,
  description,
  src,
  variant = "default",
  className,
  type = "tailwind",
  component,
}: BannerImageProps) => {
  const variantsTailwind = {
    left: "flex-row lg:flex-col",
    right: "flex-row-reverse md:flex-row lg:flex-col",
    default: "",
  } as const;
  const variantsBootstrap = {
    left: "flex-row flex-lg-column",
    right: "flex-row-reverse flex-md-row flex-lg-column",
    default: "",
  } as const;
  const variantClass = {
    tailwind: variantsTailwind,
    bootstrap: variantsBootstrap,
  };
  const variants = variantClass[type];
  const bodyClass = {
    tailwind: {
      body: `flex ${variant === "default" ? "flex-col items-center" : "items-start"} gap-4 lg:gap-8 ${variants[variant]} ${className}`,
      image: "lg:max-w-none w-full max-w-30",
      flex: "space-y-2",
      title: "font-bold lg:text-xl",
      description: "text-sm lg:text-base",
    },
    bootstrap: {
      body: `card-product d-flex ${variant === "default" ? "flex-column align-items-center" : "align-items-start"} gap-4 gap-lg-4 ${variants[variant]} ${className}`,
      image: "w-100 h-auto",
      flex: "vstack gap-2",
      title: "fw-bold title",
      description: "",
    },
  };
  return (
    <div className={`${bodyClass[type].body}`}>
      {component ?? (
        <Image
          src={src || ""}
          alt={title || ""}
          width={200}
          height={200}
          className={`${bodyClass[type].image}`}
        />
      )}
      <div className={`${bodyClass[type].flex}`}>
        <div className={`${bodyClass[type].title}`}>{title}</div>
        <div className={`${bodyClass[type].description}`}>{description}</div>
      </div>
    </div>
  );
};

export default BannerImage;
