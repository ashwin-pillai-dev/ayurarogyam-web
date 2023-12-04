'use client'
import DefaultNavbar from "./navbar/navbar";
import DefaultSidebar from "../sidebar/sideBar";
import { useState } from "react";
import NavBarNew from "./navbar/NavBarNew";



export default function NavSideWrapper(user:any ) {
    const [drawerVisible, setDrawerVisible] = useState(false)
    
        console.log('user from NavSideWrapper');
        console.log(user);

        

    const drawerClicked = () => {
        setDrawerVisible(!drawerVisible)

    }

    return (
    
        <>
     
            <NavBarNew onDrawerClick={drawerClicked} user={user} />

            <DefaultSidebar sidebarVisible={drawerVisible} />
        </>
    )
}