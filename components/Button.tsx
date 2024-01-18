import React from 'react'

interface ButtonProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button = ({text, onClick, icon}: ButtonProps) => {
  return (
    <button
        type='button'
        onClick={onClick}
        className='flexCenter whitespace-nowrap bg-teal-500 text-white rounded-full border px-8 py-3 font-bold transition-all hover:bg-teal-600'
    >
        {icon && icon}
        {text}
    </button>
  )
}

export default Button
