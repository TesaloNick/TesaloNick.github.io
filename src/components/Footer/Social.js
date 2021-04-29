import React from "react";

const Social = (props) => {
    return (
        <div class='social'>
            {props.socialNetworks.map(item => (
                <a href={item.link}>
                    <img class ={item.name} src={item.img} />
                </a>
            ))}
        </div>
    )
}
export default Social