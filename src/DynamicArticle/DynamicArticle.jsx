import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  const article = props.article;
  const title = article.title;
  const author = article.author;
  const authorEmail = article.authorEmail;
  const timeStamp = article.timeStamp;
  const displayDate = article.displayDate;
  const text = article.text;
  return (
    <article>
      {/* this is an example of how you insert props into a react component */}
      <header>
        <h1>{title}</h1>
        <address>
          by {author} (
          <a href={authorEmail}>{authorEmail}</a>)
          <br />
        </address>
        <time dateTime={timeStamp}>{displayDate}</time>
      </header>
      <HTMLText text={text} />
    </article>
  );
};

export default DynamicArticle;
