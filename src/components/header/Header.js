import "./Header.css";
import { averageLife } from "../../Utils/averageLife";
import { useMemo } from "react";

export default function Header({ arrayLife }) {
  const averLife = useMemo(() => {
    return averageLife(arrayLife);
  }, [arrayLife]);
  return (
    <div className="header">
      <h1 className="header-title">Cats Paradise</h1>
      <p>There are 67 cat breeds </p>
      <h2>
        On average a cat can weight about{" "}
        <strong className="average">4.71</strong> Kg and lives{" "}
        <strong className="average">{averLife}</strong> years.
      </h2>
    </div>
  );
}
