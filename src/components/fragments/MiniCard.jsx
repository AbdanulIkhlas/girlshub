import React from "react";

const MiniCard = ({ useImage, title, rating , reviews, customClassName}) => {
  return (
    <div
      className={`flex gap-2 justify-start items-center bg-white p-3 rounded-2xl shadow-miniCard
      ${customClassName}`}
    >
      {useImage ? (
        <img
          src="./image/icon-home-1.png"
          alt="Icon Home"
          className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
        />
      ) : null}
      <div>
        <p className="font-semibold text-[9px] lg:text-[12px]">{title}</p>
        <div className="flex gap-1">
          <img src="./svg/icon-star.svg" alt="icon star" className="w-[9px]" />
          <p className="text-[9px] lg:text-[12px] font-semibold">{rating}</p>
          <p className="text-[9px] lg:text-[12px] text-textColor">{`(${reviews})`}</p>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
