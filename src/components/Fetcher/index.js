import React from "react";
import useFetch from "../../hooks/useFetch";

const Fetcher = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/comments");
  return (
    <div
      style={{
        margin: " 1% 11%",
        border: "1px solid black",
        color: "brown",
        backgroundColor: "lightyellow",
        textAlign: "center",
        fontFamily: "Avenir"
      }}
    >
      <ul style={{ listStyle: "none" }}>
        {data.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetcher;
