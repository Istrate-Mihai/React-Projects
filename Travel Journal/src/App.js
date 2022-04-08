import React from "react";
import Card from "./components/Card";
import Data from "./Data";
 
export default function App() {
  let myTravelData = Data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      {myTravelData}
    </div>
  );
}
