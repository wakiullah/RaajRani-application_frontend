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

const Home = ({ services }) => {
  console.log(process.env.GITHUB_SECRET);
  return (
    <div>
      <Banner />
      <SortAbout />
      <Services services={services} />
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

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/service");
  const services = await res.json();

  return {
    props: {
      services,
    },
  };
};
