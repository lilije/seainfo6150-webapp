import React from "react";
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import styles from "./ArticleList.module.css";

const ArticleList = (props) => {

    let content;
    const articles = props.articles;

    if (props.articles.length) {
        content = (
            <div className={styles.articles}>
                {articles.map((article, index) => {
                    return <ArticleListItem article={article} key={index}></ArticleListItem>
                })}
            </div>
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