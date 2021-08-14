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
    <div
      id="home"
      className="relative h-auto w-screen pb-12 lg:pb-20 bg-primary-dark"
    >
      <MobileHeader data={{ showMenu, toggleMenu }}></MobileHeader>
      <Navbar></Navbar>
      <MainContent></MainContent>
      <MobileMenu data={{ showMenu, toggleMenu }}></MobileMenu>
    </div>
  );
}

export default Home;
