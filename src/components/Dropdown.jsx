import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <div className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      <div className="grid grid--1x2 dropdown-grid">
        {submenus.map((submenu, index) => (
          //   <div key={index} className="menu-items">
          //     <a href="#">{submenu.title}</a>
          //   </div>
          <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
