import React from "react";
import ArticleListItem from '../ArticleListItem/ArticleListItem';

const ArticleList = (props) => {

    let content;
    const articles = props.articles;

    if (props.articles.length) {
        content = (
            <ul>
                {articles.map((article, index) => {
                    return <ArticleListItem article={article} key={index}></ArticleListItem>
                })}
            </ul>
        )
    } else {
        content = <div>You have no data!</div>;
    }

    return (
        <div>
            {content}
        </div>
    )
};

export default ArticleList;