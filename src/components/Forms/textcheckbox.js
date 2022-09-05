import React from 'react'

const TextCheckbox = ({leftNode, text, subText}) => {
  return (
    <div className='flex justify-start space-x-2'>
      {leftNode}
      <div className="flex flex-col items-center justify-between">
        <h2 className="font-medium text-sm">
          {text}
        </h2>
        <h2 className="text-vencru-darkgray text-sm">
          {subText}
        </h2>
      </div>
    </div>
  )
}

export default TextCheckbox