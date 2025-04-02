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
        <h2>Current rankings</h2>
        <section>
          <ul>
            {startups &&
              startups
                .sort((a, b) => b.votes - a.votes)
                .map((e, i) => (
                  <li key={`startup_item--${i}`}>
                    <h3 className="font-bold text-3xl">{e.name}</h3>
                    <p>Votes: {e.votes}</p>
                  </li>
                ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
