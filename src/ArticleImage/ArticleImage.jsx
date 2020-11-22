import React from "react";
import styles from "./ArticleImage.module.css";

const ArticleImage = ({ imageUrl, title }) => {

    return (
        <div>
            <img src={imageUrl} alt="image" />
            <h1>{title}</h1>
        </div>
    )
};

export default ArticleImage;