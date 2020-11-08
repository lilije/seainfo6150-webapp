import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";

describe("ArticleTextToggleButton tests", () => {
  it("renders correctly", () => {
    const text = "Show less";
    const { container } = render(<ArticleTextToggleButton buttonText={text} />);
    expect(container).toMatchSnapshot();
  });
});
