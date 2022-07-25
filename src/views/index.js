import backgroundImage from "../assets/images/background_scale_1x.jpeg";
import topImage from "../assets/images/top_image_scale_1x.png";
import "../assets/App.css";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="backgroundImage w-fit h-screen flex flex-col items-center  space-5"
    >
      <img src={topImage} alt="" className="w-1/2 mt-8 " />
      <p className="text-3xl font-black text-yellow-700 mb-5">
        Get your free £10 now
      </p>
      <div className="w-1/2 flex items-center justify-between text-white text-7xl font-black">
        <p>01</p>
        <p>:</p>
        <p>25</p>
        <p>:</p>
        <p>12</p>
      </div>
      <div className="w-1/2 flex items-center justify-between font-bold mb-16">
        <p className="text-blue-300">Hours</p>
        <p className="text-green-400">Minutes</p>
        <p className="text-yellow-700">Seconds</p>
      </div>
      <button className="px-16 py-4 text-white font-black shadow-lg rounded bg-gradient-to-r from-blue-300 via-green-400 to-yellow-700 animate-bounce">
        Opt in
      </button>
    </div>
  );
}

export default App;
