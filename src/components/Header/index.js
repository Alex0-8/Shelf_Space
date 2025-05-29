import React from "react";
import {Link} from 'react-router-dom'
import HeaderSection from "./styles";

const Header = () => {
    return (
        <HeaderSection>
            <Link to={'/'}><h1>Shelf Space</h1></Link>
            <Link to={'/shelf_space'}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></Link>
        </HeaderSection>
    )
}

export default Header;