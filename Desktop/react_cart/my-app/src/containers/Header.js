import React from "react";
import logo1 from "../asset/logo1.png"

const Header = () =>
{ 
    return (
        <div className="ui fixed menu" style={ { backgroundColor:"rgb(68, 60, 52)"}}>
            <div className="ui container center">
                <img src={ logo1 } alt="" style={ { width: '9rem', height: '4rem', marginTop: "1rem", marginBottom: "1rem" } } /> <span style={ { marginTop: "2rem", marginBottom: "2rem", marginLeft: "0.3rem", color:"#ffff", fontSize:"1.5rem"}}>Afordables</span>
            </div>
        </div>
    )
   
}


export default Header