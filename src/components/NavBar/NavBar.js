import CartWidget from "./CartWidget/cartWidget";

import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>Anime Shop</h3>
      </Link>
      <div className="Categories">
        <NavLink
          to={`/category/figures`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          {" "}
          Figures{" "}
        </NavLink>
        <NavLink
          to={`/category/mangas`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Mangas
        </NavLink>
        <NavLink
          to={`/category/accessories`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          accessories
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
