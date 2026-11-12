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

const FooterFootprint = () => {
  return (
    <div className="p-4 bg-gray-900 text-white text-center text-sm font-jakarta">
      © 2019 - {getCurrentYear()} Sedia Botolku. All Rights Reserved. Please
      send bug report and feedback to Sedia Botolku
    </div>
  );
};

const Footer = () => {
  const socialmediaIcon = {
    facebook: <RiFacebookLine />,
    twitter: <RiTwitterXLine />,
    instagram: <RiInstagramLine />,
  };
  return (
    <footer>
      <div className="bg-gray-800 grid md:grid-cols-3 xl:grid-cols-4 p-8 gap-8 text-white font-jakarta">
        <div className="xl:col-span-2 space-y-6">
          <div className="invert">
            <AppLogo />
          </div>
          <div className="space-y-2">
            <div>
              <p className="opacity-50 text-sm">Alamat</p>
              <p className="whitespace-pre-line">{FooterData.data.alamat}</p>
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
    </footer>
  );
};

export default Footer;
