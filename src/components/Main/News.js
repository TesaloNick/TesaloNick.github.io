import React from "react";

const News = (props) => {
    return (
        <div class='newsAll'>
            {props.postsNews.map(item => (
                <div class='news'>
                    <p>{item.time} </p>
                    <a href ={item.link}>{item.title} </a>
                </div>
            ))}
        </div>
    )
}
export default News