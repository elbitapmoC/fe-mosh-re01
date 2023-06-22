import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

interface User {
  address: {
    city: string;
    geo: { lat: string; lng: string };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

const FetchingData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  const fecthUsers = async () => {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    } catch (err) {
      setError((err as AxiosError).message);
    }
  };

  useEffect(() => {
    // OPTION 1:
    // This method returns a promse.
    // A Promise is an object that holds the eventual result or failute of an (async)   operation.
    // axios
    //   // <User> allows us to autocomplete
    //   .get<User[]>("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => setUsers(res.data))
    //   .catch((err) => setError(err.message));

    // OPTION 2:
    // Async Await
    fecthUsers();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {users.map(({ id, username }: User) => (
          <li key={id}>{username}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchingData;
