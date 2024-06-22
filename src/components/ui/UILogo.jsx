import React from "react";

const UILogo = ({customClassName}) => {
  return (
    <div>
      <img src="./logo.png" alt="logo" className={`${customClassName} w-[100px] lg:w-[130px]`} />
    </div>
  );
};

export default UILogo;
