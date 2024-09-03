import { useState, useEffect } from "react";
import fetchPosts from "./utils/api";

const Server = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetchPosts();
      console.log(response);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {data.length ? (
        data.map((val,index) => (
          <div key={val.id}>
            <h2>{val.title}</h2>
            <h3>{val.body}</h3>
          </div>
        ))
      ): (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Server;