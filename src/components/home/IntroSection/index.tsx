import { FiSettings } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion

const IntroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-12 px-6 space-y-8 lg:space-y-0 mt-5">
      {/* Animate the image using motion.div */}
      <motion.div
        className="relative w-full lg:w-1/2"
        initial={{ x: -100 }} // Start from the left
        animate={{ x: 0 }} // Move to its normal position
        transition={{ duration: 0.5 }} // Faster animation (0.5 seconds)
      >
        <img
          src="images/introsection.jpg"
          alt="Experience"
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute bottom-0 left-0 bg-yellow-400 text-white px-3 py-4 w-44 h-32">
          <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
            12<sup className="text-lg">+</sup> <br />
            Years of <br />
            Experience
          </h2>
        </div>
      </motion.div>

      {/* Animate the content using motion.div */}
      <motion.div
        className="w-full lg:w-1/2 lg:pl-12"
        initial={{ x: 100 }} // Start from the right
        animate={{ x: 0 }} // Move to its normal position
        transition={{ duration: 0.5 }} // Faster animation (0.5 seconds)
      >
        <div className="w-10 py-1 bg-amber-500">
          <hr className="border-t" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mt-4 text-gray-600">
          Our Introduction
        </h3>
        <h4 className="text-3xl sm:text-4xl md:text-5xl mt-4 text-[#1A1819] font-bold">
          Energy Source for a <br /> Better Life
        </h4>
        <p className="mt-4 text-sm sm:text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Donec scelerisque
          dolor id nunc dictum.
        </p>
        <hr className="my-4 border-t-2 border-gray-300" />
        <div className="flex items-center space-x-2 mt-4">
          <FiSettings className="w-5 h-5 text-gray-600" />
          <h5 className="text-base sm:text-lg font-medium text-gray-700">
            Suspen disse suscipit sagittis leo.
          </h5>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <FiSettings className="w-5 h-5 text-gray-600" />
          <p className="text-sm sm:text-base text-gray-700">
            Lorem Ipsum generators on the tend.
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <FiSettings className="w-5 h-5 text-gray-600" />
          <p className="text-sm sm:text-base text-gray-700">
            Morbi suscipit scelerisque sapien eget
          </p>
        </div>
        <hr className="my-4 border-t-2 border-gray-300" />
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="mt-6 flex justify-start">
            <button className="bg-[#FDC700] text-white px-6 py-1.5 rounded-md hover:bg-[#3C3C3C] transition-colors text-sm">
              Learn More
            </button>
          </div>

          <div className="mt-6 text-right sm:text-left font-[Helvetica] text-[16px] leading-6 text-[#545454]">
            <p className="text-base sm:text-lg font-normal">
              Have any questions?
            </p>
            <p className="text-xl sm:text-2xl font-normal flex items-center mt-2">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF5EF] mr-2">
                <FaPhoneAlt className="text-[#545454]" />
              </span>
              (123) 456-7890
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroSection;
