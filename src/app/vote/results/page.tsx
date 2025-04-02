"use client";
import { NeonTest } from "@/app/components/Neon/NeonTest";
import { getStartups, getTotalVotes } from "@/app/components/Neon/actions";
import { useEffect, useState } from "react";

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
          <ul className="flex flex-col gap-4">
            {startups &&
              startups
                .sort((a, b) => b.votes - a.votes)
                .map((e, i) => (
                  <li key={`startup_item--${i}`} className="text-left">
                    <h3 className="font-bold text-3xl">{e.name}</h3>
                    <p>Votes: {e.votes}</p>
                    <div
                      className="bg-pink-300 h-4 rounded-full"
                      style={{ width: (e.votes / totalVotes) * 100 + "%" }}
                    />
                  </li>
                ))}
          </ul>
          {/* <NeonTest /> */}
        </section>
      </div>
    </>
  );
}
