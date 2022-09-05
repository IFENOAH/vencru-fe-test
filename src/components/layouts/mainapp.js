import { SideBarItem } from "../sidebar/sidebarItem"
import * as Icon from 'react-feather';
import {  useState } from "react";
import { useMediaQuery } from "../../hooks/useMedia";
import SidebarLoggedinUser from "../sidebar/sidebarloggedinuser";
import SidebarHeader from "../sidebar/sidebarheader";
import SideBarVideo from "../sidebar/sidebarvideo";
import Button from "../Forms/button";

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
                className={`fixed inset-0 z-10 bg-vencru-main bg-opacity-75 lg:hidden`}
                style={{
                opacity: 0.5,
                display: isMobile && showPanel ? 'block' : 'none',
                }}
                aria-hidden="true"
                onClick={toggleShowPanel}
            ></div>

            <aside className={`fixed pt-6 pb-2 inset-y-0 z-10 border-r-2 border-vencru-lightgray lg:absolute bg-vencru-white w-80 ${isMobile && !showPanel && 'hidden'}`}>
                <div className="flex flex-col h-full space-y-1 overflow-y-hidden hover:overflow-y-auto">
                    <nav  className="space-y-1 px-2 mb-6 mt-2">
                        <SidebarHeader />
                    </nav>

                    <nav className="flex-1 space-y-1 px-2 pt-4">
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
                   
                    <nav className=" flex flex-col pt-2 px-2 flex divide-y divide-vencru-stroke">
                        <SideBarVideo header='New features availble!' subtext = 'Check out the new dashboard view. Pages now load faster.'
                            node = {<img style={{borderRadius: '10px'}} height = '30px' src = 'https://media.istockphoto.com/photos/portrait-of-beautiful-woman-picture-id1203433728?k=20&m=1203433728&s=612x612&w=0&h=t_RX0lJeOWxexs4fiPfLUw-oINQl8dcZ3vaYHnEEdIQ=' alt = 'side img' />}
                            footer={<div className="flex items-center">
                                <Button link >Dismiss</Button>
                                <Button link color='text-vencru-purp' >What's New?</Button>
                            </div>}
                        />
                        <SidebarLoggedinUser />
                    </nav>
                </div>
            </aside>

            <main
                className={`flex-1 w-full h-full ${ !isMobile && 'pl-80'} `}
            >
                {/* Mobile header */}
                <div
                    className={`sticky w-full flex items-center justify-between bg-vencru-white border-b border-vencru-stroke p-4 top-0 ${ !isMobile && 'hidden'} ${
                        isMobile && showPanel && 'opacity-10'
                    }`}
                >
                    <div className="flex items-center space-x-2">
                        <img style={{backgroundColor: '#FFFFFF',borderRadius: '10px'}} width='35px' height = '35px' src= 'https://blog.vencru.com/wp-content/uploads/2019/06/Vencru-Logo.png' alt="logo" />
                        <h2 className="text-lg font-medium text-vencru-main">Untitled UI</h2>
                    </div>
                    <Icon.Menu
                        width={24}
                        height={24}
                        className="text-white"
                        onClick={toggleShowPanel}
                    />
                </div>
                
                {/* content */}
                <div className="flex flex-col flex-1 h-full min-h-screen overflow-x-hidden overflow-y-auto bg-vencru-background py-6 px-6  lg:px-12">
                    <div>
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}