import NavBar from "./containers/Navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/type";
import Home from "./containers/HomePage/Home";
import Benefits from "./containers/Benefits";
import OurClasses from "./containers/OurClasses";
import Footer from "./containers/Footer";
import ContactUs from "./containers/ContactUs";


function App() {
  const  [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = () => {
      if(window.screenY===0)
      {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.screenY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="app bg-gray-20">
    <NavBar
    isTopOfPage={isTopOfPage}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage} />
    <Home setSelectedPage={setSelectedPage} />
    <Benefits setSelectedPage={setSelectedPage} />
    <OurClasses setSelectedPage={setSelectedPage} />
    <ContactUs setSelectedPage={setSelectedPage} />
    <Footer />
    </div>
  )
}

export default App
