import React from "react";

const NavBarLink = (props) => {
    return (
        <a href={props.url}>
            {props.content}
            {props.logo ? <img src={props.logo} alt="logo" /> : ""}
        </a>
    );
};

export default NavBarLink;
