import React from 'react'

interface ButtonProps  {
    buttonType: string
}


const Button = ({buttonType}:ButtonProps) => {
  return (
    <button className='bg-red-600 text-white rounded-md w-full mt-5 py-3 hover:bg-gray-600'>{buttonType}</button>
  )
}

export default Button;