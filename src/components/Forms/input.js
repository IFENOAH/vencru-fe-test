import React from 'react'

const Input = ({leftIcon, padding, placeholder, bgColor}) => {
  return (
    <div className={`flex items-center space-x-2 border-2 border-vencru-stroke w-full px-2 bg-vencru-${bgColor} ${padding && padding} h-3/4 border rounded-lg`}>
        {leftIcon}
        <input type='text'className={`outline-none text-vencru-darkgray text-sm w-full bg-vencru-${bgColor}`} placeholder= {placeholder} />
    </div>
  )
}

export default Input
