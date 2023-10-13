'use client'
import DefaultNavbar from "./navbar/navbar";
import DefaultSidebar from "../sidebar/sideBar";
import { useState } from "react";


export default function NavSideWrapper() {
    const [drawerVisible, setDrawerVisible] = useState(false)

    const drawerClicked = () => {
        setDrawerVisible(!drawerVisible)

    }

    return (
        <>
            <DefaultNavbar onDrawerClick={drawerClicked} />

                    <DefaultSidebar sidebarVisible={drawerVisible} /> 
        </>
    )
}