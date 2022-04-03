import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Cards'
import Navigation from '../components/Projects/NavgationBar'
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { AppProvider } from "../components/Projects/Context"

const Home = () => {
  return (
    <>
      <AppProvider>
        <Layout>
          <Section grid>
            <Hero />
            <BgAnimation />
          </Section>
          <Navigation />
          <Projects />
          <Technologies />
          <Timeline />
          <Acomplishments />
        </Layout>
      </AppProvider>
    </>

  );
};

export default Home;
