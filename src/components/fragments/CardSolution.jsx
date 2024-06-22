import React from 'react'

const CardSolution = ({title, image, content}) => {
  return (
    <div className="w-[251px] h-[269px] mx-auto p-4 shadow-cardBeforeHover hover:shadow-cardAfterHover hover:duration-300
    hover:ease-in-out hover:transition-shadow">
      <img src={`./image/${image}`} alt="frame" className='w-14 h-14'/>
      <h1 className='text-sm font-bold text-bigText mt-6'>{title}</h1>
      <p className='text-textColor text-[12px] mt-2'>{content}</p>
    </div>
  );
}

export default CardSolution