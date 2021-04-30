import React from "react";
import Header from "../header/Header";
import Home from "../../pages/home/Home";

const Layout = (props)=>{
    return(
        <div className={" w-100 vh-100 overflow-hidden"}>
            <Header/>
            <div className={"d-flex flex-column justify-content-start align-items-center h-100  w-100"}>
                {props.children}
            </div>
        </div>
    )
}
export default Layout;