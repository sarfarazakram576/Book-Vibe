import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <>
      <div className="max-w-full  mx-auto">
        <div className="sm:container mx-auto mb-20">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
