import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { pageLoaded } from "../controller/actions";
import { getCountdown } from "../controller/selectors";
import backgroundImage1x from "../assets/images/background_scale_1x.jpeg";
import backgroundImage2x from "../assets/images/background_scale_2x.jpeg";
import topImage1x from "../assets/images/top_image_scale_1x.png";
import topImage2x from "../assets/images/top_image_scale_2x.png";
import { calculateTimeLeft, updatePixelRatio } from "../util";
import "../assets/App.css";

function App() {
  const dispatch = useDispatch();
  const countdown = useSelector(getCountdown);
   let [pixelRatio, setPixelRatio] = useState(null);
  let endTime = countdown?.countdown_duration;
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endTime));
  useEffect(() => {
   setTimeout(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);
  });
  useEffect(() => {
    dispatch(pageLoaded);
  }, []);
    useEffect(() => {
      updatePixelRatio(setPixelRatio);
    }, []);

  return (
    <div>
      {countdown == null ? (
        <div
          style={{
            backgroundImage:
              pixelRatio >=2
                ? `url(${backgroundImage2x})`
                : `url(${backgroundImage1x})`,
          }}
          className="backgroundImage w-fit h-screen flex flex-col items-center justify-center"
        >
          <p className="text-white text-5xl font-black">Loading...</p>
        </div>
      ) : (
        <div
          style={{
            backgroundImage:
              pixelRatio >= 2
                ? `url(${backgroundImage2x})`
                : `url(${backgroundImage1x})`,
          }}
          className="backgroundImage w-fit h-screen flex flex-col items-center justify-center  lg:space-y-5 space-y-8"
        >
          {!timeLeft.hidden && (
            <img
              src={pixelRatio >= 2 ? topImage2x : topImage1x}
              alt=""
              className="lg:w-1/4 w-2/3 lg:mt-8 mt-0 "
            />
          )}
          {!timeLeft.hidden && (
            <p className="text-3xl md:text-4xl font-bold text-yellow-700 mb-5">
              Get your free{" "}
              <span className="text-green-500 text-4xl font-black">
                £{countdown.cash_value}
              </span>{" "}
              now
            </p>
          )}
          <div
            className={
              "lg:w-1/2 w-4/5 md:w-3/5 flex lg:items-center items-start justify-between "
            }
          >
            <div className="flex flex-col items-center">
              <span className="text-white md:text-5xl text-4xl lg:text-7xl font-black">
                {timeLeft.hours}
              </span>
              <span className="font-bold md:text-base text-xs text-blue-300">
                Hours
              </span>
            </div>
            <p className="text-white md:text-5xl text-4xl lg:text-7xl font-black">
              :
            </p>
            <div className="flex flex-col items-center">
              <span className="text-white md:text-5xl text-4xl lg:text-7xl font-black">
                {timeLeft.minutes}
              </span>
              <span className="font-bold md:text-base text-xs text-green-400">
                Minutes
              </span>
            </div>
            <p className="text-white md:text-5xl text-4xl lg:text-7xl font-black">
              :
            </p>
            <div className="flex flex-col items-center">
              <span className="text-white md:text-5xl text-4xl lg:text-7xl font-black">
                {timeLeft.seconds}
              </span>
              <span className="font-bold md:text-base text-xs text-yellow-700">
                Seconds
              </span>
            </div>
          </div>
          <div className="h-10"></div>
          {!timeLeft.hidden && (
            <a
              href={countdown.URL}
              target="_blank"
              rel="noreferrer"
              className="px-16 py-4 text-white font-black shadow-lg rounded bg-gradient-to-r from-blue-300 via-green-400 to-yellow-700 animate-bounce"
            >
              Opt in
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
