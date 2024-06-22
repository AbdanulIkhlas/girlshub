import React from 'react'

const TextParagraf = ({children, customClassName}) => {
  return (
    <div className={`text-textColor text-[13px] md:text-[16px] lg:text-[20px] ${customClassName}`}>
      <p>{children}</p>
    </div>
  )
}

export default TextParagraf