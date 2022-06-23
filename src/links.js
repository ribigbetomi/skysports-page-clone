import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";

export default function links() {
  menuItems.map((menu, index) => {
    console.log(menu.to);
    return <Link to={menu.to} key={index}></Link>;
  });
}
