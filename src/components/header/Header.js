import React from "react";
import {Link} from "react-router-dom";
import './style.css';
const Header = ()=>{
    return(
        <div className={"menu-top"}>
            <div className="container-fluid bg-blue menu-top-hide">
                <div className="row">
                    <div className="col-10 offset-1">
                        <div className={"bg-blue"}>
                            <ul className={"list-unstyled d-flex justify-content-around align-items-center m-0  text-white font-14 top-menu"}>
                                <li className={"pointer py-3 position-relative"}>
                                        <div className={" dropdown-menu-item d-flex flex-column"}>
                                            <span>Your Club</span>
                                            <i className={"fa fa-angle-down text-white text-center font-9"}></i>
                                            <Submenu/>
                                        </div>
                                </li>
                                <li><Link to={"/"}>Fixtures</Link></li>
                                <li><Link to={"/"}>Results</Link></li>
                                <li><Link to={"/social"}>Social</Link></li>
                                <li><Link to={"/"}>Tables</Link></li>
                                <li><Link to={"/"}>Tickets</Link></li>
                                <li><Link to={"/"}>Home</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"d-flex justify-content-between align-items-center p-2 bg-green"}>
                <div>
                   <Link to={"/"}> <img src={"/images/logo.png"} className={"img-fluid pointer"}/></Link>
                </div>
                <div className={"d-flex flex-column justify-content-center align-items-center h-100"}>
                    <img src="/images/menu-hamburger.png" alt="" className={"img-fluid pointer"}/>
                    <p className={"text-blue text-center m-0 font-12"}>Menu</p>
                </div>
            </div>
        </div>
    )
}
export default Header;


const Submenu = ()=>{
    return(
        <div className={"submenu-box"}>
            <ul className={"list-unstyled bg-white"}>
                <li><Link to={"/club"}>soccer</Link></li>
                <li><Link to={"/club"}>tennis</Link></li>
                <li><Link to={"/club"}>basketball</Link></li>
            </ul>
        </div>
    )
}