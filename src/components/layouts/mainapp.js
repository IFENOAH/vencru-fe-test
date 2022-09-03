import { SideBarItem } from "../sidebar/sidebarItem"
import * as Icon from 'react-feather';
import {  useState } from "react";
import { useMediaQuery } from "../../hooks/useMedia";
import SidebarLoggedinUser from "../sidebar/sidebarloggedinuser";
import SidebarHeader from "../sidebar/sidebarheader";

export const MainAppLayout = ({children}) => {

  const [showPanel, setShowPanel] = useState(false);

  let isMobile = useMediaQuery('(max-width: 768px)')

   const toggleShowPanel = () => {
    setShowPanel((prev) => !prev);
  };

    return (
        <div className="flex h-screen">
            {/** Backdrop - Show on mobile */}
            <div
                className={`fixed inset-0 z-10 bg-sb-main bg-opacity-75 lg:hidden`}
                style={{
                opacity: 0.5,
                display: isMobile && showPanel ? 'block' : 'none',
                }}
                aria-hidden="true"
                onClick={toggleShowPanel}
            ></div>

            <aside className={`fixed pt-8 pb-4 inset-y-0 z-10 border-r-2 border-vencru-lightgray lg:absolute w-80 ${isMobile && !showPanel && 'hidden'}`}>
                <div className="flex flex-col h-full space-y-1 overflow-y-hidden hover:overflow-y-auto">
                    <nav  className="space-y-1 px-2 mb-12 mt-4">
                        <SidebarHeader />
                    </nav>

                    <nav className="flex-1 space-y-1 px-2">
                        <SideBarItem children='Home' icon={<Icon.Home/>} />
                        <SideBarItem children='Dashboard' icon={<Icon.BarChart2/>} number = {10} />
                        <SideBarItem children='Projects' icon = {<Icon.Layers />} />
                        <SideBarItem children='Tasks' icon = {<Icon.CheckSquare number/>} />
                        <SideBarItem children= 'Reporting' icon={<Icon.Flag/>} />
                        <SideBarItem children='Users' icon={<Icon.Users />} />
                        <nav className="pt-4">
                            <SideBarItem children='Support' icon={<Icon.LifeBuoy />} />
                            <SideBarItem children='Settings' url='/settings' icon={<Icon.Settings />} />
                        </nav>
                    </nav>
                   
                    <nav className="pt-6 px-2 flex divide-y divide-vencru-main">
                        <SidebarLoggedinUser />
                    </nav>
                </div>
            </aside>

            <main
                className={`flex-1 w-full h-full ${ !isMobile && 'pl-80'} `}
            >
                {/* Mobile header */}
                <div
                    className={`sticky w-full flex items-center justify-between bg-vencru-red p-4 top-0 ${ !isMobile && 'hidden'} ${
                        isMobile && showPanel && 'opacity-10'
                    }`}
                >
                    <img src={''} alt="vencru logo" height={32} />
                    <Icon.Menu
                        width={24}
                        height={24}
                        className="text-white"
                        onClick={toggleShowPanel}
                    />
                </div>
                
                {/* content */}
                <div className="flex flex-col flex-1 h-full min-h-screen overflow-x-hidden overflow-y-auto bg-vencru-background py-10 px-12">
                    <div>
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}