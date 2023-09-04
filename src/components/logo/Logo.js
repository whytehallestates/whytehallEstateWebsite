import React from 'react';
import {Link} from 'react-router-dom';
import LogoImg from "../../assets/images/logo.png";

const Logo = () => {
    return (
        <div className="logo" style={{paddingBottom:"5px"}}>
            <Link to="/">
                <img src={LogoImg} height={100} width={75} alt="Logo" />
            </Link>
        </div>
    )
}

export default Logo;