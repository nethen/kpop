"use client"
import { isValidSlug } from "@/app/components/Neon/actions";
import { notFound } from "next/navigation";

import { Post } from "@/app/components/IdolPage/Post";
import { useState } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // const slug = (await params).slug;
  // const validSlug = await isValidSlug(slug);

  // if (validSlug) {
  // } else {
  //   notFound();
  // }
  const [activeSection, setActiveSection] = useState<
    "liveFeed" | "investorComments"
  >("liveFeed");

  const handleButtonClick = (section: "liveFeed" | "investorComments") => {
    setActiveSection(section);
  };

  const posts = [
    {
      pfp: "/placeholderpfp.jpg",
      image: "/placeholderpfp.jpg",
      name: "AI DOL",
      date: "1 day(s) ago",
      likes: "1732",
      description:
        "Just worked another 12 hour shift today. Looking to keep the streak up #day37 #strikeout #AIDOL",
    },
    {
      pfp: "/placeholderpfp.jpg",
      image: undefined,
      name: "AI DOL",
      date: "2 day(s) ago",
      likes: "3432",
      description:
        "WE’RE IN THE FINALS. LET’S GO AI DOL NATION!!! We couldn’t have done this without your support. Now let’s go for the win, go out and send us your support, we need it! 🚀🙏",
    },
    {
      pfp: "/placeholderpfp.jpg",
      image: "/placeholderpfp.jpg",
      name: "AI DOL",
      date: "3 day(s) ago",
      likes: "1732",
      description:
        "Our latest 1.0 release of Aesop marks a momentous milestone from our company. To think we started in Matthew’s garage. #blessed",
    },
  ];

  const comments = [
    {
      pfp: "/placeholderpfp.jpg",
      image: "/placeholderpfp.jpg",
      name: "Alice Johnson",
      date: "April 1, 2025",
      likes: "40",
      description: "Just finished an exciting new project! 🚀",
    },
    {
      pfp: "/placeholderpfp.jpg",
      image: undefined,
      name: "Bob Smith",
      date: "March 30, 2025",
      likes: "40",
      description: "Enjoying a relaxing weekend with some coffee ☕.",
    },
    {
      pfp: undefined,
      image: "/placeholderpfp.jpg",
      name: "Charlie Davis",
      date: "March 28, 2025",
      likes: "40",
      description: "Here's a picture from my latest trip! 🏞️",
    },
    {
      pfp: "/placeholderpfp.jpg",
      image: "/placeholderpfp.jpg",
      name: "Diana Lee",
      date: "March 25, 2025",
      likes: "40",
      description: "Excited to share some new artwork! 🎨",
    },
    {
      pfp: undefined,
      image: undefined,
      name: "Ethan Wright",
      date: "March 22, 2025",
      likes: "40",
      description: "No pictures, just thoughts: Life is a journey. 🌎",
    },
  ];

  return (
    <>
      <main className="bg-[#100F12] font-sans mx-auto flex flex-col   max-w-[500px] px-4 py-12">
        <section className="flex flex-col gap-6">
          <div className="aspect-square w-full bg-pink-400 rounded-2xl"></div>

          {/* startup info */}
          <div className="flex-col flex gap-4">
            <h2 className=" uppercase font-bold text-[40px] text-center leading-[120%]">
              AI DOL
            </h2>
            <h3 className="text-white/80 text-center text-xl">
              Philosophical AI Systems
            </h3>
            <div className="flex gap-4 text-center justify-center text-xl text-white/80">
              <span>Posts: 12</span>
              <span>Investors: 25,854</span>
            </div>
          </div>

          {/* vote button */}
          <button className="bg-theme-light font-bold text-xl text-theme-dark rounded-md py-3 cursor-pointer">
            Vote for AIDOL
          </button>

          {/* feed and investor buttons */}
          <div className="flex gap-4 ">
            <button
              onClick={() => handleButtonClick("liveFeed")}
              className="cursor-pointer"
            >
              Feed
            </button>
            <button
              onClick={() => handleButtonClick("investorComments")}
              className="cursor-pointer"
            >
              Investor Comments
            </button>
          </div>
        </section>

        {activeSection === "liveFeed" ? (
          <>
            {posts.map((post, index) => (
              <Post
                key={index}
                name={post.name}
                date={post.date}
                description={post.description}
                pfp={post.pfp}
                image={post.image}
                likes={post.likes}
              ></Post>
            ))}
          </>
        ) : (
          <p>This is where investor comments will appear...</p>
        )}
      </main>
    </>
  );
}
