import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const fetchData = async (pg: number) => {
  try {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/todos?page=${pg}_limit=20`
    );
    const data = await resp.json();
    console.log(data);
  } catch {}
};

const DeleteData = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<User>();
  useEffect(() => {
    fetchData(page);
  }, []);
  return (
    <button
      onClick={() => {
        setPage(page + 1);
      }}
    >
      DeleteData
    </button>
  );
};

export default DeleteData;
