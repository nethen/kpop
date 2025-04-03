import Link from "next/link";
import { getStartups } from "@/app/components/Neon/actions";
import {startupLocalData} from "@/app/vote/(b)/[slug]/data"
import Image from "next/image";
import { start } from "repl";
export default async function Page() {
  // const router = useRouter();

  // const startupLocalData = 

  // const startups = await getStartups().then((response) => {
  //   return response?.sort((a, b) => a.id - b.id);
  // });
  // console.log(startups);
  const startups = true

  return (
    <>
      <div className="flex flex-col text-center gap-4 mb-20">
        <h2 className="font-bold text-2xl">Select your favorite startup</h2>
        <section className="flex flex-col gap-4">
          <div>
            {startups && (
              <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl text-white p-4 flex flex-col text-left">
                <div className="rounded-md overflow-hidden w-full aspect-video mb-4" >
                  <Image
                  src={startupLocalData.AiDol.image}
                  alt="AIDOL profil picture"
                  width={500}
                  height={500}
                  className="w-full"
                  />
                  </div>
                <h3 className="font-bold text-2xl">{startupLocalData.AiDol.name}</h3>
                <p>{startupLocalData.AiDol.description}</p>
                <Link
                  className="px-4 py-2 text-lg bg-theme-light text-theme-dark rounded-md font-bold mt-4 cursor-pointer w-full text-center"
                  href={"/vote/" + startupLocalData.AiDol.url}
                >
                  Learn more
                </Link>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="border-transparent border-r-[clamp(3rem,25vw,12rem)] border-y-2 border-r-white h-0 w-0" />
            <span className="font-display">VS</span>
            <div className="border-transparent border-l-[clamp(3rem,25vw,12rem)] border-y-2 border-l-white h-0 w-0" />
          </div>
          <div>
            {startups && (
              <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl text-white p-4 flex flex-col text-left">
                <div className="rounded-md overflow-hidden w-full aspect-video mb-4 " >
                  <Image
                  src={startupLocalData.Uptick.image}
                  alt="UPTICK profil picture"
                  width={500}
                  height={500}
                  className="w-full "
                  />
                  </div>
                <h3 className="font-bold text-2xl">{startupLocalData.Uptick.name}</h3>
                <p>{startupLocalData.Uptick.description}</p>
                <Link
                  className="px-4 py-2 text-lg bg-theme-light text-theme-dark rounded-md font-bold mt-4 cursor-pointer w-full text-center"
                  href={"/vote/" + startupLocalData.Uptick.url}
                >
                  Learn more
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
