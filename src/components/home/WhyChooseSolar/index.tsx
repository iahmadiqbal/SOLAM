import { FaCog } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChooseSolar = () => (
  <div className="bg-gray-100 py-12 px-0">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between space-y-6 md:space-y-0">
      <div className="flex-1 bg-black text-white flex flex-col justify-center h-full md:h-[500px] p-4 md:p-6 lg:p-8 xl:p-10">
        <div className="w-8 h-1 bg-yellow-400 mb-4"></div>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-normal mb-2 text-left"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Benefits
        </motion.h2>

        <motion.h3
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-300 mb-4 text-left"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Solar <br />
          Panel Solution?
        </motion.h3>

        <motion.p
          className="text-lg text-gray-400 mb-6 text-left"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </motion.p>

        <motion.div
          className="space-y-4"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center">
            <FaCog className="text-yellow-400 mr-3" size={24} />
            <span>Suspe ndisse suscipit sagittis leo.</span>
          </div>
          <div className="flex items-center">
            <FaCog className="text-yellow-400 mr-3" size={24} />
            <span>Lorem Ipsum generators on the tend.</span>
          </div>
          <div className="flex items-center">
            <FaCog className="text-yellow-400 mr-3" size={24} />
            <span>Morbi suscipit scelerisque sapien eget.</span>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 flex justify-center items-center bg-white h-full md:h-[500px]">
        <img
          src="images/EnergyExchange.jpeg"
          alt="Benefits"
          className="w-full h-full object-cover rounded-none shadow-none"
        />
      </div>
    </div>
  </div>
);

export default WhyChooseSolar;
