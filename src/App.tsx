import FizzBuzz from "./components/FizzBuzz";
import ListGroup from "./components/ListGroup";

export default function App() {
  const places: string[] = [
    "New York",
    "San Francisco",
    "Tokyo",
    "New Zealand",
    "Paris",
    "Amsterdam",
    "Bali",
    "New Mexico",
  ];

  return (
    <main>
      <ListGroup places={places} heading="Popular Vacation Spots" />
      <FizzBuzz />
    </main>
  );
}
