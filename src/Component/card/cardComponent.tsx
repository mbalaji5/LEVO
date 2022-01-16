import { useState } from "react";
import { IArticles } from "../../DataModel/articles/articles";
import "./card.styles.css";
interface InputProps {
  article: IArticles;
}
const Card = (props: InputProps) => {
  const [isReadMore, setIsReactMore] = useState(false);
  const {
    article: { publishedAt, summary, title }
  } = props;
  const publishedDate = new Date(publishedAt && publishedAt.substring(0, 9));
  return (
    <section data-testid="cardItem" className="cardItem">
      <span>{`${publishedDate.getDay()}/${publishedDate.getDate()}/${publishedDate.getFullYear()}`}</span>
      <section>
        <h4>{title}</h4>
        <p className={isReadMore ? "summary readMore" : "summary"}>{summary}</p>
      </section>
      <button
        className="readMoreButton"
        onClick={() => setIsReactMore(!isReadMore)}
      >
        {isReadMore ? "Reac Less" : "Read More"}
      </button>
    </section>
  );
};
Card.defaultProps = {
  article: {
    publishedAt: "2022-01-15T17:02:41.000Z",
    summary: "summary",
    title: "title"
  }
};
export default Card;
