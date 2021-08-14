import { useState } from "react";
import MobileHeader from "./MobileHeader";
import MainContent from "./MainContent";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

function Home() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div id="home" className="relative h-screen w-screen bg-red-200">
      <MobileHeader data={{ showMenu, toggleMenu }}></MobileHeader>
      <Navbar></Navbar>
      <MainContent></MainContent>
      <MobileMenu data={{ showMenu, toggleMenu }}></MobileMenu>
    </div>
  );
}

export default Home;
