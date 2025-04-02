"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
export const InvestModal = ({
  isOpen,
  tier,
  handler,
}: {
  isOpen: boolean;
  tier: number;
  handler: () => void;
}) => {
  const router = useRouter();

  // const tiers = [
  //   {
  //     id: 1,
  //     name: "Bandwagoner",
  //     description:
  //       "Wow. You really couldn't spare a few dollars? Guess you're not a true fan.",
  //     price: 100,
  //     votes: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "Bandwagoner",
  //     description:
  //       "Wow. You really couldn't spare a few dollars? Guess you're not a true fan.",
  //     price: 100,
  //     votes: 1,
  //   },
  //   {
  //     id: 3,
  //     name: "Bandwagoner",
  //     description:
  //       "Wow. You really couldn't spare a few dollars? Guess you're not a true fan.",
  //     price: 100,
  //     votes: 1,
  //   },
  // ];

  const handleNavigate = () => {
    localStorage.setItem("userData", JSON.stringify({ votes: tier / 10 }));
    router.push("/vote");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 bg-zinc-950/80 p-8 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      onClick={() => handler()}
    >
      <div
        className="bg-zinc-800 border border-zinc-700 p-8 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold mb-2">Invest</h3>
        <p>You are adding ${tier.toLocaleString()} to the prize pool</p>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 text-lg bg-zinc-600 text-white rounded-md font-bold mt-4 cursor-pointer pointer-events-auto"
            onClick={() => handler()}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-lg bg-theme-light text-theme-dark rounded-md font-bold mt-4 cursor-pointer pointer-events-auto"
            onClick={() => handleNavigate()}
          >
            Confirm
          </button>
        </div>
      </div>
    </motion.div>
  );
};
