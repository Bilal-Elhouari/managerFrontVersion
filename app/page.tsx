import Header from './components/header';
import CTASection from './components/CTASection'
import StatsSection from './components/StatsSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import TeamsSection from './components/TeamsSection';
import Servive from './components/services';
import StatisticSection from './components/StatisticSection';



export default function Home() {
  return (
    <main>
      <Header />
      <CTASection/>
      <Servive/>
      <StatsSection/> 
      <StatisticSection />
      <FeatureSection/>
      <TeamsSection/>
      <Footer/>
  </main>
  );
}
