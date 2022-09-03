import React from 'react'

const Button = ({imgBefore, children, imgAfter, link}) => {

  return (
    <button className={`flex items-center justify-between mt-16 ${link ? '' : 'bg-vencru-white'}
        ${link ? '' : 'border border-vencru-stroke'} ${link ? 'py-4' : 'p-4'} rounded-lg`}
    >
        {imgBefore}
        <h2 className={`text-vencru-darkgray px-2 text-sm `} >
            {children}
        </h2>
        {imgAfter}
    </button>
  )
}

export default Button