import BannerImage from "@/components/banner_image";
import Button from "@/components/button";
import Image from "next/image";
import { FaAward, FaPalette, FaShieldAlt } from "react-icons/fa";
import { LuPencilRuler } from "react-icons/lu";

export default function Home() {
  const bannerData = [
    {
      src: "https://dummyimage.com/500/000/fff.png",
      component: (
        <div className="w-full max-w-25">
          <FaPalette className="w-full h-auto text-[#EC4899] opacity-20" />
          <div className="flex gap-2 -mt-8 pb-3 w-full flex-wrap lg:flex-nowrap">
            <div className="w-6 aspect-square bg-primary rounded-full"></div>
            <div className="w-6 aspect-square bg-red-400 rounded-full"></div>
            <div className="w-6 aspect-square bg-yellow-300 rounded-full"></div>
            <div className="w-6 aspect-square bg-green-400 rounded-full"></div>
          </div>
        </div>
      ),
      title: "Banyak Pilihan Warna",
      description:
        "Tersedia dalam beragam pilihan warna yang menarik, mulai dari warna netral hingga warna cerah. Kamu bebas memilih sesuai selera, gaya, dan kebutuhan, sehingga mudah dipadukan dengan berbagai suasana dan aktivitas.",
    },
    {
      src: "https://dummyimage.com/500/000/fff.png",
      component: (
        <div className="w-full max-w-25">
          <LuPencilRuler className="w-full h-auto text-primary" />
        </div>
      ),
      title: "Berbagai Ukuran",
      description:
        "Hadir dalam beberapa pilihan ukuran agar pas dan nyaman digunakan oleh siapa saja. Tinggal pilih ukuran yang paling sesuai dengan kebutuhanmu, baik untuk pemakaian pribadi maupun untuk hadiah.",
    },
    {
      src: "https://dummyimage.com/500/000/fff.png",
      component: (
        <div className="w-full max-w-25">
          <FaShieldAlt className="w-full h-auto text-[#F97316]" />
        </div>
      ),
      title: "Kuat dan Tahan Lama",
      description:
        "Dibuat dari bahan berkualitas dengan pengerjaan yang rapi, sehingga kokoh dan tidak mudah rusak meski digunakan setiap hari. Investasi yang tepat karena awet dan tetap terlihat bagus dalam jangka waktu lama.",
    },
    {
      src: "https://dummyimage.com/500/000/fff.png",
      component: (
        <div className="w-full max-w-25">
          <FaAward className="w-full h-auto text-[#10B981]" />
        </div>
      ),
      title: "Garansi 1 Tahun",
      description:
        "Setiap pembelian dilindungi garansi selama 1 tahun. Jika terdapat cacat produksi atau kerusakan yang bukan akibat kesalahan pemakaian, kami siap membantu penukaran atau perbaikan, jadi kamu bisa berbelanja dengan tenang.",
    },
  ];
  const awardsData = [
    {
      src: "/media/logo/Top Brand.png",
      title: "Top Brand 2016 - 2020",
    },
    {
      src: "/media/logo/Popular Brand.png",
      title: "Popular Brand Award 2016 - 2020",
    },
    {
      src: "/media/logo/Top Innovation.png",
      title: "Top Innovation 2016 - 2020",
    },
  ];
  const marketplaceData = [
    {
      icon: (
        <Image
          src="/media/socialmedia/tokopedia.svg"
          alt=""
          width={20}
          height={20}
          unoptimized
        />
      ),
      title: "Tokopedia",
      link: "https://tokopedia.com",
    },
    {
      icon: (
        <Image
          src="/media/socialmedia/shopee.svg"
          alt=""
          width={20}
          height={20}
          unoptimized
        />
      ),
      title: "Shopee",
      link: "https://shopee.com",
    },
    {
      icon: (
        <Image
          src="/media/socialmedia/lazada.png"
          alt=""
          width={20}
          height={20}
          unoptimized
        />
      ),
      title: "Lazada",
      link: "https://lazada.com",
    },
    {
      icon: (
        <Image
          src="/media/socialmedia/bukalapak.svg"
          alt=""
          width={20}
          height={20}
          unoptimized
        />
      ),
      title: "Bukalapak",
      link: "https://bukalapak.com",
    },
    {
      icon: (
        <Image
          src="/media/socialmedia/blibli.svg"
          alt=""
          width={20}
          height={20}
          unoptimized
        />
      ),
      title: "Blibli",
      link: "https://blibli.com",
    },
  ];
  return (
    <div className="font-jakarta">
      <main>
        <Image
          className="w-full h-auto object-cover max-h-[80vh]"
          src={"/media/banner/main.jpg"}
          alt=""
          width={1920}
          height={1080}
        />
        <div className="bg-gray-100 px-4 py-15">
          <div className="gap-8 xl:gap-25 lg:gap-15 grid md:grid-cols-2 lg:grid-cols-4 max-w-300 mx-auto">
            {bannerData.map((v, i) => (
              <BannerImage
                key={i}
                src={v.src}
                title={v.title}
                description={v.description}
                component={v.component}
                variant={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
        <div className="bg-gray px-4 py-15 space-y-8">
          <div className="text-4xl font-bold text-center mb-15">
            Penghargaan
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-center justify-center">
            {awardsData.map((v, i) => (
              <BannerImage
                key={i}
                src={v.src}
                title={v.title}
                className="max-w-50 mx-auto text-center"
              />
            ))}
          </div>
        </div>
        <div className="bg-gray-500 text-white px-4 py-15 space-y-8">
          <div className="text-4xl font-bold text-center mb-15">
            Tersedia Di
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4 gap-x-8 max-w-150 md:flex-row flex-wrap xl:max-w-screen mx-auto">
            {marketplaceData.map((v, i) => (
              <Button
                key={i}
                className="w-full px-4 py-2 rounded-lg max-w-40 flex gap-4 items-center justify-center bg-amber-50! hover:bg-amber-100! text-black!"
              >
                {v.icon ?? <></>}
                {v.title}
              </Button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
