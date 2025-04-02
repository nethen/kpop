import Link from "next/link";
import { getStartups } from "@/app/components/Neon/actions";
export default async function Page() {
  // const router = useRouter();

  const startups = await getStartups().then((response) => {
    return response?.sort((a, b) => a.id - b.id);
  });
  console.log(startups);

  return (
    <>
      <div className="flex flex-col text-center gap-4 mb-20">
        <h2 className="font-bold text-2xl">Select your favorite startup</h2>
        <section className="flex flex-col gap-4">
          <div>
            {startups && (
              <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl text-white p-4 flex flex-col text-left">
                <div className="rounded-md bg-pink-300 w-full aspect-video mb-4" />
                <h3 className="font-bold text-2xl">{startups[0].name}</h3>
                <p>{startups[0].descriptor}</p>
                <Link
                  className="px-4 py-2 text-lg bg-theme-light text-theme-dark rounded-md font-bold mt-4 cursor-pointer w-fit"
                  href={"/vote/" + startups[0].slug}
                >
                  Learn more
                </Link>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="border-transparent border-r-[25vw] border-y-2 border-r-white h-0 w-0" />
            <span className="font-display">VS</span>
            <div className="border-transparent border-l-[25vw] border-y-2 border-l-white h-0 w-0" />
          </div>
          <div>
            {startups && (
              <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl text-white p-4 flex flex-col text-left">
                <div className="rounded-md bg-pink-300 w-full aspect-video mb-4" />
                <h3 className="font-bold text-2xl">{startups[1].name}</h3>
                <p>{startups[1].descriptor}</p>
                <Link
                  className="px-4 py-2 text-lg bg-theme-light text-theme-dark rounded-md font-bold mt-4 cursor-pointer w-fit"
                  href={"/vote/" + startups[1].slug}
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
