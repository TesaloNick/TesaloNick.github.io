import React from "react";

const Flags = (props) => {
    return (
        <div class='flags'>
            {props.linksOfFlags.map(item => (
                <a href={item.link}>
                    <img class ={item.name} src={item.img} />
                </a>
            ))}
        </div>
    )
}
export default Flags