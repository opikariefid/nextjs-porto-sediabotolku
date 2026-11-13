import AppLogo from "@/components/app_logo";
import { cacheLife } from "next/cache";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

const Home = () => {
  const versionList = [
    {
      title: "/tailwind",
      link: "/tailwind",
    },
    {
      title: "/bootstrap",
      link: "/bootstrap",
    },
  ];
  return (
    <div className="min-h-screen flex items-center justify-center font-jakarta">
      <div className="shadow-sm p-12.5 space-y-4 m-4">
        <AppLogo />
        <div className="max-w-100 italic text-sm opacity-75">
          {`"All code in this project is written and reviewed manually by the
          developer. No vibe coding, and no auto-generated code that isn’t fully
          understood."`}
        </div>
        <div className="my-6">
          {versionList.map((v, i) => (
            <a key={i} href={v.link}>
              <div className="hover:underline cursor-pointer text-lg">
                {v.title}
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="https://github.com/opikariefid/nextjs-porto-sediabotolku"
            target="_blank"
            className="hover:underline cursor-pointer"
          >
            <div className="text-xs font-jetbrain flex gap-2 items-center">
              <FaGithub />
              opikariefid/nextjs-porto-sediabotolku
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/taufikarif/"
            target="_blank"
            className="hover:underline cursor-pointer"
          >
            <div className="text-xs font-jetbrain flex gap-2 items-center">
              <FaLinkedin />
              linkedin.com/in/taufikarif/
            </div>
          </a>
        </div>
        <div className="text-xs">
          © {getCurrentYear()} Taufik Arif. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Home;
