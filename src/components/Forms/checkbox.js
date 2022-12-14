import React, {useState} from 'react'

const Checkbox = ({node, onClickProp, id}) => {
    const [checked, setChecked] = useState(false)

    const checkBoxHandler = (event) => {
        setChecked(event.target.checked)

        onClickProp(checked)
    }
  return (
    <label htmlFor={id} className={`flex items-start mb-4 w-full
        ${checked ? 'border border-vencru-darkpurp' : 'border border-vencru-stroke'} ${ checked ? 'bg-vencru-lightpurp' : ''}
        justify-between py-4 px-6 rounded-lg cursor-pointer`} 
        onClick={checkBoxHandler}
    >
        <div className={` ${checked ? 'text-vencru-purp' : 'text-vencru-main'}`} >
            {node}
        </div>
        <input id={id} type="checkbox" value="" className="w-4 h-4 border rounded-full text-vencru-purp bg-vencru-white
            border-vencru-purp focus:ring-vencru-purp dark:focus:ring-vencru-purp dark:ring-offset-vencru-purp
            dark:border-vencru-stroke" 
        />
    </label>

  )
}

export default Checkbox