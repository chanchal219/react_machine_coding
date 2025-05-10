import { useState, useEffect } from "react";

const AutomaticOtpGenerator = () => {
  const [value, setValue] = useState("");
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    generateOtp();
    const Interval_id = setInterval(() => {
      setCounter((prev) => (prev > 0 ? prev - 1 : prev));
    }, 1000);
    const interval_id_2 = setInterval(() => {
      generateOtp();
      setCounter(10);
    }, 10000);
    return () => {
      clearInterval(Interval_id);
      clearInterval(interval_id_2);
    };
  }, []);

  const generateOtp = () => {
    setValue(Math.floor(Math.random() * 900 + 100));
  };

  return (
    <>
      <h1> Automatic OTP Generator</h1>
      <h2>Your otp is {value}</h2>
      <h3>Next Otp generate in {counter}</h3>
    </>
  );
};

export {AutomaticOtpGenerator};
