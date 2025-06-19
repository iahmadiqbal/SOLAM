import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

const MotionDiv = motion.div as React.FC<
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>;
const MotionH2 = motion.h2 as React.FC<
  React.HTMLAttributes<HTMLHeadingElement> & MotionProps
>;
const MotionP = motion.p as React.FC<
  React.HTMLAttributes<HTMLParagraphElement> & MotionProps
>;
const MotionImg = motion.img as React.FC<
  React.ImgHTMLAttributes<HTMLImageElement> & MotionProps
>;

const EnergyAwareness = ({
  heading = "Ecological Way",
  title = "Reshaping Energy for the Future",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  feature1Icon = "images/ReducedailyEnergy.png",
  feature1Title = "Reduce Your Daily Energy Use",
  feature1Text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  feature2Icon = "images/TheMostusedEnergysystem.png",
  feature2Title = "The Most Used Energy Systems",
  feature2Text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  mainImage = "images/EnergyReshapping.jpg",
}) => {
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
    <section className="flex flex-col md:flex-row items-start justify-between py-12 px-6 bg-[#FAF5EF]">
      <MotionDiv className="md:w-1/2 w-full text-left" {...motionProps}>
        <div className="w-9 border-t-2 border-[#F7A235] mb-4"></div>

        <MotionH2
          className="text-xl font-normal text-[#333] mb-4"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {heading}
        </MotionH2>

        <MotionP
          className="text-4xl font-bold text-[#333] mb-6"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </MotionP>

        <MotionP
          className="text-xl font-normal text-gray-600 mb-8"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {description}
        </MotionP>

        <div className="flex flex-col md:flex-row justify-between mb-8 space-y-6 md:space-y-0">
          <MotionDiv
            className="md:w-1/2 w-full"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="flex flex-col items-center">
              <MotionImg
                src={feature1Icon}
                alt="Feature 1 Icon"
                className="w-8 h-8 mb-2"
              />
              <h2 className="text-lg font-semibold text-center">
                {feature1Title.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>
            </span>
            <p className="text-normal text-1xl text-center">
              {feature1Text.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </MotionDiv>

          <MotionDiv
            className="md:w-1/2 w-full"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <span className="flex flex-col items-center">
              <MotionImg
                src={feature2Icon}
                alt="Feature 2 Icon"
                className="w-8 h-8 mb-2"
              />
              <h2 className="text-lg font-semibold text-center">
                {feature2Title.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>
            </span>
            <p className="text-sm text-center">
              {feature2Text.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </MotionDiv>
        </div>
      </MotionDiv>

      <MotionDiv className="md:w-1/2 w-full" {...motionImageProps}>
        <MotionImg
          src={mainImage}
          alt="Energy Systems"
          className="w-full h-auto object-cover"
        />
      </MotionDiv>
    </section>
  );
};

export default EnergyAwareness;
