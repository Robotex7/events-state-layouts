import PropTypes from "prop-types";

function ShopCard({ product }) {
  const { name, price, color, img } = product;
  return (
    <div className="shopCard">
      <h2>{name}</h2>
      <span>{color}</span>
      <img src={img} className="image" />
      <div className="price_container">
        <span>$ {price}</span>
        <button className="btn">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ShopCard;

ShopCard.propTypes = {
  product: PropTypes.object.isRequired,
};