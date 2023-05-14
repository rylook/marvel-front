import loader from "../assets/loader.gif";
import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "../components/Hero";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/characters`);
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div className="container">
      <div className="loader">
        <img src={loader} alt="loading" />
      </div>
    </div>
  ) : (
    <>
      <Hero />
      <div className="container home-page">
        <h1>TOP 100 CHARACTERS</h1>
        <main>
          {data.results.map((character) => {
            return <Card key={character._id} data={character} />;
          })}
        </main>
      </div>
    </>
  );
};

export default Home;
