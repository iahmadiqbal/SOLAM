import GreenTech from "../../components/about";
import RenewableEnergySources from "../../components/about/RenewableEnergySources";
import SolarEssentials from "../../components/about/SolarEssentials";
import EnergyAwareness from "../../components/home/EnergyAwareness";
import KeyMetrics from "../../components/home/KeyMetrics";
import Testimonials from "./Ourtestimonials";

const About = () => {
  return (
    <>
      <GreenTech />
      <SolarEssentials />
      <EnergyAwareness />
      <KeyMetrics />
      <RenewableEnergySources />
      <Testimonials />
    </>
  );
};

export default About;
