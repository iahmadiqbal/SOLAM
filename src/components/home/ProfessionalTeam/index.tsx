import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ProfessionalTeam = () => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      {/* Divider Above Quality Professionals */}
      <hr
        className="w-16 mx-auto mb-4"
        style={{ borderTopColor: "#F7A235", borderTopWidth: "2px" }}
      />

      <h2 className="text-3xl font-semibold text-center mb-8">
        Quality Professionals
      </h2>
      <h3 className="text-2xl font-medium text-center mb-12">Our Team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="w-full h-[400px] mb-4 overflow-hidden border-b-4 border-yellow-500">
            <img
              src="images/Robertsmith.jpg"
              alt="Robert Smith"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white p-4 rounded-lg mx-4 shadow-md mt-4">
            <h3 className="text-xl font-semibold">Robert Smith</h3>
            <p className="text-gray-600">Director</p>

            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FAF5EF] flex items-center justify-center text-blue-500 hover:bg-[#F7A235]  transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FAF5EF] flex items-center justify-center text-blue-400 hover:bg-[#F7A235] transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FAF5EF] flex items-center justify-center text-blue-700 hover:bg-[#F7A235] transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="w-full h-[400px] mb-4 overflow-hidden border-b-4 border-yellow-500">
            <img
              src="images/johnAlbert.jpg"
              alt="John Albert"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white p-4 rounded-lg mx-4 shadow-md mt-4">
            <h3 className="text-xl font-semibold">John Albert</h3>
            <p className="text-gray-600">Engineer</p>

            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FAF5EF] flex items-center justify-center text-blue-500 hover:bg-[#F7A235] transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FAF5EF] flex items-center justify-center text-blue-400 hover:bg-[#F7A235] transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FAF5EF] flex items-center justify-center text-blue-700 hover:bg-[#F7A235] transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="w-full h-[400px] mb-4 overflow-hidden border-b-4 border-yellow-500">
            <img
              src="images/MikeHardson.jpg"
              alt="Mike Hardson"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white p-4 rounded-lg mx-4 shadow-md mt-4">
            <h3 className="text-xl font-semibold">Mike Hardson</h3>
            <p className="text-gray-600">Installer</p>

            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FAF5EF] flex items-center justify-center text-blue-500 hover:bg-[#F7A235]  transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FAF5EF] hover:bg-[#F7A235] flex items-center justify-center text-blue-400  transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FAF5EF] flex items-center justify-center text-blue-700 hover:bg-[#F7A235] transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTeam;
