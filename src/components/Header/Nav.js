import React from "react";

const Nav = (props) => {
    return (
        <nav>
            <ul>
                {props.sectionMenu.map((item) => (
                    <li>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Nav 