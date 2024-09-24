import PropTypes from "prop-types";

function ShopItem({ product }) {
  const { name, price, color, img } = product;
  return (
    <div className="list_container">
      <img src={img} className="image_list" />
      <h2>{name}</h2>
      <span>{color}</span>
      <span className="price">$ {price}</span>
      <button className="btn">ADD TO CART</button>
    </div>
  );
}

export default ShopItem;

ShopItem.propTypes = {
  product: PropTypes.object.isRequired,
};