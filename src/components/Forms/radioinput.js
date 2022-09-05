import React from 'react'

const RadioInput = ({children, id}) => {
  return (
    <div className="flex cursor-pointer">
        <div className="flex items-center h-5">
            <input id={id} aria-describedby="helper-radio-text"
              type="radio" value=""
              className="w-4 h-4 text-vencru-purp bg-vencru-white
              border-vencru-stroke focus:ring-vencru-purp
              dark:focus:ring-vencru-stroke dark:ring-offset-vencru-stroke" 
            />
        </div>
        {children}
    </div>
  )
}

export default RadioInput