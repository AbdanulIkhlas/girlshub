import React from "react";

const ButtonCustom = ({customClassName, children, type  }) => {
  return <div>
    <button type={type} className={`p-3 w-[150px] rounded-full text-[14px] font-bold ${customClassName}`}>
      {children}
    </button>
  </div>;
};

export default ButtonCustom;
