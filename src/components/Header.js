import React from "react";
import Nav from './Header/Nav'
import logo from '../images/logo.png'

const Header = (props) => {
    const sectionMenu = [
        {link: 'https://www.sports.ru/football/',name: 'Футбол'},
        {link: 'https://www.sports.ru/hockey/',name: 'Хоккей'},
        {link: 'https://www.sports.ru/basketball/',name: 'Баскетбол'},
        {link: 'https://www.sports.ru/boxing/',name: 'ММА'}
    ]
    return (
        <header>
            <img src={logo} alt={"logo"}/> 
            <Nav sectionMenu={sectionMenu}/>
        </header>
    )
}
export default Header 