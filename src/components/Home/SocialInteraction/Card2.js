import React from "react";
import "./index.scss";
const Card = () => {
  return (
    <div
      className={`group mx-5  card relative flex flex-col rounded-[50px]
      w-[345px] md:w-[650px]
       py-5 md:py-10 lg:py-20  bg-gradient-to-br 
        dark:from-[#2D2C2C] dark:to-[#2D2C2C] from-white to-white
         hover:from-[#C83CCF] dark:hover:from-[#C83CCF] hover:to-[#F9A483] dark:hover:to-[#F9A483] `}
    >
      <div className="flex flex-row">
        <div
          className="flex items-center 
        ml-5 md:ml-20
        bg-white text-black dark:bg-opacity-0 border-[#909090]/20 px-4 py-1 border border-1 w-fit rounded-full"
        >
          <div className="pr-2 text-2xl">📱</div>
          <div className="text-xs font-bold dark:text-neonGreen">GENERATION</div>
        </div>
        <div>
          <div className="flex items-center relative z-10 ml-2 dark:bg-opacity-0 border-[#909090]/20   bg-white text-black  px-4 py-1 border border-1 w-fit rounded-full">
            <div className="pr-2 text-2xl">🤝</div>
            <div>
              <div div className="text-xs text-black dark:text-neonGreen font-bold">
                VALUE
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-5 top-5 z-0 opacity-0 group-hover:opacity-50">
        <svg viewBox="0 0 324 324" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[220px] h-[220px] md:w-[324px] md:h-[324px]">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M162 323.6C204.859 323.6 245.963 306.574 276.269 276.268C306.575 245.963 323.6 204.859 323.6 162C323.6 119.141 306.575 78.0374 276.269 47.7316C245.963 17.4257 204.859 0.400024 162 0.400024C119.141 0.400024 78.0378 17.4257 47.7319 47.7316C17.4261 78.0374 0.400391 119.141 0.400391 162C0.400391 204.859 17.4261 245.963 47.7319 276.268C78.0378 306.574 119.141 323.6 162 323.6V323.6ZM47.5068 122.145C55.0069 100.667 68.3893 81.7273 86.1292 67.4842C91.5428 75.746 100.875 81.2 111.5 81.2C119.536 81.2 127.243 84.3923 132.926 90.0747C138.608 95.757 141.8 103.464 141.8 111.5V121.6C141.8 132.315 146.057 142.591 153.633 150.167C161.21 157.744 171.486 162 182.2 162C192.915 162 203.191 157.744 210.767 150.167C218.344 142.591 222.6 132.315 222.6 121.6C222.597 112.559 225.627 103.778 231.204 96.6625C236.782 89.5468 244.585 84.5077 253.365 82.3514C272.642 104.403 283.246 132.71 283.2 162C283.2 168.868 282.635 175.635 281.524 182.2H263C252.286 182.2 242.01 186.456 234.433 194.033C226.857 201.609 222.6 211.885 222.6 222.6V266.979C204.184 277.635 183.277 283.231 162 283.2V242.8C162 232.085 157.744 221.809 150.167 214.233C142.591 206.656 132.315 202.4 121.6 202.4C110.886 202.4 100.61 198.144 93.0333 190.567C85.4568 182.991 81.2004 172.715 81.2004 162C81.204 152.445 77.8211 143.199 71.6525 135.902C65.4839 128.606 56.9289 123.731 47.5068 122.145V122.145Z"
            fill="url(#paint0_linear_1539_4376)"
          />
          <defs>
            <linearGradient id="paint0_linear_1539_4376" x1="162" y1="0.400024" x2="162" y2="323.6" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mt-28 ">
        <div className="text-3xl lg:text-6xl font-extrabold text-black  dark:text-white group-hover:text-white">
          Effortless
          <br /> communication
        </div>
        <div className="mt-4 text-sm lg:text-base text-black dark:text-[#D8D8D8]  group-hover:text-white">
          Fun games that break the ice, help start <br /> conversations or keep them going.
        </div>
      </div>
    </div>
  );
};

export default Card;
