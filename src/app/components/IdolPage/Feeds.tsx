"use client";

import { useState } from "react";
import { Post } from "./Post";

type Post = {
  pfp: string;
  image?: string | undefined;
  name: string;
  date: string;
  likes: string;
  description: string;
};

type FeedsProps = {
  posts: Post[];
  comments: Post[];

};
export const Feeds = ({
  posts,
  comments
}: FeedsProps) => {
  const [activeSection, setActiveSection] = useState<"liveFeed" | "investorComments">("liveFeed");

  const handleButtonClick = (section: "liveFeed" | "investorComments") => {
    setActiveSection(section);
  };



  return (
    <>
     <div className="flex gap-6 ">
            <button
              onClick={() => handleButtonClick("liveFeed")}
              className={`cursor-pointer ${activeSection === "liveFeed"? "text-white border-b border-white" :"text-white/50"}`}
            >
              Feed
            </button>
            <button
              onClick={() => handleButtonClick("investorComments")}
              className={`cursor-pointer ${activeSection === "investorComments"? "text-white border-b border-white" :"text-white/50"}`}
            >
              Investor Comments
            </button>
          </div>

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
        <>
        {comments.map((post, index) => (
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
       
      )}
    </>
  );
};
