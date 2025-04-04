"use client";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export const ResultsNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const pathname_truncate = pathname.replace("/vote", "");
  const [page, setPage] = useState(pathname_truncate);

  const handlePageChange = (newPage: string) => {
    router.push(`/vote${newPage}`);
  };

  useEffect(() => {
    setPage(pathname_truncate);
  }, [pathname]);

  return (
    <nav className="fixed mx-auto bottom-8 inset-x-4 bg-zinc-800 border border-zinc-700 rounded-full p-1.5 z-10 font-bold text-lg max-w-[36.5rem]">
      <ul className="flex flex-row justify-between items-center gap-2">
        <li className="w-full relative">
          <motion.button
            className="w-full p-2 cursor-pointer"
            onClick={() => handlePageChange("")}
            initial={false}
            animate={{
              color: page == "" ? "var(--theme-dark)" : "#fff",
            }}
          >
            Vote
          </motion.button>
          {page == "" ? <Background /> : null}
        </li>
        <li className="w-full relative">
          <motion.button
            className="w-full p-2 cursor-pointer"
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
