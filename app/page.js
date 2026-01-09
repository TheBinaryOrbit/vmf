import HeroSection from "../pages/Hero";
import Brand from "../components/Brand";
import HomeAboutUs from "../components/HomeAboutUs";
import ServicesPage from "../pages/ServicePage";
import Contact from "../components/Contact";
import TestimonialSection from "../components/TestimonialSection";
import FloatingButton from "@/components/FoatingButton";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function App() {
  return (
    <>
      <HeroSection />
      <HomeAboutUs />      
      <section className="bg-[#910606]">
        <WhyChooseUs />
      </section>
      <ServicesPage />
      <Brand />
      <TestimonialSection />
      <Contact />
      {/* <FloatingButton /> */}
    </>
  );
}