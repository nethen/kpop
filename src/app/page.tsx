import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <nav className="p-6 fixed top-0 inset-x-0 z-10000">
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
      </nav>
      <header className="h-svh relative flex flex-col">
        <video
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
        </video>
        <div className="mt-auto p-6 relative z-10 text-white text-center">
          <h1 className="uppercase font-display font-black text-4xl">
            Strikeout
          </h1>
          <h2 className="font-bold text-lg">Sending startups to stardom</h2>
        </div>
      </header>
      <main className="flex flex-col text-xl px-6 py-6">
        <div className="flex flex-col gap-4 mb-12">
          <p className="font-bold">
            9 in 10 startups fail, with a significant portion failing within the
            first few years, often due to a lack of funding.
          </p>
          <p className="font-bold">
            Strikeout something something solvees this idk.
          </p>
          <button className="flex items-stretch w-full">
            <svg
              width="28"
              height="52"
              viewBox="0 0 28 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full"
            >
              <rect
                width="14"
                height="52"
                transform="matrix(-1 0 0 1 28 0)"
                fill="url(#paint0_linear_1391_3579)"
                // style=""
              />
              <path
                d="M28 -1.39246e-06L14.0057 26H-4.76827e-07L14.0057 -1.39246e-06H28Z"
                fill="url(#paint1_linear_1391_3579)"
                // style=""
              />
              <path
                d="M0 26L13.9943 52H28L13.9943 26H0Z"
                fill="url(#paint2_linear_1391_3579)"
                // style=""
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1391_3579"
                  x1="14"
                  y1="26"
                  x2="0"
                  y2="26"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    stopColor="#F47095"
                    // style="stopColor:#F47095;stopColor:color(display-p3 0.9569 0.4392 0.5843);stop-opacity:1;"
                  />
                  <stop
                    offset="1"
                    stopColor="#FE9CB7"
                    // style="stopColor:#FE9CB7;stopColor:color(display-p3 0.9961 0.6118 0.7176);stop-opacity:1;"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1391_3579"
                  x1="19.7016"
                  y1="26.01"
                  x2="19.7016"
                  y2="1.12035e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    stopColor="#FF9CB8"
                    // style="stopColor:#FF9CB8;stopColor:color(display-p3 1.0000 0.6118 0.7216);stop-opacity:1;"
                  />
                  <stop
                    offset="1"
                    stopColor="#C31344"
                    // style="stopColor:#C31344;stopColor:color(display-p3 0.7647 0.0745 0.2667);stop-opacity:1;"
                  />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1391_3579"
                  x1="8.29837"
                  y1="52.01"
                  x2="8.29837"
                  y2="26"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    stopColor="#FF9CB8"
                    // style="stopColor:#FF9CB8;stopColor:color(display-p3 1.0000 0.6118 0.7216);stop-opacity:1;"
                  />
                  <stop
                    offset="1"
                    stopColor="#C31344"
                    // style="stopColor:#C31344;stopColor:color(display-p3 0.7647 0.0745 0.2667);stop-opacity:1;"
                  />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex justify-center items-center bg-gradient-to-r flex-auto from-theme-light via-[#FFD0DD] text-theme-dark font-medium to-theme-light">
              Vote now
            </div>
            <svg
              width="28"
              height="52"
              viewBox="0 0 28 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="14"
                height="52"
                fill="url(#paint0_linear_1391_3579)"
                // style=""
              />
              <path
                d="M0 -1.39246e-06L13.9943 26H28L13.9943 -1.39246e-06H0Z"
                fill="url(#paint1_linear_1391_3579)"
                // style=""
              />
              <path
                d="M28 26L14.0057 52H-4.76827e-07L14.0057 26H28Z"
                fill="url(#paint2_linear_1391_3579)"
                // style=""
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1391_3579"
                  x1="14"
                  y1="26"
                  x2="0"
                  y2="26"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    stopColor="#F47095"
                    // style="stopColor:#F47095;stopColor:color(display-p3 0.9569 0.4392 0.5843);stop-opacity:1;"
                  />
                  <stop
                    offset="1"
                    stopColor="#FE9CB7"
                    // style="stopColor:#FE9CB7;stopColor:color(display-p3 0.9961 0.6118 0.7176);stop-opacity:1;"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1391_3579"
                  x1="8.29837"
                  y1="26.01"
                  x2="8.29837"
                  y2="1.12035e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    stopColor="#FF9CB8"
                    // style="stopColor:#FF9CB8;stopColor:color(display-p3 1.0000 0.6118 0.7216);stop-opacity:1;"
                  />
                  <stop
                    offset="1"
                    stopColor="#C31344"
                    // style="stopColor:#C31344;stopColor:color(display-p3 0.7647 0.0745 0.2667);stop-opacity:1;"
                  />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1391_3579"
                  x1="19.7016"
                  y1="52.01"
                  x2="19.7016"
                  y2="26"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    stopColor="#FF9CB8"
                    // style="stopColor:#FF9CB8;stopColor:color(display-p3 1.0000 0.6118 0.7216);stop-opacity:1;"
                  />
                  <stop
                    offset="1"
                    stopColor="#C31344"
                    // style="stopColor:#C31344;stopColor:color(display-p3 0.7647 0.0745 0.2667);stop-opacity:1;"
                  />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
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
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
