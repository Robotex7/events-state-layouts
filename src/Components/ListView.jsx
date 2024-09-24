import ShopItem from "./ShopItem";
import PropTypes from "prop-types";

function ListView({ items }) {
  return (
    <div className="items-list">
      {items.map((product, index) => (
        <ShopItem key={index} product={product} />
      ))}
    </div>
  );
}

export default ListView;

ListView.propTypes = {
  items: PropTypes.array.isRequired,
};