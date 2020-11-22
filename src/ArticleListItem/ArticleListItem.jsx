import React, { useCallback, useState } from "react";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css";
import ArticleImage from "../ArticleImage/ArticleImage";

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
            <ArticleImage title={props.article.title} imageUrl={props.article.image._url} />
            {displayContent}
            <ArticleTextToggleButton buttonText={buttonText} onClick={onButtonClick}></ArticleTextToggleButton>
        </div>
    )
};

export default ArticleListItem;