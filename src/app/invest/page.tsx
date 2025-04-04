"use client";
import { useState } from "react";
import { InvestModal } from "../components/Invest/Modal/InvestModal";
import { tiers } from "./tiers";
import { AnimatePresence } from "motion/react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<number>(0);
  const [selectedTierName, setSelectedTierName] = useState<string>("");
  const [voteAmount, setVoteAmount] = useState<number>(0);

  const handleSelectTier = (tier: number) => {
    setIsOpen(true);
    try {
      setSelectedTier(tier);
      setSelectedTierName(
        tiers.find((t) => t.price === tier)?.name || "Unknown Tier"
      );
      setVoteAmount(tiers.find((t) => t.price === tier)?.votes || 0);
    } catch (error) {
      console.error("Error selecting tier:", error);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="font-sans">
      <main className="p-6 flex flex-col mb-12">
        <hgroup className="mb-8">
          <h2 className="font-bold text-4xl mb-2">Add to the prize pool</h2>
          <p className="text-lg leading-tight mb-2">
            Your funds will be only given to Strikeout&apos;s final winner.
          </p>
          <p className="text-sm font-medium tracking-wider">
            Eliminated startups will become bankrupt.
          </p>
        </hgroup>
        <AnimatePresence>
          {isOpen && (
            <InvestModal
              isOpen={isOpen}
              tierName={selectedTierName}
              tier={selectedTier}
              votes={voteAmount}
              handler={() => handleClose()}
            />
          )}
        </AnimatePresence>
        <section>
          <ul>
            {tiers.map((tier, i) => (
              <li key={`tier--${i}`}>
                <article className="bg-zinc-900 border border-zinc-800 text-white rounded-xl p-4 mb-4 flex flex-col gap-4">
                  <div className="size-16 rounded-full">
                    <img
                      src={tier.svg}
                      alt={`${tier.name} icon`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <hgroup>
                    <h3 className="font-bold text-2xl">{tier.name}</h3>
                    <p>{tier.description}</p>
                  </hgroup>
                  <hr className="border-zinc-800" />
                  <span className="block text-6xl font-bold">
                    ${tier.price.toLocaleString()}
                  </span>
                  <button
                    className="px-4 py-2 text-lg bg-theme-light text-theme-dark rounded-md font-bold mt-4 cursor-pointer"
                    onClick={() => handleSelectTier(tier.price)}
                  >
                    Purchase {tier.votes} vote{tier.votes != 1 ? "s" : null} /
                    day
                  </button>
                  <ul className="flex flex-col gap-2">
                    Other perks include:
                    {tier.perks.map((perk, j) => (
                      <li
                        key={`tier-${i}_perk--${j}`}
                        className="flex items-start gap-1"
                      >
                        <div className="my-0.5">
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
                        </div>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
