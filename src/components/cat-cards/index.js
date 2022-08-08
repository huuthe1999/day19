import Card from "./Card";
import "./Card.css";

export default function CardList({ data }) {
  return (
    data.length > 0 &&
    data.map((item, index) => {
      const {
        id,
        name,
        origin,
        temperament,
        description,
        life_span,
        weight: { metric: weightMetric }
      } = item;
      const shortData = {
        id,
        name,
        origin,
        temperament,
        description,
        life_span,
        weightMetric
      };
      return <Card key={index} data={shortData} />;
    })
  );
}
