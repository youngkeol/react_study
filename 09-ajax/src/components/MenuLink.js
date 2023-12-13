import React from "react";

import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const MenuyLinkContainer = styled(NavLink)`
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    padding: 2px;
    color: #222;

    &:hover {
        color: #22b8cf;
    }
    &:after {
        content: "|";
        display: inline-block;
        padding: 0 7px;
        color: #ccc;

        &.active {
            text-decoration: underline;
            color: #222;
        }
    }
    &:last-child {
        &:after {
            color: #fff;
        }
    }
`;
const MenuLink = ({ to, children }) => {
    return <MenuyLinkContainer to={to}>{children}</MenuyLinkContainer>;
};

export default MenuLink;
