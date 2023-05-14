import loader from "../assets/loader.gif";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Comic from "../components/Comic";

const Character = () => {
  const params = useParams();
  //const navigate = useNavigate();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/character/${params.characterId}`
        );
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
      <div className="container character">
        <h1>{data.name}</h1>
        <main>
          <img
            className="character-image"
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt={data.name}
          />

          {data.comics.map((comic, index) => {
            console.log(comic);
            return (
              <article key={index}>
                <Comic comicId={comic} />
              </article>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default Character;
