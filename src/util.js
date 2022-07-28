export const calculateTimeLeft = (endTime) => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  
  const difference =
    new Date(`${year}-${month}-${day} ` + endTime) - currentDate;
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = {
      hours: "00",
      minutes: "00",
      seconds: "00",
      hidden: true,
    };
  }
  return timeLeft;
};
export const updatePixelRatio = (setPixelRatio) => {
   let pr = window.devicePixelRatio;
   matchMedia(`(resolution: ${pr}dppx)`).addEventListener(
     "change",
     updatePixelRatio,
     { once: true }
   );
   setPixelRatio(pr);
 };
