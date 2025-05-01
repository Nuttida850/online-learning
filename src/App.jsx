import { Features } from "tailwindcss";
import "./App.css";
import Companies from "./components/Companies";
import Header from "./components/Header";
import Navbar from "./components/navbar";
import Skilline from "./components/Skilline";
import Software from "./components/Software";
import Feature from "./components/Feature";
import Integrations from "./components/Integrations";
import Testimonial from "./components/Testimonial";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Companies />
      <Software />
      <Skilline />
      <Feature />
      <Integrations />
      <Testimonial />
      <News />
      <Footer />
    </>
  );
}

export default App;
