import React from 'react'

const Button = ({imgBefore, children, imgAfter, link, color, roundleft, roundright, straight, rounded, small}) => {

  return (
    <button className={`flex items-center justify-between ${link ? '' : 'bg-vencru-white'}
      rounded-none
      ${rounded ? 'rounded-lg' : ''}
      ${link ? '' : 'border border-vencru-stroke px-[20px]'} ${link ? '' : 'py-[10px]'}
      ${roundleft ? 'rounded-l-lg' : ''}
      ${roundright ? 'rounded-r-lg' : ''}
      `}
    >
      {imgBefore}
      <h2 className={` ${color ? color : 'text-vencru-darkgray'} ${small ? '' : 'px-2'}  text-sm `} >
          {children}
      </h2>
      {imgAfter}
    </button>
  )
}

export default Button