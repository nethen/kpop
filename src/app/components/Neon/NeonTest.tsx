"use client";
import { start } from "repl";
import { getStartups, boost, fetchValueFromDatabase } from "./actions";
import { useEffect, useState } from "react";

export const NeonTest = () => {
  const [votes, setVotes] = useState<number>(0);
  //   const startups = getStartups();
  useEffect(() => {
    const fetchValue = async () => {
      // Example: Fetch the initial value for the display
      const initialValue = await fetchValueFromDatabase("0");
      setVotes(initialValue);
    };
    // setVotes(startups && startups[0]);
  }, []);

  const handleClick = async () => {
    try {
      const updatedValue = await boost("0");
      setVotes(updatedValue);
      console.log("Updated value:", updatedValue);
    } catch (error) {
      console.error("Error updating value:", error);
    }
  };
  return (
    <ul className="mt-auto flex flex-row gap-4 justify-center">
      <li>
        <button className="p-4 bg-red-500" onClick={async () => handleClick()}>
          AI Dol boost {votes}
        </button>
      </li>
      <li>
        <button className="p-4 bg-red-500">Jjalang Boost</button>
      </li>
    </ul>
  );
};
