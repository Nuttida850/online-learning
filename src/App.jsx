import { Features } from "tailwindcss";
import "./App.css";
import Companies from "./components/Companies";
import Header from "./components/Header";
import Navbar from "./components/navbar";
import Skilline from "./components/Skilline";
import Software from "./components/Software";
import Feature from "./components/Feature";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Companies />
      <Software />
      <Skilline />
      <Feature />
    </>
  );
}

export default App;
