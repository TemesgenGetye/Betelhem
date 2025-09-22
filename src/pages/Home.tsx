import Hero from "../components/Hero";
import Services from "../components/Services";
import CompanyLogos from "../components/CompanyLogos";
import Stats from "../components/Stats";
import CallToAction from "../components/CallToAction";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Stats />
      <Services />
      <CompanyLogos />
      <CallToAction />
      <Footer />
    </main>
  );
}
