import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [num, setNum] = useState(0);
  
  useEffect(() => {
    // this useEffect will render evertime whenever there is any change in my app component
    alert("i am clicked")
  }, []) 
  // now if we we provide this empty array than this useEffect will run one time after rendering 

  function plusOne() {
    setNum(num + 1);
  }
  return (
    <div>
      <button onClick={plusOne} >Click me {num}</button>
    </div>
  );
}
