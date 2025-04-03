"use client";
import {
  getPrizePool,
  getStartups,
  getTotalVotes,
} from "@/app/components/Neon/actions";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { PromoQR } from "../components/Promo/PromoQR";

export default function Page() {
  // const startups = await getStartups();
  const [startups, setStartups] = useState<Record<string, any>[] | []>([]);
  const [totalVotes, setTotalVotes] = useState<number>(0);
  const [prizePool, setPrizePool] = useState<number>(0);

  const fetchLiveData = async () => {
    try {
      const response = await getStartups();
      setStartups(response ? response : []);
      setTotalVotes(await getTotalVotes());
      setPrizePool(await getPrizePool());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const hues = [
    {
      name: "aidol",
      color: "bg-pink-300",
    },
    {
      name: "uptick",
      color: "bg-green-300",
    },
  ];

  // Polling: fetch data every 5 seconds
  useEffect(() => {
    fetchLiveData(); // Initial fetch

    const intervalId = setInterval(() => {
      fetchLiveData();
    }, 15000); // Refresh every 5000 milliseconds (5 seconds)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="font-sans fixed inset-0 grid grid-cols-[1fr_20rem]">
      <div className="right-[10vw] -z-10 absolute aspect-square h-full flex flex-col justify-end overflow-hidden">
        <video
          width="1920"
          height="1080"
          autoPlay
          playsInline
          loop
          muted
          className="absolute size-full object-cover "
        >
          <source src="./landing.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <header className="col-span-full p-8">
        <h1 className="font-display uppercase text-5xl">Strikeout</h1>
      </header>
      <div className="flex flex-col p-8 gap-4 mt-auto mb-12">
        <h2 className="font-bold text-2xl">Current rankings</h2>
        <section className="mb-8">
          <motion.ul
            className="flex flex-col gap-8"
            initial="hidden"
            animate="show"
          >
            {startups &&
              startups
                .sort((a, b) => b.votes - a.votes)
                .map((e) => (
                  <motion.li
                    key={`startup_item--${e.slug}`}
                    layout
                    // layoutId={`startup_item--${e.slug}`}
                    className="text-left text-zinc-900 flex flex-col gap-2 relative z-10 mix-blend-screen"
                  >
                    <div className="flex gap-2 p-4 items-center">
                      <div className="size-16 rounded-full bg-zinc-900" />
                      <hgroup>
                        <h3 className="font-bold text-3xl">{e.name}</h3>
                        <p className="font-bold">{e.votes} votes</p>
                      </hgroup>
                    </div>
                    <MotionBar
                      votes={e.votes}
                      totalVotes={totalVotes}
                      colorString={
                        hues.find((c) => c.name == e.slug)?.color ||
                        "bg-pink-300"
                      }
                    />
                  </motion.li>
                ))}
          </motion.ul>
        </section>
        <section>
          <h2 className="font-bold text-2xl">Prize pool</h2>
          <span className="font-bold text-5xl">${prizePool}</span>
        </section>
      </div>
      <div className="flex flex-col p-8 mt-auto mb-12 text-center items-center">
        <h2 className="font-bold text-2xl">Invest now</h2>
        <PromoQR />
      </div>
    </div>
  );
}
const MotionBar = ({
  votes,
  totalVotes,
  colorString = "bg-pink-300",
}: {
  votes: number;
  totalVotes: number;
  colorString?: string;
}) => {
  const percentage = (votes / totalVotes) * 100;

  return (
    <motion.div
      className={` h-full rounded-lg absolute -z-10 ${
        colorString ? colorString : "bg-pink-300"
      }`}
      initial={{ width: "0%" }}
      animate={{
        width: totalVotes != 0 ? percentage + "%" : "0%",
      }}
      transition={{
        width: { delay: 1 },
      }}
    />
  );
};
