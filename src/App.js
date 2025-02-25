import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <button onClick={() => setCount((c) => c - 1)}>Increment</button>
        <span>Count: {count}</span>
      </div>
    </div>
  );
}
