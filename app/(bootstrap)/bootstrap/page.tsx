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
        <div className="w-100 icon-fitur">
          <FaPalette
            className="w-100 h-auto text-[#EC4899] opacity-25"
            style={{
              color: "#EC4899",
            }}
          />
          <div className="d-flex gap-2 icon-colorpallete w-100 flex-wrap flex-lg-nowrap">
            <div className="pallete bg-primary rounded-circle"></div>
            <div className="pallete bg-danger rounded-circle"></div>
            <div className="pallete bg-warning rounded-circle"></div>
            <div className="pallete bg-success rounded-circle"></div>
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
        <div className="w-100 icon-fitur">
          <LuPencilRuler className="w-100 h-auto text-primary" />
        </div>
      ),
      title: "Berbagai Ukuran",
      description:
        "Hadir dalam beberapa pilihan ukuran agar pas dan nyaman digunakan oleh siapa saja. Tinggal pilih ukuran yang paling sesuai dengan kebutuhanmu, baik untuk pemakaian pribadi maupun untuk hadiah.",
    },
    {
      src: "https://dummyimage.com/500/000/fff.png",
      component: (
        <div className="w-100 icon-fitur">
          <FaShieldAlt className="w-100 h-auto text-warning" />
        </div>
      ),
      title: "Kuat dan Tahan Lama",
      description:
        "Dibuat dari bahan berkualitas dengan pengerjaan yang rapi, sehingga kokoh dan tidak mudah rusak meski digunakan setiap hari. Investasi yang tepat karena awet dan tetap terlihat bagus dalam jangka waktu lama.",
    },
    {
      src: "https://dummyimage.com/500/000/fff.png",
      component: (
        <div className="w-100 icon-fitur">
          <FaAward className="w-100 h-auto text-success" />
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
          className="banner-home w-100 h-auto object-fit-cover"
          src={"/media/banner/main.jpg"}
          alt=""
          width={1920}
          height={1080}
        />
        <div className="bg-section-1 section-card">
          <div className="d-grid mx-auto grid-cards">
            {bannerData.map((v, i) => (
              <BannerImage
                type="bootstrap"
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
        <div className="section-card">
          <div className="fs-2 fw-bold text-center section-title">
            Penghargaan
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 align-items-center justify-content-center">
            {awardsData.map((v, i) => (
              <BannerImage
                type="bootstrap"
                key={i}
                src={v.src}
                title={v.title}
                className="max-w-50 mx-auto text-center col"
              />
            ))}
          </div>
        </div>
        <div className="bg-section-2 text-white section-card">
          <div className="fs-2 fw-bold text-center section-title">
            Tersedia Di
          </div>
          <div className="section-marketplace d-flex flex-column justify-content-center align-items-center max-w-150 flex-md-row flex-wrap mx-auto">
            {marketplaceData.map((v, i) => (
              <Button
                variant="bootstrap"
                key={i}
                className="w-100 btn-light px-4 py-2 rounded-2 d-flex gap-4 align-items-center justify-content-center"
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
