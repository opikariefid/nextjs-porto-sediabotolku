import Image, { ImageProps } from "next/image";
import React from "react";

type BannerImageProps = Omit<ImageProps, "alt"> & {
  title?: string;
  description?: string;
  variant?: "default" | "left" | "right";
  component?: React.ReactNode;
};

const BannerImage = ({
  title,
  description,
  src,
  variant = "default",
  className,
  component,
}: BannerImageProps) => {
  const variants = {
    left: "flex-row lg:flex-col",
    right: "flex-row-reverse md:flex-row lg:flex-col",
    default: "",
  } as const;
  return (
    <div
      className={`flex ${variant === "default" ? "flex-col items-center" : "items-start"} gap-4 lg:gap-8 ${variants[variant]} ${className}`}
    >
      {component ?? (
        <Image
          src={src || ""}
          alt={title || ""}
          width={200}
          height={200}
          className="lg:max-w-none w-full max-w-30"
        />
      )}
      <div className="space-y-2">
        <div className="font-bold lg:text-xl">{title}</div>
        <div className="text-xs md:text-sm lg:text-base">{description}</div>
      </div>
    </div>
  );
};

export default BannerImage;
