import Image from "next/image";
import Header from './components/header';
import CTASection from './components/CTASection'
import StatsSection from './components/StatsSection';
import OffreSection from './components/OffreSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import TeamsSection from './components/TeamsSection';
import DataTable from './components/DataTable';

export default function Home() {
  return (
    <main>
 <Header />

  <CTASection/>
  <StatsSection/>
  <OffreSection/>
  <FeatureSection/>
  <TeamsSection/>
  <DataTable/>
  <Footer/>

    

  </main>
  );
}
