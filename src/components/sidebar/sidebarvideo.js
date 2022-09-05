import React from 'react'

const SideBarVideo = ({header, subtext, node, footer}) => {
  return (
    <div className='bg-vencru-background p-4 rounded-lg space-y-2'>
        <header className='flex flex-col items-start justify-start space-y-2'>
            <h2 className='text-vencru-main font-medium text-lg'>{header}</h2>
            <span className='text-vencru-darkgray' >{subtext}</span>
        </header>
        <div className='flex flex-col items-start justify-start w-full'>
            <div className='py-2 w-full h-full'>
                {node}
            </div>
            <footer>
                {footer}
            </footer>
        </div>
    </div>
  )
}

export default SideBarVideo