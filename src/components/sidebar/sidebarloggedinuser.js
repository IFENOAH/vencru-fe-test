import React from 'react'
import * as Icon from 'react-feather';

const SidebarLoggedinUser = () => {
  return (
    <div className="w-full inline-flex space-x-3 pt-2 mt-2 px-4">
        <div
            className="w-12 h-12 rounded-full flex-shrink-0"
            style={{
                backgroundImage: `url('https://bit.ly/ryan-florence')`,
                backgroundSize: 'contain',
            }}
        />

        <div className={`flex-1 flex items-center space-x-3 truncate`}>
            <span className="flex-1 inline-flex flex-col text-sm truncate">
                <span className="text-vencru-black font-medium truncate">
                    Olivia Rhye
                </span>
                <span className="text-vencru-main font-normal truncate">
                    olivia@untitledui.com
                </span>
            </span>
            <Icon.LogOut className="w-5 h-5 text-vencru-darkgray flex-shrink-0" />
        </div>
    </div>
  )
}

export default SidebarLoggedinUser