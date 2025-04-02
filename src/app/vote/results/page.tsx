"use client";
import { NeonTest } from "@/app/components/Neon/NeonTest";
import { getStartups } from "@/app/components/Neon/actions";
import { useEffect, useState } from "react";

export default function Page() {
  // const startups = await getStartups();
  const [startups, setStartups] = useState<Record<string, any>[] | []>([]);

  const fetchLiveData = async () => {
    try {
      const response = await getStartups();
      setStartups(response ? response : []);
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
          <ul>
            {startups &&
              startups.map((e, i) => (
                <li key={`startup_item--${i}`}>
                  <h3>{e.name}</h3>
                  <p>Votes: {e.votes}</p>
                </li>
              ))}
          </ul>
          <NeonTest />
        </section>
      </div>
    </>
  );
}
