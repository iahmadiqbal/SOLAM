import { FiArrowRight } from "react-icons/fi";

const ProjectShowcase = () => {
  return (
    <section className="bg-[#FAF5EF] py-12 mt-[8rem]">
      <div className="max-w-6xl mx-auto px-6 text-left mb-12">
        <div className="w-4 h-1 bg-[#F6A235] my-4"></div>
        <p className="text-sm uppercase tracking-widest">Recent Projects</p>
        <h1 className="text-4xl font-bold mt-2">Latest Case Studies</h1>
      </div>

      <div className="w-full flex flex-wrap">
        {/* Image 1 */}
        <div className="relative group w-full md:w-1/4 h-80 overflow-hidden">
          <img
            src="images/roof.jpg"
            alt="Tile & Metal Roof"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute bottom-0 left-0 w-full text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black via-black to-transparent">
            <div className="w-8 h-1 bg-[#F6A235] my-4"></div>
            <h2 className="text-lg font-normal">Installations</h2>
            <p className="font-bold text-2xl">
              Tile & Metal Roof <br /> Installations
            </p>
            <div className="flex items-center mt-4">
              <div className="bg-yellow-500 text-white rounded-full p-3 mr-3 hover:bg-yellow-600 cursor-pointer transition-all duration-300">
                <FiArrowRight className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative group w-full md:w-1/4 h-80 overflow-hidden">
          <img
            src="images/solarinspection.jpg"
            alt="Commercial Solar"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute bottom-0 left-0 w-full text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black via-black to-transparent">
            <div className="w-8 h-1 bg-[#F6A235] my-4"></div>
            <h2 className="text-lg font-normal">Consulting</h2>
            <p className="font-bold text-2xl">
              Commercial Solar <br /> Inspections
            </p>
            <div className="flex items-center mt-4">
              <div className="bg-yellow-500 text-white rounded-full p-3 mr-3 hover:bg-yellow-600 cursor-pointer transition-all duration-300">
                <FiArrowRight className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative group w-full md:w-1/4 h-80 overflow-hidden">
          <img
            src="images/solarResearchDeveloperment.jpg"
            alt="Solar Research"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute bottom-0 left-0 w-full text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black via-black to-transparent">
            <div className="w-8 h-1 bg-[#F6A235] my-4"></div>
            <h2 className="text-lg font-normal">Case Studies</h2>
            <p className="font-bold text-2xl">Solar Research Development</p>
            <div className="flex items-center mt-4">
              <div className="bg-yellow-500 text-white rounded-full p-3 mr-3 hover:bg-yellow-600 cursor-pointer transition-all duration-300">
                <FiArrowRight className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Image 4 */}
        <div className="relative group w-full md:w-1/4 h-80 overflow-hidden">
          <img
            src="images/solarpanelinstallation.jpg"
            alt="Solar Panel"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute bottom-0 left-0 w-full text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black via-black to-transparent">
            <div className="w-8 h-1 bg-[#F6A235] my-4"></div>
            <h2 className="text-lg font-semibold">Installations</h2>
            <p className="font-bold text-2xl">
              Solar Panel <br /> Installation
            </p>
            <div className="flex items-center mt-4">
              <div className="bg-yellow-500 text-white rounded-full p-3 mr-3 hover:bg-yellow-600 cursor-pointer transition-all duration-300">
                <FiArrowRight className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
