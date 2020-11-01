import React, { useCallback, useState } from "react";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
    const article = props.article;
    const [title, timeStamp, displayDate, shortText] = [article.title, article.timeStamp, article.displayDate, article.shortText];

    const [buttonText, setButtonText] = useState("Show more");
    const onButtonClick = useCallback(
        event => {
            event.preventDefault();
            setButtonText(buttonText == "Show less" ? "Show more" : "Show less");
        },
        [buttonText]
    );

    const displayContent = buttonText == "Show less" ?
        <div>
            <p>{shortText}</p>
            <time className={styles.time} dateTime={timeStamp}>{displayDate}</time>
        </div>
        :
        "";

    return (
        <div className={styles.article}>
            <h1 className={styles.h1}>{title}</h1>
            {displayContent}
            <ArticleTextToggleButton buttonText={buttonText} onClick={onButtonClick}></ArticleTextToggleButton>
        </div>
    )
};

export default ArticleListItem;