import { FaYoutube } from "react-icons/fa";

const RenewableEnergyContainer = () => {
  const handleYoutubeClick = () => {
    window.open("https://youtu.be/XHOmBV4js_E?si=0ymrEHEOCZN0Xcce", "_blank");
  };

  return (
    <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-[url('/images/Renewable.jpeg')] bg-cover bg-center brightness-50"></div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
          Renewable and Sustainable <br /> Power Energy Sources
        </h1>
        <button
          onClick={handleYoutubeClick}
          className="text-[#F6A235] hover:text-[#E08F2E] transition duration-300 p-4"
          aria-label="Watch on YouTube"
        >
          <FaYoutube size={50} className="sm:size-12 md:size-15 lg:size-20" />
        </button>
      </div>
    </div>
  );
};

export default RenewableEnergyContainer;
