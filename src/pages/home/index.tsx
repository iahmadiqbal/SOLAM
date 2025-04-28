import SolarHeroSection from "../../components/home";
import EnergyAwareness from "../../components/home/EnergyAwareness";
import IntroSection from "../../components/home/IntroSection";
import KeyMetrics from "../../components/home/KeyMetrics";
import OurServices from "../../components/home/OurServices";
import ProfessionalTeam from "../../components/home/ProfessionalTeam";
import ProjectShowcase from "../../components/home/ProjectShowcase";

import WhyChooseSolar from "../../components/home/WhyChooseSolar";

const Home = () => {
  return (
    <>
      <SolarHeroSection />
      <IntroSection />
      <OurServices />
      <ProjectShowcase />
      <EnergyAwareness />
      <KeyMetrics />
      <WhyChooseSolar />
      <ProfessionalTeam />
    </>
  );
};

export default Home;
