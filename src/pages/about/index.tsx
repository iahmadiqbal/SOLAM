import GreenTech from "../../components/about";
import RenewableEnergySources from "../../components/about/RenewableEnergySources";
import SolarEssentials from "../../components/about/SolarEssentials";
import SolarTeamWork from "../../components/about/SolarTeamWork";
import EnergyAwareness from "../../components/home/EnergyAwareness";
import Footer from "../../components/home/footer";
import KeyMetrics from "../../components/home/KeyMetrics";
import ProfessionalTeam from "../../components/home/ProfessionalTeam";
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
      <SolarTeamWork />
      <ProfessionalTeam />

      <Footer />
    </>
  );
};

export default About;
