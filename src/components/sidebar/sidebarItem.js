import { cloneElement } from "react"

export const SideBarItem = ({children, url, icon, number}) => {

    return (
        <a href={url} className="w-full flex items-center justify-between px-4 py-3">
            <div className="flex items-center justify-between">
                <span aria-hidden="true">
                {icon &&
                    cloneElement(icon, {
                        className: 'w-5 h-5 text-vencru-darkgray',
                        //strokeColor: 'currentColor',
                    })}
                </span>
                <h2 className="px-4 text-md text-vencru-main ">{children}</h2>
            </div>

            { number &&  
                <span className=" bg-vencru-lightgray rounded-xl px-3 text-sm">
                    <span className="text-vencru-main">
                        {number}
                    </span>
                </span>
            }

        </a>
    )
}