import React from "react";

const MapExample = () => {
  const numbers = [1, 2, 3, 4, 5];

  const doubledNumbers = numbers.map((number) => number * 2);
  console.log("Original Numbers:", numbers);
  console.log("Doubled Numbers:", doubledNumbers);

  return (
    <div>
      <p>map is successfull</p>
    </div>
  );
};

export default MapExample;
