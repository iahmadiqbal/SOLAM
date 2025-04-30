const SolarLeaders = () => {
  return (
    <div className="relative h-96 w-full">
      {/* Background Image with Darkness */}
      <img
        src="/images/solarinstallation.jpg"
        alt="Solar Installation"
        className="w-full h-full object-cover object-top brightness-30"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Our Team
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl font-normal mt-2">
          We Are Leaders in the Solar Industry
        </p>
      </div>
    </div>
  );
};

export default SolarLeaders;
