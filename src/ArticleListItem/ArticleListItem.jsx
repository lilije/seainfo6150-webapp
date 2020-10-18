import React from "react";

const ArticleListItem = (props) => {
    const article = props.article;
    const [title, timeStamp, displayDate, shortText] = [article.title, article.timeStamp, article.displayDate, article.shortText];
    return (
        <li>
            <h1>{title}</h1>
            <time dateTime={timeStamp}>{displayDate}</time>
            <p>{shortText}</p>
        </li>
    )
};

export default ArticleListItem;