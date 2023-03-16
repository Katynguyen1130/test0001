import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./index.scss";

function TextComponent() {
  return (
    <div className="h-[450px] w-[250px] overflow-hidden relative  ">
      <div className="w-[151px] h-[119px] absolute top-[300px]   overflow-hidden moveup-1">
        <StaticImage src="../../images/text/text1.png" alt="Dmple character" placeholder="blurred" className="object-cover h-full w-full" />
      </div>
      <div className="w-[111px] h-[133px] absolute  top-[300px]    overflow-hidden moveup-2">
        <StaticImage src="../../images/text/text2.png" alt="Dmple character" placeholder="blurred" className="object-cover h-full w-full" />
      </div>
      <div className="w-[140px]  absolute top-[300px]  h-[137px]    overflow-hidden moveup-3">
        <StaticImage src="../../images/text/text3.png" alt="Dmple character" placeholder="blurred" className="object-cover h-full w-full" />
      </div>
      <div className="w-[132px] absolute  h-[162px] top-[300px]  overflow-hidden moveup-4">
        <StaticImage src="../../images/text/text4.png" alt="Dmple character" placeholder="blurred" className="object-cover h-full w-full" />
      </div>
      <div className="w-[146px] absolute   h-[132px] top-[300px]  my-5 overflow-hidden moveup-5">
        <StaticImage src="../../images/text/text5.png" alt="Dmple character" placeholder="blurred" className="object-cover h-full w-full" />
      </div>
      <div className="w-[146px] absolute   h-[132px] top-[300px]  my-5 overflow-hidden moveup-6">
        <StaticImage src="../../images/text/text6.png" alt="Dmple character" placeholder="blurred" className="object-cover h-full w-full" />
      </div>
      <div className="w-[131px] absolute  h-[130px] top-[300px] my-5 overflow-hidden moveup-7">
        <StaticImage src="../../images/text/text7.png" alt="Dmple character" placeholder="blurred" className="object-cover h-full w-full" />
      </div>
      <div className="w-[132px] absolute  h-[162px] top-[300px]  overflow-hidden moveup-8">
        <StaticImage src="../../images/text/text4.png" alt="Dmple character" placeholder="blurred" className="object-cover h-full w-full" />
      </div>
      <div className="w-[111px] h-[133px] absolute  top-[300px]    overflow-hidden moveup-9">
        <StaticImage src="../../images/text/text2.png" alt="Dmple character" placeholder="blurred" className="object-cover h-full w-full" />
      </div>
    </div>
  );
}

export default TextComponent;
