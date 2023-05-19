import { Link } from "react-router-dom";
const Item = ({ id, name, price, img, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <pictute>
        <img src={img} alt={name} className="ItemImg" />
      </pictute>
      <section>
        <p className="Info">Price: ${price}</p>
        <p className="Info"> Stock : {stock}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="Option">
          Details
        </Link>
      </footer>
    </article>
  );
};

export default Item;
