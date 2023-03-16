import React from "react";
import "./index.css";

function BenefitWrap(props) {
  const { title, icon, content } = props;
  return (
    <div className="border border-x-0 border-t-0 my-10">
      <div className="flex flex-row">
        <div className="text-5xl text-[#333] font-bold dark:text-white"> {title} </div>
        <div className="text-5xl vibrate-1  "> {icon}</div>
      </div>

      <div className="text-base my-8 text-mainLightGray font-bold dark:text-darkModeGray6">{content}</div>
    </div>
  );
}

export default BenefitWrap;
