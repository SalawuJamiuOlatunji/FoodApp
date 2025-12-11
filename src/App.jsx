import { useState } from "react";
import Search from "./components/Search";
import Foodlist from "./components/Foodlist";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";
import Button from "./components/Button";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  const [bg, setBg] = useState("white");
  return (
    <div
      style={{
        backgroundColor: bg,
        border: "1px solid red",
      }}
    >
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <Foodlist setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>

        <InnerContainer>
          <FoodDetail foodId={foodId} foodData={foodData} />
        </InnerContainer>
        <Button setBg={setBg} />
      </Container>
    </div>
  );
}
