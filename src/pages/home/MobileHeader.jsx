function MobileHeader(props) {
  const { showMenu, toggleMenu } = props.data;
  return (
    <div className="flex lg:hidden justify-between p-4">
      <p className=""></p>
      <div className="relative flex flex-column flex-wrap justify-between h-9 w-9 z-10">
        <button
          className="absolute w-full h-full z-20 opacity-0 cursor-pointer"
          onClick={toggleMenu}
        ></button>
        <div
          className="bar"
          style={showMenu ? { transform: "rotate(45deg)" } : {}}
        ></div>
        <div className="bar" style={showMenu ? { opacity: 0 } : {}}></div>
        <div
          className="bar"
          style={showMenu ? { transform: "rotate(-45deg)" } : {}}
        ></div>
      </div>
    </div>
  );
}

export default MobileHeader;
