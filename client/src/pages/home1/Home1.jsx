import Featured from "../../components/featured1/Featured";
import FeaturedProperties from "../../components/featuredProperties1/FeaturedProperties";
import Footer from "../../components/footer1/Footer";
import Header from "../../components/header1/Header";
import MailList from "../../components/mailList1/MailList";
import Navbar from "../../components/navbar1/Navbar";
import PropertyList from "../../components/propertyList1/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
