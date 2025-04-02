"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export const ResultsNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const pathname_truncate = pathname.replace("/vote", "");
  console.log("pathname_truncate", pathname_truncate);
  const [page, setPage] = useState(pathname_truncate);

  const handlePageChange = (newPage: string) => {
    setPage(newPage);
    router.push(`/vote${newPage}`);
  };

  return (
    <nav className="fixed bottom-8 inset-x-8 bg-zinc-900 border border-zinc-800 rounded-full p-1 z-10 font-bold text-lg">
      <ul className="flex flex-row justify-between items-center gap-2">
        <li className="w-full relative">
          <motion.button
            className="w-full p-2"
            onClick={() => handlePageChange("")}
            initial={false}
            animate={{ color: page == "" ? "var(--theme-dark)" : "#fff" }}
          >
            Vote
          </motion.button>
          {page == "" ? <Background /> : null}
        </li>
        <li className="w-full relative">
          <motion.button
            className="w-full p-2"
            onClick={() => handlePageChange("/results")}
            initial={false}
            animate={{
              color: page == "/results" ? "var(--theme-dark)" : "#fff",
            }}
          >
            Results
          </motion.button>
          {page == "/results" ? <Background /> : null}
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
