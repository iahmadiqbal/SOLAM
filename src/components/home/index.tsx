import { useState } from "react";

const SolarHeroSection = () => {
  const [clicked, setClicked] = useState(false);

  const handleBoxClick = () => {
    setClicked(true);
  };

  return (
    <section className="relative py-40 px-6 text-left bg-cover bg-center bg-no-repeat bg-[url('images/SolarHeroSection.jpg')]">
      <div className="absolute inset-0"></div>
      <div className="relative flex flex-col items-start justify-center h-full pl-6 md:pl-12">
        <p className="text-xl md:text-2xl font-bold text-[#FFFFFF] mb-4">
          Solar Panel Installation Solution
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-8xl text-[#FFFFFF] mb-2">
          Powering Homes
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-[#FFFFFF]">
          <div className="text-[#FFFFFF] font-semibold">With Solar Panels</div>
        </h1>

        <button className="self-start bg-[#F6A235] hover:bg-[#9A9A9A] text-white px-8 py-4 transition duration-300 mt-6">
          Discover More
        </button>
      </div>
      <div
        onClick={handleBoxClick}
        className={`absolute left-1/2 transform -translate-x-1/2 translate-y-10 w-[80%] sm:w-[60%] md:w-[700px] h-40 text-[#FFFFFF] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold flex items-center justify-center rounded-2xl shadow-2xl border border-white cursor-pointer transition duration-300 ${
          clicked ? "hover:bg-[#F6A235]" : "bg-transparent"
        }`}
      >
        <span className="tracking-[0.7em]">ENERGY</span>
      </div>
    </section>
  );
};

export default SolarHeroSection;
