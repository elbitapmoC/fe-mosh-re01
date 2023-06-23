import { useState, useEffect } from "react";
import { AxiosError } from "axios";

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

const FetchingAndDeletingData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

  const deleteUser = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const fecthUsers = async (pg: number) => {
    try {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users?_page=${pg}&_limit=2`
      );
      const json = await resp.json();
      console.log(json);
      setUsers(json);
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
    fecthUsers(page);
    console.log("Fetched.. page: ", page);
  }, [page]);

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {users.map(({ id, username, email }: User) => (
          <aside className="flex w-full justify-between">
            <li key={id}>
              {username} @ {email}
            </li>
            <button
              type="button"
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              onClick={() => {
                deleteUser(id);
              }}
            >
              Delete
            </button>
          </aside>
        ))}
      </ul>
      <button
        type="button"
        className="p-4 w-full mt-8 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 hover:bg-yellow-200 inline-flex dark:bg-gray-900 dark:text-yellow-300 dark:hover:bg-gray-700"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Load More...
      </button>
    </>
  );
};

export default FetchingAndDeletingData;
