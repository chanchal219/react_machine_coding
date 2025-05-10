import "./Trafficlight.css";
import { useState, useEffect } from "react";

const Trafficlight = () => {
  const [light, setLight] = useState("red");

  useEffect(() => {
    setTimeout(() => {
      if (light == "red") return setLight("yellow");
      else if (light == "yellow") return setLight("green");
      return setLight("red");
    }, 1000);
  }, [light]);

  return (
    <>
      <div>
      <h1>Traffic Light</h1>
        <div className={`circle ${light == "red" ? "red" : ""}`}> red</div>
        <div className={`circle ${light == "yellow" ? "yellow" : ""}`}>
          yellow
        </div>
        <div className={`circle ${light == "green" ? "green" : ""}`}>green</div>
      </div>
    </>
  );
};
export { Trafficlight };
