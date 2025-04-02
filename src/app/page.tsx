"use client";
import { circOut } from "motion";
import CrystalButton from "./components/CrystalButton/CrystalButton";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="font-sans">
      {/* <nav className="p-6 fixed top-0 inset-x-0 z-10000">
        <svg
          width="33"
          height="27"
          viewBox="0 0 33 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0703 26.5273C4.99999 26.5273 0.201159 23.6621 0.763659 18.582L11.6445 17.9316C10.5547 21.6406 11.6445 23.873 14.7383 23.873C17.1113 23.873 18.7637 22.5195 18.7637 20.6914C18.7637 19.3379 17.8848 18.459 14.1055 16.7891L10.3437 15.1191C6.5996 13.4492 5.12303 11.6562 5.12303 8.84375C5.12303 3.44727 10.6953 0.863281 19.7832 0.863281C28.8359 0.863281 33.5293 3.69336 32.6504 8.65039L22.9648 9.40625C23.8437 5.52148 22.7012 3.53516 19.5019 3.53516C16.9355 3.53516 15.0898 4.69531 15.0898 6.41797C15.0898 7.57812 15.793 8.31641 19.7832 10.0039L23.8437 11.709C27.8691 13.3965 29.1348 15.1719 29.1348 17.9316C29.1348 23.6094 23.5625 26.5273 14.0703 26.5273Z"
            fill="#FF4C7F"
          />
        </svg>
      </nav> */}
      <header className="h-[90svh] relative flex flex-col">
        <motion.div
          className="absolute size-full"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 2,
              ease: circOut,
            },
          }}
        >
          <motion.video
            width="1920"
            height="1080"
            autoPlay
            playsInline
            loop
            muted
            className="absolute size-full object-cover "
          >
            <source src="./landing.webm" type="video/webm" />
            Your browser does not support the video tag.
          </motion.video>
          <motion.div className="absolute size-full bg-gradient-to-t from-background to-transparent" />
        </motion.div>
        <div className="mt-auto p-6 relative z-10 text-white text-center">
          <motion.h1
            className="uppercase font-display font-black text-[clamp(1rem,13vw,5.5rem)] leading-none bg-blend-color"
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 1,
                ease: circOut,
              },
            }}
          >
            Strikeout
          </motion.h1>
          <motion.h2
            className="font-bold text-xl tracking-wide"
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 1,
                delay: 0.1,
                ease: circOut,
              },
            }}
          >
            Sending startups to stardom
          </motion.h2>
        </div>
      </header>
      <main className="flex flex-col px-6 py-12">
        <section className="flex flex-col gap-8 mb-12">
          <p className="font-medium text-4xl">
            9 in 10 startups fail, with a significant portion failing within the
            first few years, often due to a lack of funding.
          </p>
          <p className="font-medium text-4xl">
            For the hardest-working and most diligent startups, we&apos;re
            giving them a stage to shine.
          </p>
          <CrystalButton href="/invest" />
        </section>
        {/* <section>
          <hgroup>
            <h2 className="font-bold text-2xl mb-2">
              Higher payouts with every round
            </h2>
            <p className="text-lg">
              In our multi-stage bracket, all funds go towards the winning team
            </p>
          </hgroup>
        </section> */}
        {/* <article>
          <h2 className="font-bold uppercase text-sm mb-4">Past contestants</h2>
          <ul>
            <li>
              <div className="w-full h-48 bg-slate-500 text-white p-4">
                <h3>Hangover</h3>
              </div>
            </li>
          </ul>
        </article> */}
      </main>
      <footer className="relative h-[32rem] bg-gradient-to-b from-transparent to-theme-light p-4 flex flex-col overflow-hidden">
        <svg
          viewBox="0 0 45 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute aspect-square h-[90vw] -bottom-1/4"
        >
          <path
            d="M18.8107 35.731C6.23759 35.731 -0.414439 31.7593 0.365286 24.7174L15.4481 23.8158C13.9374 28.9571 15.4481 32.0517 19.7366 32.0517C23.0261 32.0517 25.3165 30.1754 25.3165 27.6413C25.3165 25.7651 24.0982 24.5468 18.8594 22.232L13.645 19.9172C8.45494 17.6024 6.40816 15.117 6.40816 11.2184C6.40816 3.73787 14.1323 0.156006 26.7298 0.156006C39.2785 0.156006 45.7843 4.079 44.566 10.9503L31.1401 11.9981C32.3584 6.61311 30.7746 3.8597 26.3399 3.8597C22.7824 3.8597 20.2239 5.46789 20.2239 7.8558C20.2239 9.46398 21.1986 10.4874 26.7298 12.8265L32.3584 15.1901C37.9383 17.5293 39.6927 19.9903 39.6927 23.8158C39.6927 31.6862 31.9685 35.731 18.8107 35.731Z"
            fill="url(#paint0_linear_1455_7)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1455_7"
              x1="195.5"
              y1="0"
              x2="195.5"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--background)" />
              <stop offset="1" stopColor="#FD9AB500" />
            </linearGradient>
          </defs>
        </svg>
      </footer>
    </div>
  );
}
