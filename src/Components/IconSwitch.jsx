import PropTypes from "prop-types";

function IconSwitch({ icon, onSwitch }) {
  return (
    <div className="icons" onClick={onSwitch}>
      <span className="material-icons">{icon}</span>
    </div>
  );
}

export default IconSwitch;

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};