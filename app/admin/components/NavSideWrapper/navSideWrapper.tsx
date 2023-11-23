'use client'
import DefaultNavbar from "./navbar/navbar";
import DefaultSidebar from "../sidebar/sideBar";
import { useState } from "react";
import NavBarNew from "./navbar/NavBarNew";


export default function NavSideWrapper() {
    const [drawerVisible, setDrawerVisible] = useState(false)

    const drawerClicked = () => {
        setDrawerVisible(!drawerVisible)

    }

    return (
        <>
            <NavBarNew onDrawerClick={drawerClicked} />

            <DefaultSidebar sidebarVisible={drawerVisible} />
        </>
    )
}