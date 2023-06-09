import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import FizzBuzz from "./components/FizzBuzz";
import ListGroup from "./components/ListGroup";
import ListGroupAlt from "./components/ListGroup_alt";
import ModifyingObjects from "./components/ModifyingObjects";
import ModifyingArrays from "./components/ModifyingArrays";
import ModifyingArrayOfObjects from "./components/ModifyingArrayOfObjects";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import StateExc1 from "./components/StateExc1";
import StateExc2 from "./components/StateExc2";
import StateExc3 from "./components/StateExc3";
import StateExc4 from "./components/StateExc4";
import Form from "./components/Form";
import StateExc5 from "./components/StateExc5";
import Game from "./components/Game";
import ExpandableButton from "./components/ExpandableButton";
import UseEffect from "./components/UseEffect";
import ProductList from "./components/ProductList";
import FetchingAndDeletingData from "./components/FetchingAndDeletingData";

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

  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    console.log("From child...clicked");
    setVisible(!visible);
  };

  const [cartItems, setCartItems] = useState([
    "Ace Bandages",
    "Xbox Controller",
    "AMD Radeon RX 7900 XTX",
    "be quiet! Pure Wings 2 51.4 CFM 120 mm Fan",
    "Corsair RM1000x 1000 W 80+ Gold Certified Fully Modular ATX Power Supply",
    "Fractal Design North ATX Mid Tower Case",
    "ASRock Radeon RX 7900 XTX 24GB Radeon RX 7900 XTX 24 GB Video Card",
    "Western Digital Black SN770 1 TB M.2-2280 PCIe 4.0 X4 NVME Solid State Drive",
    "AMD Ryzen 9 5900X 3.7 GHz 12-Core Processor",
    "Gigabyte X570S AORUS ELITE AX ATX AM4 Motherboard",
    "NZXT Kraken X53 73.11 CFM Liquid CPU Cooler",
  ]);

  const handleClick = () => {
    setCartItems([]);
  };

  const [user, setUser] = useState({
    firstName: "Ace",
    lastName: "Ventura",
    address: {
      zip: 33312,
      city: "Broward",
      street: "2937 W Broward` Blvd",
    },
    favorite: {
      game: "Crash Bandicoot",
      food: "Orange Apples",
    },
    awake: true,
  });

  const handleSetUser = () => {
    console.log("From child...clicked handleSetUser");
    setUser({ ...user, favorite: { ...user.favorite, food: "Peaches" } });
  };

  const [option, setOption] = useState("");

  useEffect(() => {});

  return (
    <main>
      {/* <ListGroup
        items={places}
        heading="Popular Vacation Spots"
        onSelectItem={handleSelection}
      /> */}
      {/* <Alert visible={visible} setVisible={handleToggle} /> */}

      {/* TODO: NEVER Pass in setter method. */}
      {/* <Game user={user} setUser={handleSetUser} /> */}

      {/* <ListGroupAlt items={fruits} heading="Top Exotic Fruits" /> */}
      {/* <FizzBuzz /> */}

      {/* <Alert> */}
      {/* Hello <span>World!</span> */}

      {/* <ModifyingObjects /> */}
      {/* <ModifyingArrays /> */}
      {/* <ModifyingArrayOfObjects /> */}
      {/* <NavBar cartItemsCount={cartItems.length} /> */}
      {/* <Cart cartItems={cartItems} onClear={handleClick} /> */}
      {/* <StateExc1 /> */}
      {/* <StateExc2 /> */}
      {/* <StateExc3 /> */}
      {/* <StateExc4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        laboriosam, ipsum ab eum soluta nihil explicabo, praesentium numquam
        eaque fuga optio amet sequi consequuntur magni porro, est iusto dolores
        similique?
      </StateExc4> */}
      {/* <Form /> */}
      {/* <StateExc5 /> */}
      {/* <UseEffect /> */}
      {/* 
      <select
        onChange={(e) => {
          setOption(e.target.value);
        }}
      >
        <option value="">Pick an option</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <ProductList option={option} /> 
      */}
      <FetchingAndDeletingData />
    </main>
  );
}
