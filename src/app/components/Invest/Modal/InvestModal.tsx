"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { updatePool } from "../../Neon/actions";
export const InvestModal = ({
  isOpen,
  tier,
  tierName,
  votes,
  handler,
}: {
  isOpen: boolean;
  tier: number;
  tierName: string;
  votes: number;
  handler: () => void;
}) => {
  const router = useRouter();

  const [confirmation, setConfirmation] = useState(false);

  const confirmPurchase = async () => {
    localStorage.setItem(
      "userData",
      JSON.stringify({ votes: votes, tier: tier })
    );
    updatePool(tierName, tier);
    setConfirmation(true);
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
        {confirmation ? (
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
            Votes purchased
          </span>
        ) : (
          <span className="text-xs font-medium uppercase px-4 py-0.5 bg-theme-light text-theme-dark rounded-full">
            Alert
          </span>
        )}
        {confirmation ? (
          <h3 className="text-2xl font-bold leading-none">
            Put your idols in the lead!
          </h3>
        ) : (
          <h3 className="text-2xl font-bold leading-none">
            Confirm your investment tier
          </h3>
        )}
        {confirmation ? (
          <p>
            You&apos;ve just received {votes} vote{votes > 1 ? "s" : null} for
            the finale! Make them count.
          </p>
        ) : (
          <p>
            You&apos;re about to add ${tier.toLocaleString()} to the prize pool,
            which will give you {votes} vote{votes > 1 ? "s" : null} for the
            finale.
          </p>
        )}

        {confirmation ? (
          <div className="flex gap-2 flex-col w-full">
            <button
              className="px-4 py-2 text-lg bg-theme-light text-theme-dark rounded-md font-bold cursor-pointer pointer-events-auto"
              onClick={() => router.push("/vote")}
            >
              Vote now
            </button>
          </div>
        ) : (
          <div className="flex gap-2 flex-col w-full">
            <button
              className="px-4 py-2 text-lg bg-theme-light text-theme-dark rounded-md font-bold cursor-pointer pointer-events-auto"
              onClick={() => confirmPurchase()}
            >
              Purchase {votes} vote{votes > 1 ? "s" : null}
            </button>
            <button
              className="px-4 py-2 text-lg bg-zinc-600 text-white rounded-md font-bold cursor-pointer pointer-events-auto"
              onClick={() => handler()}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};
