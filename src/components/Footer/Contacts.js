import React from "react";

const Contacts = (props) => {
    return (
        <div class='contacts'>
            <h2>О Sports.ru:</h2>
            <div>
                {props.contactsLink.map(item => (
                <   a href={item.link}>{item.name}</a>
                ))}
            </div>
        </div>
    )
}
export default Contacts