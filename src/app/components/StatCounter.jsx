"use client";

import CountUp from "react-countup";

export default function Counter({ number }) {
  return (
    <div className="number">
      <CountUp duration={2} className="counter" end={number} start={0} />
    </div>
  );
}
