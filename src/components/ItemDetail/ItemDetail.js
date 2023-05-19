import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, price, img, description, stock, category }) => {
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
        <p className="Info"> Description: {description}</p>
        <p className="Info"> Category: {category}</p>
      </section>
      <footer className="ItemFooter">
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("added", quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
