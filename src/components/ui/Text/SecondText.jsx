import React from "react";

const SecondText = ({children, customClassName}) => {
  return (
    <div>
      <h2 className={`text-[#F17216] text-[12px] md:text-[14px] lg:text-base ${customClassName}`}>{children}</h2>
    </div>
  );
};

export default SecondText;
