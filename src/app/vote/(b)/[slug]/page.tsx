"use client";
import { notFound, useParams } from "next/navigation";
import { Feeds } from "@/app/components/IdolPage/Feeds";
import { startupLocalData } from "@/app/vote/(b)/[slug]/data";
import Image from "next/image";
import { VoteModal } from "@/app/components/Invest/Modal/VoteModal";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
// import { useState } from "react";

// type PageProps = {
//   params: {
//     slug: string;
//   };
// };

export default function Page() {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const startup = Object.values(startupLocalData).find(
    (s) => s.url === params.slug
  );
  if (!startup) {
    return notFound();
  }

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <main className="bg-[#100F12] font-sans mx-auto flex flex-col max-w-[500px] px-4 py-12">
        <AnimatePresence>
          {isOpen && (
            <VoteModal
              isOpen={isOpen}
              handler={handleClose}
              company={startup.name}
              slug={startup.url}
            />
          )}
        </AnimatePresence>
        <section className="flex flex-col gap-6">
          <div className="aspect-square w-full overflow-hidden rounded-2xl">
            <Image
              src={startup.image}
              alt="cover photo"
              width={500}
              height={500}
              className=""
            />
          </div>

          {/* startup info */}
          <div className="flex-col flex gap-4">
            <h2 className=" uppercase font-bold text-[40px] text-center leading-[120%]">
              {startup.name}
            </h2>
            <h3 className="text-white/80 text-center text-xl">
              {startup.description}
            </h3>
            <div className="flex gap-4 text-center justify-center text-xl text-white/80">
              <span>Posts:{startup.postCount}</span>
              <span>Investors: {startup.investorCount}</span>
            </div>
          </div>

          {/* vote button */}
          <button
            className="bg-theme-light font-bold text-xl text-theme-dark rounded-md py-3 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Vote for {startup.name}
          </button>
        </section>
        <section className="mt-12 ">
          <Feeds posts={startup.posts} comments={startup.comments} />
        </section>
      </main>
    </>
  );
}
