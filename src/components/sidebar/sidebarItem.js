import { cloneElement } from "react"
import { useLocation } from "react-router-dom"

export const SideBarItem = ({children, url, icon, number}) => {

    const location = useLocation()

    return (
        <a href={url} className={`w-full flex items-center rounded justify-between px-4 py-2 ${location.pathname === url ? "bg-vencru-stroke" : ""}`}>
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