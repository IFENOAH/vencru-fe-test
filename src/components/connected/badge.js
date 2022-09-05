import React from 'react'

const Badge = ({leftIcon, children, rightIcon, paid, unpaid}) => {
  return (
    <div className={`${unpaid ? 'bg-vencru-lightred': 'bg-vencru-lightgreen'} flex items-center justify-center rounded-full w-2/4 py-[3px] px-2 `}>
      {!!leftIcon && <span className={`${unpaid ? 'text-vencru-red': 'text-vencru-green'} text-xs pr-2 `}>{leftIcon}</span>}
      <span className={`${paid ? 'text-vencru-darkgreen' : 'text-vencru-red'}`}>{children}</span>
      {!!rightIcon && <span className=''>{rightIcon}</span>}
    </div>
  )
}

export default Badge