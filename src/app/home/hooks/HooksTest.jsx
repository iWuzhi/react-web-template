import React, { useState, useEffect } from "react";

/* eslint-disable */
function useFriendStatus() {
  const [online] = useState(true);
  return online;
}
export default function Example() {
  const [count, setCount] = useState(0);
  const isOnline = useFriendStatus();
  console.log(0);
  useEffect(() => {
    console.log("-=-=-0");
    document.title = count;
    return () => {
      console.log("end...0");
    };
  });
  
  console.log(1);
  useEffect(() => {
    console.log("-=-=-1");
    document.title = count;
    return () => {
      console.log("end...1");
    };
  });
  console.log(2);
  return (
    <div>
      <p>You clicked{count} times</p>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me-
        {String(isOnline)}
      </button>
    </div>
  );
}
