import React from 'react'

const TableHeader = ({title, node}) => {
  return (
    <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between w-full'>
        <h2 className='text-lg font-medium'>
            {title}
        </h2>
        {node}
    </div>
  )
}

export default TableHeader
