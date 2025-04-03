import { isValidSlug } from "@/app/components/Neon/actions";
import { notFound } from "next/navigation";

import { Post } from "@/app/components/IdolPage/Post";
import { Feeds } from "@/app/components/IdolPage/Feeds";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // const slug = (await params).slug;
  // const validSlug = await isValidSlug(slug);

  // if (validSlug) {
  // } else {
  //   notFound();
  // }





  return (
    <>
      <main className="bg-[#100F12] font-sans mx-auto flex flex-col   max-w-[500px] px-4 py-12">
        <section className="flex flex-col gap-6">
          <div className="aspect-square w-full bg-pink-400 rounded-2xl"></div>

          {/* startup info */}
          <div className="flex-col flex gap-4">
            <h2 className=" uppercase font-bold text-[40px] text-center leading-[120%]">
              AI DOL
            </h2>
            <h3 className="text-white/80 text-center text-xl">
              Philosophical AI Systems
            </h3>
            <div className="flex gap-4 text-center justify-center text-xl text-white/80">
              <span>Posts: 12</span>
              <span>Investors: 25,854</span>
            </div>
          </div>

          {/* vote button */}
          <button className="bg-theme-light font-bold text-xl text-theme-dark rounded-md py-3 cursor-pointer">
            Vote for AIDOL
          </button>
        </section>
        <section className="mt-12 ">
          <Feeds/>

        </section>

      </main>
    </>
  );
}
