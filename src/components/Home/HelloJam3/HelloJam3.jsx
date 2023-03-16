import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import HeaderMotion from "../../common/motion/HeaderMotion";
import TextComponent from "../../TextComponent/TextComponent";

const HelloJam3 = () => {
  return (
    <div className="  flex flex-col items-center w-full mt-5 lg:mt-20 xl:mt-40" id="helloJam">
      <HeaderMotion>
        <div className="flex flex-col items-center sm:mx-5 mx-5  md:mx-8 xl:mx-[280px] 2xl:mx-[420px] 3xl-mx-[520px]">
          <button className="border-2 border-[#909090]/20 uppercase text-xs rounded-full   text-center py-2 my-10 px-8 font-bold">
            <div className="dark:text-neonGreen"> Our Gamified SocialFi Platform </div>
          </button>
          <h1 className="header-text mb-4 slide-in-left  ">Say Hello to Jam 3</h1>
          <p className="body-text   text-center ">
            Jam3 is a social platform that rewards you for building meaningful connections. Create unique memories with new friends, earn coins and unlock rewards by interacting with others. In Jam3,
            every action you take to make new friends or deepen existing relationships is rewarded.
          </p>
        </div>
      </HeaderMotion>

      {/* <StaticImage
        src="../../../images/HelloJam3.png"
        alt="Dmple Logo"
        placeholder="blurred"
      /> */}
      {/* photo layers */}
      <div className=" mt-20 relative  flex flex-col justify-end items-center h-[300px] md:h-[550px] lg:h-[800px] overflow-hidden  ">
        <div className="h-[300px] md:h-[550px] lg:h-[800px] w-full flex justify-end ">
          <StaticImage src="../../../images/hellojam3bg.png" alt="Dmple Hello Jame3" placeholder="blurred" className="object-fit" />
        </div>
        <div className=" absolute bottom-0 h-full 2xl:w-3/4 sm:w-full md:w-[80%] flex justify-end go-up ">
          <StaticImage src="../../../images/hellojam3char.png" alt="Dmple Hello Jame3" placeholder="blurred" className=" w-full object-fit " />
        </div>
        <div className="absolute bottom-[10%] left-[40px] xl:left-[10%] 2xl:left-[20%] h-[450px] w-[250px] ">
          <TextComponent />
        </div>
      </div>
    </div>
  );
};

export default HelloJam3;
