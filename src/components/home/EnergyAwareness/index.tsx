import { motion } from "framer-motion";

const EnergyAwareness = () => {
  const motionProps = {
    initial: { x: -200 },
    animate: { x: 0 },
    transition: { duration: 0.6 },
  };

  const motionImageProps = {
    initial: { x: 200 },
    animate: { x: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <section className="flex flex-col md:flex-row items-start justify-between py-12 px-6 bg-[#FAF5EF]">
        {/* Content section */}
        <motion.div className="md:w-1/2 w-full text-left" {...motionProps}>
          <div className="w-9 border-t-2 border-[#F7A235] mb-4"></div>

          <motion.h2
            className="text-xl font-normal text-[#333] mb-4"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ecological Way
          </motion.h2>

          <motion.p
            className="text-4xl font-bold text-[#333] mb-6"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Reshaping Energy for <br /> the Future
          </motion.p>

          <motion.p
            className="text-xl font-normal text-gray-600 mb-8"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>

          <div className="flex flex-col md:flex-row justify-between mb-8 space-y-6 md:space-y-0">
            <motion.div
              className="md:w-1/2 w-full"
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="flex flex-col items-center">
                <img
                  src="images/ReducedailyEnergy.png"
                  alt="Energy Icon"
                  className="w-8 h-8 mb-2"
                />
                <h2 className="text-lg font-semibold text-center">
                  Reduce Your Daily <br />
                  Energy Use
                </h2>
              </span>
              <p className="text-normal text-1xl text-center">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
            </motion.div>

            <motion.div
              className="md:w-1/2 w-full"
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <span className="flex flex-col items-center">
                <img
                  src="images/TheMostusedEnergysystem.png"
                  alt="Energy Icon"
                  className="w-8 h-8 mb-2"
                />
                <h2 className="text-lg font-semibold text-center">
                  The Most Used <br />
                  Energy Systems
                </h2>
              </span>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="md:w-1/2 w-full" {...motionImageProps}>
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
