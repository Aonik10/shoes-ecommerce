import React from "react";
import { Link } from "react-router-dom";

const NavBarLink = (props) => {
    return (
        <Link to={props.url}>
            {props.content}
            {props.logo ? (
                <img src={props.logo} alt="logo" className="logo" />
            ) : (
                ""
            )}
        </Link>
    );
};

export default NavBarLink;
