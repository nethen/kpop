"use client";
import {
  getStartups,
  getTotalVotes,
  getPrizePool,
} from "@/app/components/Neon/actions";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import NumberFlow from "@number-flow/react";

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: prizePool > 0 ? 1 : 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const container_items = {
    hidden: { opacity: 0 },
    show: {
      opacity: prizePool > 0 ? 1 : 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
        delay: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: prizePool > 0 ? 1 : 0 },
  };

  return (
    <>
      <div className="flex flex-col text-center gap-4 mb-20">
        <motion.hgroup
          className="mb-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h2
            className="text-xs tracking-wider uppercase font-bold mb-1"
            variants={item}
          >
            Current prize pool
          </motion.h2>

          <motion.h3 className="text-5xl font-bold" variants={item}>
            <NumberFlow
              value={prizePool}
              format={{
                style: "currency",
                currency: "USD",
                trailingZeroDisplay: "stripIfInteger",
              }}
            />
          </motion.h3>
        </motion.hgroup>
        <hr className="border-zinc-700 mb-4" />
        <section>
          <motion.ul
            className="flex flex-col gap-8"
            variants={container_items}
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
                    variants={item}
                    className="text-left flex flex-col gap-2"
                  >
                    <div className="flex gap-2">
                      <Image
                        src={`/thumbnail_${e.slug}.jpg`}
                        alt="Logo"
                        width={64}
                        height={64}
                        className="size-16 rounded-full"
                      />
                      <hgroup>
                        <h3 className="font-bold text-3xl">{e.name}</h3>
                        <p>
                          Votes: <NumberFlow value={e.votes} />
                        </p>
                      </hgroup>
                    </div>
                    <MotionBar votes={e.votes} totalVotes={totalVotes} />
                  </motion.li>
                ))}
          </motion.ul>
          {/* <NeonTest /> */}
        </section>
      </div>
    </>
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
  return (
    <motion.div
      className="bg-pink-300 h-2 rounded-full"
      initial={{ width: "0%" }}
      animate={{ width: totalVotes != 0 ? percentage + "%" : "0%" }}
      transition={{ delay: 1 }}
    />
  );
};
