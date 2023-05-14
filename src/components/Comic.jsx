import loader from "../assets/loader.gif";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const Comic = ({ comicId }) => {
  console.log("IdComic: " + comicId);
  const params = useParams();
  //const navigate = useNavigate();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/comic/${comicId}`
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
    <div>
      {data.title}
      <img
        src={data.thumbnail.path + "." + data.thumbnail.extension}
        alt={data.name}
      />
      <p>{data.description}</p>
    </div>
  );
};

export default Comic;
