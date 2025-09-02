import React, { useEffect, useState } from "react";

export default function EX05() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div >
      <h2>Bộ đếm thời gian</h2>
      <p>Giá trị: {count}</p>
    </div>
  );
}