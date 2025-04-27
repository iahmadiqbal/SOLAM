const OurServices = () => {
  return (
    <div className="space-y-10 px-4 sm:px-8 lg:px-16">
      <div className="text-center">
        <p className="text-gray-500 text-sm">What we do</p>
        <h1 className="text-3xl font-bold">Our Services</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center bg-gray-50 p-6 border-4 border-gray-50 shadow-lg">
          <div className="w-full h-64 mb-4 overflow-hidden relative">
            <img
              src="/images/solarTechnology.jpg"
              alt="Solar Technology"
              className="w-full  object-cover"
            />
            <div className="absolute top-47 right-5 z-10">
              <img src="/images/icon-1.png" alt="Icon" className="w-16 h-16" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Solar Technology</h3>
            <div className="w-8 text-[#F6A235] mt-5 border-t-2 mb-6"></div>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pul leo.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-50 p-6 border-4 border-gray-50 shadow-lg">
          <div className="w-full h-64 mb-4 overflow-hidden relative">
            <img
              src="/images/solarinstallation.jpg"
              alt="Solar Installation"
              className="w-full  object-cover"
            />
            <div className="absolute top-47 right-5 z-10">
              <img src="/images/icon-2.png" alt="Icon" className="w-16 h-16" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Solar Installation</h3>
            <div className="w-8 text-[#F6A235] mt-5 border-t-2 mb-6"></div>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pul leo.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-50 p-6 border-4 border-gray-50 shadow-lg">
          <div className="w-full h-64 mb-4 overflow-hidden relative">
            <img
              src="/images/solarEquipment.jpg"
              alt="Solar Equipment"
              className="w-full  object-cover"
            />
            <div className="absolute top-47 right-5 z-10">
              <img src="/images/icon-3.png" alt="Icon" className="w-16 h-16" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Solar Equipment</h3>
            <div className="w-8 text-[#F6A235] mt-5 border-t-2 mb-6"></div>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pul leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
