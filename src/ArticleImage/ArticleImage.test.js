import React from "react";
import ArticleImage from "./ArticleImage";

describe("ArticleImage tests", () => {
  it("renders correctly", () => {
    let imageUrl = "https://cdn.cnn.com/cnnnext/dam/assets/181119170125-ploughgate-creamery-butter-ball-super-169.jpg";
    let articleTitle = "Butter is back, just in time for the holidays";
    
    const { container } = render(<ArticleImage imageUrl={imageUrl} articleTitle={articleTitle} />);
    expect(container).toMatchSnapshot();
  });
});
