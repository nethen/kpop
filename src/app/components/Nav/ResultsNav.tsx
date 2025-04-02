"use client";
import { motion } from "motion/react";
import { useState } from "react";
export const ResultsNav = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="fixed bottom-8 inset-x-8 bg-zinc-900 border border-zinc-800 rounded-full p-1 z-10 font-bold text-lg">
      <ul className="flex flex-row justify-between items-center gap-2">
        <li className="w-full relative">
          <motion.button
            className="w-full p-2"
            onClick={() => setActive(false)}
            animate={{ color: active ? "#fff" : "var(--theme-dark)" }}
          >
            Vote
          </motion.button>
          {!active ? <Background /> : null}
        </li>
        <li className="w-full relative">
          <motion.button
            className="w-full p-2"
            onClick={() => setActive(true)}
            animate={{ color: !active ? "#fff" : "var(--theme-dark)" }}
          >
            Results
          </motion.button>
          {active ? <Background /> : null}
        </li>
      </ul>
    </nav>
  );
};

const Background = () => {
  return (
    <motion.div
      layoutId="tester"
      className="bg-theme-light size-full absolute inset-0 -z-10 rounded-full"
    />
  );
};
