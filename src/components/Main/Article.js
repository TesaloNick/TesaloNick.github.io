import React from "react";

const Article = (props) => {
    return (
        <div class='articles'>
            {props.postsArticles.map(item => (
                <div class='article'>
                    <p class='time'>{item.time}</p>
                    <a href={item.link}>{item.title}</a>
                    <a href={item.link}>
                        <img class ='article-img' src={item.img} />
                    </a>
                    <p class='content'>{item.content}</p>

                </div>
            ))}
        </div>
    )
}
export default Article