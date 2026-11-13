import AppLogo from "@/components/app_logo";
import { FooterData } from "./static/data";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterXLine,
} from "react-icons/ri";
import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

const FooterFootprint = ({
  variant = "tailwind",
}: {
  variant?: "tailwind" | "bootstrap";
}) => {
  const variantClass = {
    tailwind: "p-4 bg-gray-900 text-white text-center text-sm font-jakarta",
    bootstrap: "section-footprint p-4 text-white text-center font-jakarta",
  };
  return (
    <div className={variantClass[variant]}>
      © 2019 - {getCurrentYear()} Sedia Botolku. All Rights Reserved. Please
      send bug report and feedback to Sedia Botolku
    </div>
  );
};

const Footer = ({
  variant = "tailwind",
}: {
  variant?: "tailwind" | "bootstrap";
}) => {
  const socialmediaIcon = {
    facebook: <RiFacebookLine />,
    twitter: <RiTwitterXLine />,
    instagram: <RiInstagramLine />,
  };
  return (
    <footer>
      <>
        {variant == "tailwind" ? (
          <>
            <div className="bg-gray-800 grid md:grid-cols-3 xl:grid-cols-4 p-8 gap-8 text-white font-jakarta">
              <div className="xl:col-span-2 space-y-6">
                <div className="invert">
                  <AppLogo />
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="opacity-50 text-sm">Alamat</p>
                    <p className="whitespace-pre-line">
                      {FooterData.data.alamat}
                    </p>
                  </div>
                  <div>
                    <p className="opacity-50 text-sm">Kode Pos</p>
                    <p>{FooterData.data.kodepos}</p>
                  </div>
                  <div>
                    <p className="opacity-50 text-sm">WhatsApp</p>
                    <p>{FooterData.data.telp}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  {FooterData.data.socialmedia.map((v, i) => (
                    <a key={i} href={v.link}>
                      <div className="hover:underline cursor-pointer bg-white text-black p-1 rounded-lg">
                        {
                          socialmediaIcon[
                            v.title.toLowerCase() as keyof typeof socialmediaIcon
                          ]
                        }
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-3 opacity-50">Produk</div>
                {FooterData.produk.map((v, i) => (
                  <a key={i} href={v.link}>
                    <div className="hover:underline cursor-pointer my-1">
                      {v.title}
                    </div>
                  </a>
                ))}
              </div>
              <div>
                <div className="mb-3 opacity-50">Perusahaan</div>
                {FooterData.perusahaan.map((v, i) => (
                  <a key={i} href={v.link}>
                    <div className="hover:underline cursor-pointer my-1">
                      {v.title}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <FooterFootprint />
          </>
        ) : (
          <>
            <div className="section-footer d-grid p-8 gap-8 text-white font-jakarta">
              <div className="information vstack gap-4">
                <div className="invert">
                  <AppLogo variant="bootstrap" />
                </div>
                <div className="vstack gap-2">
                  <div>
                    <p className="opacity-50 fs-7">Alamat</p>
                    <p className="whitespace-pre-line">
                      {FooterData.data.alamat}
                    </p>
                  </div>
                  <div>
                    <p className="opacity-50 fs-7">Kode Pos</p>
                    <p>{FooterData.data.kodepos}</p>
                  </div>
                  <div>
                    <p className="opacity-50 fs-7">WhatsApp</p>
                    <p>{FooterData.data.telp}</p>
                  </div>
                </div>
                <div className="d-flex gap-2 mt-2">
                  {FooterData.data.socialmedia.map((v, i) => (
                    <a key={i} href={v.link}>
                      <div className="icon-socialmedia bg-white text-black p-1 rounded-2 d-flex align-items-center justify-content-center">
                        {
                          socialmediaIcon[
                            v.title.toLowerCase() as keyof typeof socialmediaIcon
                          ]
                        }
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="infolist">
                <div className="mb-3 opacity-50">Produk</div>
                {FooterData.produk.map((v, i) => (
                  <a
                    key={i}
                    href={v.link}
                    className="text-white my-2 d-block link-underline link-underline-light fs-6 link-underline-opacity-0 link-underline-opacity-100-hover"
                  >
                    {v.title}
                  </a>
                ))}
              </div>
              <div className="infolist">
                <div className="mb-3 opacity-50">Perusahaan</div>
                {FooterData.perusahaan.map((v, i) => (
                  <a
                    key={i}
                    href={v.link}
                    className="text-white my-2 d-block link-underline link-underline-light fs-6 link-underline-opacity-0 link-underline-opacity-100-hover"
                  >
                    {v.title}
                  </a>
                ))}
              </div>
            </div>
            <FooterFootprint variant="bootstrap" />
          </>
        )}
      </>
    </footer>
  );
};

export default Footer;
