"use client";
import {
  getPrizePool,
  getStartups,
  getTotalVotes,
} from "@/app/components/Neon/actions";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

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
    <div className="font-sans fixed inset-0">
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
      <header className="p-8">
        <h1 className="font-display uppercase text-5xl">Strikeout</h1>
      </header>
      <div className="flex flex-col p-8 gap-4 mb-12">
        <h2>Prize pool</h2>
        <span>{prizePool}</span>
        <h2>Current rankings</h2>
        <section>
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
                    className="text-left flex flex-col gap-2"
                  >
                    <div className="flex gap-2">
                      <div className="size-16 rounded-full bg-pink-500" />
                      <hgroup>
                        <h3 className="font-bold text-3xl">{e.name}</h3>
                        <p>Votes: {e.votes}</p>
                      </hgroup>
                    </div>
                    <MotionBar votes={e.votes} totalVotes={totalVotes} />
                  </motion.li>
                ))}
          </motion.ul>
        </section>
      </div>
    </div>
  );
}
const MotionBar = ({
  votes,
  totalVotes,
}: {
  votes: number;
  totalVotes: number;
}) => {
  const percentage = (votes / totalVotes) * 100;

  const [positions, setPositions] = useState(["0%", "50%", "100%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPositions = Array.from(
        new Set([
          Math.floor(Math.random() * 5) * 25,
          Math.floor(Math.random() * 5) * 25,
          Math.floor(Math.random() * 5) * 25,
        ])
      );
      newPositions.sort((a, b) => a - b);
      setPositions(newPositions.map((pos) => `${pos}%`));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="bg-pink-300 h-16 rounded-lg mix-blend-exclusion"
      initial={{ width: "0%" }}
      animate={{
        width: totalVotes != 0 ? percentage + "%" : "0%",
        background: `radial-gradient(var(--theme-light) ${positions[0]}, var(--theme-dark) ${positions[1]}, var(--theme-light) ${positions[2]})`,
      }}
      transition={{ width: { delay: 1 } }}
    />
  );
};
