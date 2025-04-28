import SolarHeroSection from "../../components/home";
import EnergyAwareness from "../../components/home/EnergyAwareness";
import IntroSection from "../../components/home/IntroSection";
import KeyMetrics from "../../components/home/KeyMetrics";
import OurServices from "../../components/home/OurServices";
import ProjectShowcase from "../../components/home/ProjectShowcase";

const Home = () => {
  return (
    <>
      <SolarHeroSection />
      <IntroSection />
      <OurServices />
      <ProjectShowcase />
      <EnergyAwareness />
      <KeyMetrics />
    </>
  );
};

export default Home;
