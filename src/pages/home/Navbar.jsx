import menuData from "./menuData";

function Navbar() {
  const menuItems = menuData.map((item, index) => {
    return (
      <li key={index} className="py-0 px-6 list-none">
        <a className="menu-items" href={item.href}>
          {item.text}
        </a>
      </li>
    );
  });

  return (
    <div className="hidden lg:flex justify-between items-center py-6 px-8">
      <p className=""></p>
      <ul className="flex">{menuItems}</ul>
    </div>
  );
}

export default Navbar;
