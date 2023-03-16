import React from "react";
import "./index.scss";
const Card = () => {
  return (
    <div
      className={`group mx-5  card relative flex flex-col rounded-[50px]
    w-[345px] md:w-[650px]
      py-5 md:py-10 lg:py-20  bg-gradient-to-br 
      dark:from-[#2D2C2C] dark:to-[#2D2C2C] from-white to-white
       hover:from-[#8080FF] dark:hover:from-[#8080FF] hover:to-[#AB6AF5] dark:hover:to-[#AB6AF5]
       transition  `}
    >
      <div
        className="flex items-center dark:bg-opacity-0 border-[#909090]/20
      ml-5 md:ml-20
      bg-white dark:bg-none text-black px-4 py-1 border border-1 w-fit rounded-full"
      >
        <div className="pr-2 text-2xl ">😎</div>
        <div className="text-xs font-bold dark:text-neonGreen">JOY</div>
      </div>

      <div className="absolute top-5 right-5  opacity-0 hover:opacity-50">
        <svg className="w-[200px] h-[200px] md:w-[324px] md:h-[324px]" width="364" height="364" viewBox="0 0 364 364" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M127.316 6.11639C123.527 9.90463 121.399 15.0426 121.399 20.4V40.6H80.9992C70.2845 40.6 60.0086 44.8564 52.4321 52.4328C44.8556 60.0093 40.5992 70.2852 40.5992 81V121.4H20.3992C15.0418 121.4 9.9039 123.528 6.11566 127.316C2.32743 131.105 0.199219 136.243 0.199219 141.6C0.199219 146.957 2.32743 152.095 6.11566 155.884C9.9039 159.672 15.0418 161.8 20.3992 161.8H40.5992V202.2H20.3992C15.0418 202.2 9.9039 204.328 6.11566 208.116C2.32743 211.905 0.199219 217.043 0.199219 222.4C0.199219 227.757 2.32743 232.895 6.11566 236.684C9.9039 240.472 15.0418 242.6 20.3992 242.6H40.5992V283C40.5992 293.715 44.8556 303.991 52.4321 311.567C60.0086 319.144 70.2845 323.4 80.9992 323.4H121.399V343.6C121.399 348.957 123.527 354.095 127.316 357.884C131.104 361.672 136.242 363.8 141.599 363.8C146.957 363.8 152.095 361.672 155.883 357.884C159.671 354.095 161.799 348.957 161.799 343.6V323.4H202.199V343.6C202.199 348.957 204.327 354.095 208.116 357.884C211.904 361.672 217.042 363.8 222.399 363.8C227.757 363.8 232.895 361.672 236.683 357.884C240.471 354.095 242.599 348.957 242.599 343.6V323.4H282.999C293.714 323.4 303.99 319.144 311.566 311.567C319.143 303.991 323.399 293.715 323.399 283V242.6H343.599C348.957 242.6 354.095 240.472 357.883 236.684C361.671 232.895 363.799 227.757 363.799 222.4C363.799 217.043 361.671 211.905 357.883 208.116C354.095 204.328 348.957 202.2 343.599 202.2H323.399V161.8H343.599C348.957 161.8 354.095 159.672 357.883 155.884C361.671 152.095 363.799 146.957 363.799 141.6C363.799 136.243 361.671 131.105 357.883 127.316C354.095 123.528 348.957 121.4 343.599 121.4H323.399V81C323.399 70.2852 319.143 60.0093 311.566 52.4328C303.99 44.8564 293.714 40.6 282.999 40.6H242.599V20.4C242.599 15.0426 240.471 9.90463 236.683 6.11639C232.895 2.32816 227.757 0.199951 222.399 0.199951C217.042 0.199951 211.904 2.32816 208.116 6.11639C204.327 9.90463 202.199 15.0426 202.199 20.4V40.6H161.799V20.4C161.799 15.0426 159.671 9.90463 155.883 6.11639C152.095 2.32816 146.957 0.199951 141.599 0.199951C136.242 0.199951 131.104 2.32816 127.316 6.11639ZM282.999 81H80.9992V283H282.999V81ZM121.399 121.4H242.599V242.6H121.399V121.4Z"
            fill="url(#paint0_linear_1539_1420)"
          />
          <defs>
            <linearGradient id="paint0_linear_1539_1420" x1="181.999" y1="0.199951" x2="181.999" y2="363.8" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mt-28 ">
        <div className="text-3xl lg:text-6xl font-extrabold dark:text-white text-black group-hover:text-white">
          Connection <br /> beyond borders
        </div>
        <div className="mt-4  text-sm lg:text-base text-black dark:text-[#D8D8D8]  group-hover:text-white">
          Strengthen the relationships you already have, no <br /> matter where you are.
        </div>
      </div>
    </div>
  );
};

export default Card;
