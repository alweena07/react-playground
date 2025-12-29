import { Button } from "@/shared/components/Button";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const resetCounter = () => {
    setCount(0);
  };

  const incrementCounter = () => {
    setCount(count + 1);
  }

  const decrementCounter = () => {
    if (count === 0) return;
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter Component</h1>
      <div>
        <h2>Counter Value: {count}</h2>
      </div>
      <div style={{ marginTop:'1rem', display: 'flex', gap: '0.5rem' }}>
        <Button onClick={decrementCounter}>-</Button>
        <Button onClick={resetCounter}>Reset</Button>
        <Button onClick={incrementCounter}>+</Button>
      </div>
    </div>
  );
}