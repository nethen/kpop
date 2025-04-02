"use client";
import { getStartups, getTotalVotes } from "@/app/components/Neon/actions";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Page() {
  // const startups = await getStartups();
  const [startups, setStartups] = useState<Record<string, any>[] | []>([]);
  const [totalVotes, setTotalVotes] = useState<number>(0);

  const fetchLiveData = async () => {
    try {
      const response = await getStartups();
      setStartups(response ? response : []);
      setTotalVotes(await getTotalVotes());
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
    <>
      <div className="flex flex-col text-center gap-4 mb-12">
        <h2>Results</h2>
        <section>
          <ul className="flex flex-col gap-8">
            {startups &&
              startups
                .sort((a, b) => b.votes - a.votes)
                .map((e, i) => (
                  <li
                    key={`startup_item--${i}`}
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
                  </li>
                ))}
          </ul>
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
    />
  );
};
