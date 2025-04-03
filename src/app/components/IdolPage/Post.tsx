import { StaticImageData } from "next/image";
import Image from "next/image";

type PostProps = {
  pfp?: string;
  image?: string;
  name: string;
  date: string;
  description: string;
  likes: string;
};
export const Post = ({
  pfp,
  image,
  name,
  date,
  description,
  likes,
}: PostProps) => {
  return (
    <div className=" font-sans font-normal py-8 border-b border-white/15 ">
      <div className="flex gap-2 ">
        {pfp ? (
          <Image
            className=" overflow-hidden w-12 h-12 rounded-full"
            alt="profile picture"
            src={pfp}
            width={100}
            height={100}
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-amber-900"></div>
        )}

        <div className="flex flex-col">
          <div className="text-base">{name}</div>
          <div className="text-white/60 text-base">{date}</div>
        </div>
      </div>

      <p className="my-4 pl-1 text-lg text-pretty">{description}</p>
      <div className="w-full rounded-2xl overflow-hidden mb-4">
        {image && (
          <Image
            className="w-full object-cover"
            alt="post picture"
            src={image}
            width={100}
            height={100}
          />
        )}
      </div>
      <div className="flex gap-3  pl-1">
        <span className="flex gap-1 text-white/60  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          {likes}
        </span>
        <span className="text-white/60 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};
