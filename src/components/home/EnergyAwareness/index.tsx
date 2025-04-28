import { motion } from "framer-motion";

const EnergyAwareness = () => {
  const motionProps = {
    initial: { x: -200 }, // Content starts from left
    animate: { x: 0 }, // Moves to its original position
    transition: { duration: 0.6 }, // Same duration for both
  };

  const motionImageProps = {
    initial: { x: 200 }, // Image starts from right
    animate: { x: 0 }, // Image moves to its original position
    transition: { duration: 0.6 }, // Same duration for both
  };

  return (
    <>
      <section className="flex flex-col md:flex-row items-start justify-between py-12 px-6 bg-[#FAF5EF]">
        {/* Content section */}
        <motion.div
          className="md:w-1/2 text-left"
          {...motionProps} // Apply motion props to content section
        >
          <div className="w-9 border-t-2 border-[#F7A235] mb-4"></div>

          <motion.h2
            className="text-xl font-normal text-[#333] mb-4"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }} // Faster animation for heading
          >
            Ecological Way
          </motion.h2>

          <motion.p
            className="text-4xl font-bold text-[#333] mb-6"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }} // Faster animation for paragraph
          >
            Reshaping Energy for <br /> the Future
          </motion.p>

          <motion.p
            className="text-xl font-normal text-gray-600 mb-8"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }} // Faster animation for paragraph
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>

          <div className="flex flex-col md:flex-row justify-between mb-8 space-y-6 md:space-y-0">
            <motion.div
              className="md:w-1/2 w-full"
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }} // Faster animation for content block
            >
              <span className="flex items-center">
                <img
                  src="images/ReducedailyEnergy.png"
                  alt="Energy Icon"
                  className="w-8 h-8 mr-2"
                />
                <h2 className="text-lg font-semibold">
                  Reduce Your Daily Energy Use
                </h2>
              </span>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
            </motion.div>

            <motion.div
              className="md:w-1/2 w-full"
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, delay: 1 }} // Faster animation for content block
            >
              <span className="flex items-center">
                <img
                  src="images/ReducedailyEnergy.png"
                  alt="Energy Icon"
                  className="w-8 h-8 mr-2"
                />
                <h2 className="text-lg font-semibold">
                  Reduce Your Daily Energy Use
                </h2>
              </span>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Image section */}
        <motion.div
          className="md:w-1/2 w-full"
          {...motionImageProps} // Apply motion props to image section (move right to left)
        >
          <img
            src="images/EnergyReshapping.jpg"
            alt="Energy Systems"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </section>
    </>
  );
};

export default EnergyAwareness;
