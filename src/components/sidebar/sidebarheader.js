import React from 'react'
import * as Icon from 'react-feather';
import Input from '../Forms/input';


const SidebarHeader = () => {
  return (
    <div className='flex flex-col px-4 w-full h-10 space-y-6 mb-8'>
        <div className='flex items-center justify-start space-x-2'>
            <Icon.Target className='text-vencru-darkgray' />
            <h2 className='text-vencru-black text-xl font-medium'>Untitled UI</h2>
        </div>
        <Input leftIcon={ <Icon.Search className='text-vencru-darkgray' />} padding = 'py-6' placeholder='Search' />
    </div>
  )
}

export default SidebarHeader