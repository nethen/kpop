"use client";
import { useState } from "react";
import { InvestModal } from "../components/Invest/Modal/InvestModal";
import { tiers } from "./tiers";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<number>(0);

  const handleSelectTier = (tier: number) => {
    setSelectedTier(tier);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="font-sans">
      <main className="p-6 flex flex-col mb-12">
        <hgroup className="mb-4">
          <h2 className="font-bold text-4xl">Add to the prize pool</h2>
          <p className="text-lg">
            Your funds will be only given to Strikeout&apos;s final winner.
          </p>
          <p className="text-sm">Eliminated startups will become bankrupt.</p>
        </hgroup>
        <InvestModal
          isOpen={isOpen}
          tier={selectedTier}
          handler={() => handleClose()}
        />
        <section>
          <ul>
            {tiers.map((tier, i) => (
              <li key={`tier--${i}`}>
                <article className="bg-zinc-900 border border-zinc-800 text-white rounded-xl p-4 mb-4 flex flex-col gap-4">
                  <div className="size-16 rounded-full bg-pink-500" />
                  <hgroup>
                    <h3 className="font-bold text-2xl">{tier.name}</h3>
                    <p>{tier.description}</p>
                  </hgroup>
                  <hr className="border-zinc-800" />
                  <span className="block text-6xl font-bold">
                    ${tier.price}
                  </span>
                  <button
                    className="px-4 py-2 text-lg bg-theme-light text-theme-dark rounded-md font-bold mt-4 cursor-pointer"
                    onClick={() => handleSelectTier(tier.price)}
                  >
                    Purchase {tier.votes} vote{tier.votes > 1 ? "s" : null} /
                    day
                  </button>
                  <ul>
                    Other perks include:
                    {tier.perks.map((perk, j) => (
                      <li key={`tier-${i}_perk--${j}`}>{perk}</li>
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
