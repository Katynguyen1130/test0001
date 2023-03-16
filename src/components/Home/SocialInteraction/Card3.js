import React from "react";
import "./index.scss";
const Card = ({ type }) => {
  return (
    <div
      className={`group mx-5  card relative flex flex-col rounded-[50px]
      w-[345px] md:w-[650px]
       py-5 md:py-10 lg:py-20   bg-gradient-to-br 
        dark:from-[#2D2C2C] dark:to-[#2D2C2C] from-white to-white
         hover:from-[#53CD25] dark:hover:from-[#53CD25] hover:to-[#F7C954] dark:hover:to-[#F7C954] `}
    >
      <div
        className="flex items-center dark:bg-opacity-0 border-[#909090]/20
      ml-5 md:ml-20
      bg-white dark:bg-none text-black px-4 py-1 border border-1 w-fit rounded-full"
      >
        <div className="pr-2 text-2xl ">🥳</div>
        <div className="text-xs font-bold dark:text-neonGreen">JOY</div>
      </div>

      <div>
        <svg
          className="absolute top-10 right-5 w-[200px] h-[200px] md:w-[324px] md:h-[324px] opacity-0 group-hover:opacity-50 "
          width="325"
          height="324"
          viewBox="0 0 325 324"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61.5004 0.400025C66.8578 0.400025 71.9957 2.52823 75.7839 6.31647C79.5722 10.1047 81.7004 15.2427 81.7004 20.6V40.8H101.9C107.258 40.8 112.396 42.9282 116.184 46.7165C119.972 50.5047 122.1 55.6426 122.1 61C122.1 66.3574 119.972 71.4953 116.184 75.2836C112.396 79.0718 107.258 81.2 101.9 81.2H81.7004V101.4C81.7004 106.757 79.5722 111.895 75.7839 115.684C71.9957 119.472 66.8578 121.6 61.5004 121.6C56.143 121.6 51.0051 119.472 47.2168 115.684C43.4286 111.895 41.3004 106.757 41.3004 101.4V81.2H21.1004C15.743 81.2 10.6051 79.0718 6.81683 75.2836C3.0286 71.4953 0.900391 66.3574 0.900391 61C0.900391 55.6426 3.0286 50.5047 6.81683 46.7165C10.6051 42.9282 15.743 40.8 21.1004 40.8H41.3004V20.6C41.3004 15.2427 43.4286 10.1047 47.2168 6.31647C51.0051 2.52823 56.143 0.400025 61.5004 0.400025ZM61.5004 202.4C66.8578 202.4 71.9957 204.528 75.7839 208.316C79.5722 212.105 81.7004 217.243 81.7004 222.6V242.8H101.9C107.258 242.8 112.396 244.928 116.184 248.716C119.972 252.505 122.1 257.643 122.1 263C122.1 268.357 119.972 273.495 116.184 277.284C112.396 281.072 107.258 283.2 101.9 283.2H81.7004V303.4C81.7004 308.757 79.5722 313.895 75.7839 317.684C71.9957 321.472 66.8578 323.6 61.5004 323.6C56.143 323.6 51.0051 321.472 47.2168 317.684C43.4286 313.895 41.3004 308.757 41.3004 303.4V283.2H21.1004C15.743 283.2 10.6051 281.072 6.81683 277.284C3.0286 273.495 0.900391 268.357 0.900391 263C0.900391 257.643 3.0286 252.505 6.81683 248.716C10.6051 244.928 15.743 242.8 21.1004 242.8H41.3004V222.6C41.3004 217.243 43.4286 212.105 47.2168 208.316C51.0051 204.528 56.143 202.4 61.5004 202.4ZM202.9 0.400025C207.358 0.398585 211.691 1.87185 215.225 4.59025C218.758 7.30864 221.293 11.1195 222.434 15.4288L246.25 105.44L314 144.507C317.071 146.28 319.621 148.83 321.393 151.9C323.166 154.971 324.099 158.454 324.099 162C324.099 165.546 323.166 169.029 321.393 172.1C319.621 175.17 317.071 177.72 314 179.493L246.25 218.58L222.414 308.571C221.27 312.876 218.736 316.683 215.205 319.399C211.674 322.114 207.345 323.587 202.89 323.587C198.436 323.587 194.106 322.114 190.575 319.399C187.045 316.683 184.51 312.876 183.367 308.571L159.551 218.56L91.8004 179.493C88.7298 177.72 86.1801 175.17 84.4073 172.1C82.6346 169.029 81.7013 165.546 81.7013 162C81.7013 158.454 82.6346 154.971 84.4073 151.9C86.1801 148.83 88.7298 146.28 91.8004 144.507L159.551 105.42L183.387 15.4288C184.528 11.1228 187.059 7.31446 190.588 4.59641C194.117 1.87836 198.446 0.40304 202.9 0.400025V0.400025Z"
            fill="url(#paint0_linear_1549_674)"
          />
          <defs>
            <linearGradient id="paint0_linear_1549_674" x1="162.5" y1="0.400024" x2="162.5" y2="323.6" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mt-28 ">
        <div className="text-3xl lg:text-6xl font-extrabold dark:text-white text-black group-hover:text-white">
          Rewarding social
          <br /> interactions
        </div>
        <div className="mt-4 text-sm lg:text-base text-black dark:text-[#D8D8D8]  group-hover:text-white">
          Unlock digital and real-life rewards as you take your
          <br /> virtual social interactions to the next level.
        </div>
      </div>
    </div>
  );
};

export default Card;