import AppComponentsShowcase from "@/components/LandingPage/AppComponentsShowcase/AppComponentsShowcase";
import FeaturesShowcase from "@/components/LandingPage/FeaturesShowcase/FeaturesShowcase";
import {
  CTA,
  FAQ,
  Footer,
  Header,
  Hero2,
  Testimonials1,
} from "@/components/landing-components";
import PainExplanation from "@/components/LandingPage/PainExplanation/PainExplanation";
import Marketing from "@/components/LandingPage/Marketing/Marketing";
import Pricing2 from "@/components/LandingPage/Pricing2";
import SampleAppShowcase from "@/components/LandingPage/SampleAppShowcase/SampleAppShowcase";

import "aos/dist/aos.css"; // Import AOS styles (you can customize the styles if needed)
import { defaultTestimonials } from "@/components/landing-components/Testimonials1/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero2 />
        <PainExplanation />
        <FeaturesShowcase />
        <AppComponentsShowcase topIndicatorText="App Components" />
        <SampleAppShowcase />
        <Pricing2 />
        <Marketing />

        <FAQ />
        <Testimonials1 testimonials={defaultTestimonials} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
