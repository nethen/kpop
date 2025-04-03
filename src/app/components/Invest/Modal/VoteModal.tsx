"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { boost } from "../../Neon/actions";
export const VoteModal = ({
  isOpen,
  handler,
  company,
  slug,
}: {
  isOpen: boolean;
  handler: () => void;
  company: string;
  slug: string;
}) => {
  const router = useRouter();

  const [confirmation, setConfirmation] = useState(false);
  const [votes, setVotes] = useState(0);
  const [hasVotes, setHasVotes] = useState(true);
  // const [votes, setVotes] = useState(() => {
  //   if (window !== undefined) {
  //     const userData = localStorage ? localStorage.getItem("userData") : 0;
  //     return userData;
  //   }
  //   // const initalValue = JSON.parse(userData);
  // });

  useEffect(() => {
    if (window !== undefined) {
      const userData = localStorage.getItem("userData");
      if (userData) {
        const parsedData = JSON.parse(userData);
        setVotes(parsedData?.votes ?? 0);
        console.log("parsedData", parsedData.votes);
        setHasVotes(parsedData?.votes > 0);
      }
    }
  }, []);

  const confirmPurchase = async () => {
    // localStorage.setItem(
    //   "userData",
    //   JSON.stringify({ votes: votes, tier: tier })
    // );
    boost(slug, votes);
    setConfirmation(true);
    localStorage.setItem("userData", JSON.stringify({ votes: 0 }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-1000 bg-zinc-950/80 p-8 flex-col justify-center ${
        isOpen ? "pointer-events-auto flex" : "pointer-events-none hidden"
      }`}
      // onClick={() => handler()}
    >
      <div
        className="bg-zinc-800 border border-zinc-700 p-4 rounded-xl flex flex-col gap-4 items-center text-center"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {hasVotes ? (
          confirmation ? (
            <span className="text-sm font-medium uppercase text-white flex gap-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Votes submitted
            </span>
          ) : (
            <span className="text-xs font-medium uppercase px-4 py-0.5 bg-theme-light text-theme-dark rounded-full">
              Alert
            </span>
          )
        ) : null}
        {hasVotes ? (
          confirmation ? (
            <h3 className="text-2xl font-bold leading-none">
              Keep an eye on the results!
            </h3>
          ) : (
            <h3 className="text-2xl font-bold leading-none">
              Confirm your vote for {company}
            </h3>
          )
        ) : (
          <h3 className="text-2xl font-bold leading-none">
            You&apos;re out of votes!
          </h3>
        )}
        {hasVotes ? (
          confirmation ? (
            <p>
              Your {votes} vote{votes != 1 ? "s" : null} for {company}{" "}
              {votes != 1 ? "are" : "is"} for {company} in! Want to see if your
              pick is pulling ahead or falling behind? Check the live results
              and track the race to victory.
            </p>
          ) : (
            <p>
              You’re about to cast {votes} vote{votes != 1 ? "s" : null} for{" "}
              {company}. Votes are final. Once cast, they cannot be changed or
              refunded.
            </p>
          )
        ) : (
          <p>
            You’ve used up all your votes—no more grinding for you. Check back
            later to see how {company} is doing and watch the competition
            unfold.
          </p>
        )}

        {hasVotes ? (
          confirmation ? (
            <div className="flex gap-2 flex-col w-full">
              <button
                className="px-4 py-2 text-lg bg-theme-light text-theme-dark rounded-md font-bold cursor-pointer pointer-events-auto"
                onClick={() => {
                  router.push("/vote/results");
                  setHasVotes(false);
                }}
              >
                View poll results
              </button>
              <button
                className="px-4 py-2 text-lg bg-zinc-600 text-white rounded-md font-bold cursor-pointer pointer-events-auto"
                onClick={() => {
                  handler();
                  setTimeout(() => {
                    setHasVotes(false);
                  }, 500);
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex gap-2 flex-col w-full">
              <button
                className="px-4 py-2 text-lg bg-theme-light text-theme-dark rounded-md font-bold cursor-pointer pointer-events-auto"
                onClick={() => confirmPurchase()}
              >
                Confirm {votes} vote{votes != 1 ? "s" : null}
              </button>
              <button
                className="px-4 py-2 text-lg bg-zinc-600 text-white rounded-md font-bold cursor-pointer pointer-events-auto"
                onClick={() => handler()}
              >
                Cancel
              </button>
            </div>
          )
        ) : (
          <div className="flex gap-2 flex-col w-full">
            <button
              className="px-4 py-2 text-lg bg-theme-light text-theme-dark rounded-md font-bold cursor-pointer pointer-events-auto"
              onClick={() => {
                router.push("/vote/results");
              }}
            >
              View poll results
            </button>
            <button
              className="px-4 py-2 text-lg bg-zinc-600 text-white rounded-md font-bold cursor-pointer pointer-events-auto"
              onClick={() => handler()}
            >
              Dismiss
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};
