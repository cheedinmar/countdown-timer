import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { pageLoaded } from "../controller/actions";
import { getLoading, getCountdown } from "../controller/selectors";
import backgroundImage from "../assets/images/background_scale_1x.jpeg";
import topImage from "../assets/images/top_image_scale_1x.png";
import "../assets/App.css";
import useCountdown from "./useCountdown";

function App() {
  const dispatch = useDispatch();
  const countdown = useSelector(getCountdown);
  const loading = useSelector(getLoading);

  const endTime = new Date().getTime() + 5180000; // 2 minutes
  const [timeLeft, setEndTime] = useCountdown(endTime);
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;

  useEffect(() => {
    dispatch(pageLoaded);
  }, []);
  useEffect(() => {
    console.log(countdown);
  });

  return (
    <div>
      {!countdown  ? (
        <div
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className="backgroundImage w-fit h-screen flex flex-col items-center justify-center"
        >
          <p className="text-white text-5xl font-black">Loading...</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className="backgroundImage w-fit h-screen flex flex-col items-center  space-5"
        >
          <img src={topImage} alt="" className="w-1/2 mt-8 " />
          <p className="text-3xl font-black text-yellow-700 mb-5">
            Get your free £{countdown.cash_value} now
          </p>
          <div className="w-1/2 flex items-center justify-between mb-16 ">
            <div className="flex flex-col items-center">
              <span className="text-white text-7xl font-black">{hours}</span>
              <span className="font-bold text-blue-300">Hours</span>
            </div>
            <p className="text-white text-7xl font-black">:</p>
            <div className="flex flex-col items-center">
              <span className="text-white text-7xl font-black">{minutes}</span>
              <span className="font-bold text-green-400">Minutes</span>
            </div>
            <p className="text-white text-7xl font-black">:</p>
            <div className="flex flex-col items-center">
              <span className="text-white text-7xl font-black">{seconds}</span>
              <span className="font-bold text-yellow-700">Seconds</span>
            </div>
          </div>
          <a
            href={countdown.URL}
            target="_blank"
            className="px-16 py-4 text-white font-black shadow-lg rounded bg-gradient-to-r from-blue-300 via-green-400 to-yellow-700 animate-bounce"
          >
            Opt in
          </a>
          <p className="font-black text-yellow-500 text-5xl">{}</p>
        </div>
      )}
    </div>
  );
}

export default App;
