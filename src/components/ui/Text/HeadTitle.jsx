import React from "react";

const HeadTitle = ({children, customClassName}) => {
  return (
    <div>
      <h1 className={`text-bigText text-[16px] font-medium md:text-[24px] ${customClassName}`}>
        {children}
      </h1>
    </div>
  );
};

export default HeadTitle;
