import React from "react";
import loader from "../../../assets/images/loading.gif"
import obj from "./Preloader.module.css"

let Preloader = (props) => {
return(
    <div className={obj.preloader}>
        <img src={loader} alt="Loading"/>
    </div>
)

}
export default Preloader