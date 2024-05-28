import React, { useEffect, useState, useCallback } from "react";

function StateManagement() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // Dependencies array

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        className="border border-s-violet-300 bg-amber-400 rounded-full w-20"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <div className="flex flex-col p-4">
        <button
          className="border border-s-violet-300 bg-amber-400 rounded-full w-20"
          onClick={handleClick}
        >
          Click me
        </button>
        <button
          className="border border-s-violet-300 bg-amber-400 rounded-full w-20"
          onClick={() => setCount(count + 1)}
        >
          Increase count
        </button>
      </div>
    </div>
  );
}
export default StateManagement;
