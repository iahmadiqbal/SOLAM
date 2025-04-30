const NeedAssistance = () => {
  return (
    <div className="relative h-96 w-full">
      <img
        src="/images/solarinstallation.jpg"
        alt="Solar Installation"
        className="w-full h-full object-cover object-top brightness-30"
      />

      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold shadow-lg">
          Contact
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl font-normal mt-2 shadow-md">
          Need Assistance or Have a Question?
        </p>
      </div>
    </div>
  );
};

export default NeedAssistance;
