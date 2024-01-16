import React from "react";
import { useEffect, useState } from "react";

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (res.status === 200) {
      return await res.json();
    }
  } catch (error) {
    console.log("Fetch data failed:" + error);
  }
}

function ListData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchedData() {
      const fetched = await fetchData();

      setData(fetched);
    }

    fetchedData();
  }, []);

  return data.map((i, index) => {
    return (
      <li key={index}>
        Name: {i.name}
        <br></br>
        Username: {i.username}
      </li>
    );
  });
}

export default function MyApp() {
  return (
    <>
      <h1>React Admin Experiment</h1>
      <ListData />
    </>
  );
}
