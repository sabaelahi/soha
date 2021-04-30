import React from "react";
import {Link} from "react-router-dom";

const Page404 =() =>{
    return(
        <div className={"d-flex flex-column justify-content-center align-items-center h-100 "}>
            <h1>404</h1>
            <p>Hm, the page you were looking for doesn't seem to exist anymore.</p>
            <Link to={"/"} className={"btn btn-dark text-white"}>Back to Home</Link>
        </div>
    )
}

export default Page404;