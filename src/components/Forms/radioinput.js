import React from 'react'

const RadioInput = ({children}) => {
  return (
    <div className="flex">
        <div className="flex items-center h-5">
            <input id="helper-radio" aria-describedby="helper-radio-text"
              type="radio" value=""
              className="w-4 h-4 text-vencru-darkgray bg-vencru-darkgray
              border-vencru-darkgray focus:ring-vencru-darkgray
              dark:focus:ring-vencru-darkgray dark:ring-offset-vencru-darkgray" 
            />
        </div>
        {children}
    </div>
  )
}

export default RadioInput