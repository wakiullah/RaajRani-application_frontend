import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import Banner from "@/components/HomePage/Banner";
import SortAbout from "@/components/HomePage/SortAbout";
import Team from "@/components/HomePage/Team";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <SortAbout/>
      <Team/>
      <Footer/>
    </>
  );
};
export default Home;
