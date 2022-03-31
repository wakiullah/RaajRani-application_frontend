import Contact from "@/components/Global/Contact";
import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import Portfolio from "@/components/Global/Portfolio";
import Testimonials from "@/components/Global/Testimonials";
import Banner from "@/components/HomePage/Banner";
import LeatestBlogs from "@/components/HomePage/LeatestBlogs";
import OurClints from "@/components/HomePage/OurClints";
import Services from "@/components/Services/Services";
import SortAbout from "@/components/HomePage/SortAbout";
import Team from "@/components/HomePage/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <SortAbout />
      <Services />
      <OurClints />
      <LeatestBlogs />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
    </div>
  );
};
export default Home;
