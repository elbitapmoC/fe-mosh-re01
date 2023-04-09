import Alert from "./components/Alert";
import Button from "./components/Button";
import FizzBuzz from "./components/FizzBuzz";
import ListGroup from "./components/ListGroup";
import ListGroupAlt from "./components/ListGroup_alt";

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

  const fruits: string[] = [
    "Chom Chom (Rambutan)",
    "Durian",
    "Mangosteen",
    "Longan",
    "Persimmon",
    "Sapodilla",
    "Jackfruit",
  ];

  const handleSelection = (item: string) => {
    console.log(item);
  };

  return (
    <main>
      <ListGroup
        items={places}
        heading="Popular Vacation Spots"
        onSelectItem={handleSelection}
      />
      <ListGroupAlt items={fruits} heading="Top Exotic Fruits" />
      {/* <FizzBuzz /> */}
      {/* 
      <Alert>
        Hello <span>World!</span>
      </Alert> 
      <Button /> 
      */}
    </main>
  );
}
