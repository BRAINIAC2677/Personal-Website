import menuData from "./menuData";

function MobileMenu(props) {
  const { showMenu, toggleMenu } = props.data;
  const menuItems = menuData.map((item, index) => {
    return (
      <li key={index} className="p-3 list-none">
        <a className="menu-items" href={item.href} onClick={toggleMenu}>
          {item.text}
        </a>
      </li>
    );
  });

  return (
    <div
      className="absolute inset-0 bg-primary-dark z-20"
      style={showMenu ? { display: "block" } : { display: "none" }}
    >
      <ul className="center">{menuItems}</ul>
    </div>
  );
}

export default MobileMenu;
