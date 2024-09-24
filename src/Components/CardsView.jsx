import ShopCard from "./ShopCard";
import PropTypes from "prop-types";

function CardsView({ cards }) {
  return (
    <div className="cards">
      {cards.map((product, index) => (
        <ShopCard key={index} product={product} />
      ))}
    </div>
  );
}

export default CardsView;

CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
};