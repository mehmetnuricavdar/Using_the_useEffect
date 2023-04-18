import React, { useEffect, useState } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    document.title = toggle ? "Welcome to Littel Lemon" : "Using the useEffect";
  }, []);

  return (
    <div>
      <h1>Using the UseEffect hook</h1>
      <button onClick={clickHandler}>Toggle Message</button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  );
}
