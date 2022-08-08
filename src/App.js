import { useEffect, useState } from "react";
import CardList from "./components/cat-cards";
import Header from "./components/header/Header";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [arrayLife, setArrayLife] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get("https://api.thecatapi.com/v1/breeds");
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const result = data.reduce((acc, cur) => {
        const text = cur.life_span;
        const textSplit = text.split(" - ");
        acc.push(textSplit);
        return acc;
      }, []);

      setArrayLife(result);
    }
  }, [data]);
  return (
    <div className="App">
      <Header arrayLife={arrayLife} />
      <CardList data={data} />
    </div>
  );
}
