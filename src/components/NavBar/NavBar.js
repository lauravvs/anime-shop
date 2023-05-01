import CartWidget from "./CartWidget/cartWidget";
const NavBar = () => {
  return (
    <nav>
      <h3>Anime Shop</h3>
      <div>
        <button>Figures</button>
        <button>Mangas</button>
        <button>Accessories</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
