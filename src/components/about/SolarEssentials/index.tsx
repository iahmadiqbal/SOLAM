const SolarEssentials = () => {
  return (
    <div className="flex flex-wrap justify-between gap-8 p-8">
      {/* پہلا کارڈ */}
      <div className="w-full md:w-[48%] lg:w-[30%]">
        <img
          src="images/Renewablesource.jpg"
          alt="Renewable Source"
          className="w-full h-48 object-cover shadow-lg rounded-none"
        />
        <div className="p-6 bg-[#FAF5EF]">
          <h3 className="text-xl font-semibold mt-4">Renewable Source</h3>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec mattis, dapibus leo.
          </p>
        </div>
      </div>

      {/* دوسرا کارڈ */}
      <div className="w-full md:w-[48%] lg:w-[30%]">
        <img
          src="images/Easyinstalltioncompnent.jpg"
          alt="Easy Installation"
          className="w-full h-48 object-cover shadow-lg rounded-none"
        />
        <div className="p-6 bg-[#FAF5EF]">
          <h3 className="text-xl font-semibold mt-4">Easy Installation</h3>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec mattis, dapibus leo.
          </p>
        </div>
      </div>

      {/* تیسرا کارڈ */}
      <div className="w-full md:w-[48%] lg:w-[30%]">
        <img
          src="images/lowmaintance.jpg"
          alt="Low Maintenance"
          className="w-full h-48 object-cover shadow-lg rounded-none"
        />
        <div className="p-6 bg-[#FAF5EF]">
          <h3 className="text-xl font-semibold mt-4">Low Maintenance</h3>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec mattis, dapibus leo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolarEssentials;
