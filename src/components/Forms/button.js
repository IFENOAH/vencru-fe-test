import React from 'react'

const Button = ({imgBefore, children, imgAfter, link, color, roundleft, roundright, straight, rounded, small}) => {

  return (
    <button className={`flex items-center justify-between ${link ? '' : 'bg-vencru-white'}
        rounded-none
        ${rounded ? 'rounded' : ''}
        ${link ? '' : 'border border-vencru-stroke'} ${link ? '' : 'py-[10px]'}
        ${roundleft ? 'rounded-l-lg' : 'rounded-none'}
        ${roundright ? 'rounded-r-lg' : 'rounded-none'}
        `}
    >
        {imgBefore}
        <h2 className={` ${color ? color : 'text-vencru-darkgray'} ${small ? 'px-2' : 'px-[20px]'}  text-sm `} >
            {children}
        </h2>
        {imgAfter}
    </button>
  )
}

export default Button