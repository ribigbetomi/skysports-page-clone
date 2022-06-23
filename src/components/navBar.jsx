import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
// import { links } from "../links";
const NavBar = () => {
  const depthLevel = 0;
  // const [renderLink, useRenderLink] = useState("false");

  // renderLink = (menu) => {
  //   return menu.content;
  // };

  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;

          return (
            // <NavLink to={menu.to} key={index}>
            //   {" "}
            <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            // </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;

// const NavBar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-light">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           SkySports
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link active"
//                 aria-current="page"
//                 to="/get-sky"
//               >
//                 Get Sky Sports
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/login">
//                 <i className="fa-solid fa-user"></i>Login{" "}
//               </NavLink>
//             </li>
//             {/* <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Dropdown
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Action
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Another action
//                     </a>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Something else here
//                     </a>
//                   </li>
//                 </ul>
//               </li> */}
//             {/* <li className="nav-item">
//                 <a className="nav-link disabled">Disabled</a>
//               </li> */}
//           </ul>
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search Sky Sports"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const NavBar = () => {
//   //   handleMenuList = () => {
//   //     document.getElementById("dropdown-menu");
//   //   };
//   return (
//     <div>
//       {/* <div className="nav bg-danger collapsible">
//         <div className="nav-sky nav-sports">
//           <div className="bg-primary p-3" style={{ fontSize: "40px" }}>
//             sky
//           </div>
//           <div className="pt-3" style={{ fontSize: "40px" }}>
//             sports
//           </div>
//         </div>
//         <div className="pt-4 pe-5 nav-sky">
//           <div className="nav-sky nav-getsky">
//             <div className="pe-5">Get Skysports</div>
//             <div>
//               <i class="fa-regular fa-user"></i> Login{" "}
//             </div>
//           </div>
//           <div class="input-group mb-3 ms-3">
//             <input
//               type="text"
//               class="form-control"
//               placeholder="Search Sky"
//               aria-label="Recipient's username"
//               aria-describedby="button-addon2"
//             />
//             <button
//               class="btn btn-outline-secondary"
//               type="button"
//               id="button-addon2"
//             >
//               Button
//             </button>
//           </div>
//         </div>
//       </div> */}
//       <div>
//         <nav class="navbar navbar-expand-lg bg-light">
//           <div class="container-fluid">
//             <a class="navbar-brand" href="#">
//               Home
//             </a>
//             <button
//               class="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNavDropdown"
//               aria-controls="navbarNavDropdown"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNavDropdown">
//               <ul class="navbar-nav">
//                 <li class="nav-item">
//                   <a class="nav-link active" aria-current="page" href="#">
//                     Sport
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">
//                     Scores
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">
//                     Video
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">
//                     TV
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">
//                     Sky Bet
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">
//                     Games
//                   </a>
//                 </li>
//                 <li class="nav-item dropdown">
//                   <a
//                     // onClick={moreList()}
//                     class="nav-link dropdown-toggle collapsible--expanded"
//                     href="#"
//                     id="navbarDropdownMenuLink"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     More
//                   </a>
//                   <ul
//                     class="dropdown-menu"
//                     aria-labelledby="navbarDropdownMenuLink"
//                   >
//                     <li>
//                       <a class="dropdown-item" href="#">
//                         Action
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="#">
//                         Another action
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="#">
//                         Something else here
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };
