import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Data from "./Data";

export default function App() {
  let myTravelData = Data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="main--container">
      <Header />
      {myTravelData}
    </div>
  );
}
