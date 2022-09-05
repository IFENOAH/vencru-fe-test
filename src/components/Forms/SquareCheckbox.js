import React from 'react'

const SquareCheckbox = ({id}) => {
  return (
    <input id={id} type="checkbox" value="" className="w-4 h-4 border rounded text-vencru-purp bg-vencru-white
        border-vencru-purp focus:ring-vencru-purp dark:focus:ring-vencru-purp dark:ring-offset-vencru-purp
        dark:border-vencru-stroke" 
    />
  )
}

export default SquareCheckbox