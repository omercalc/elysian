import PropTypes from "prop-types";
import { MdAccessTime } from "react-icons/md";
import "./MenuModal.css";

const MenuModal = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-button-c" onClick={onClose}>
          X
        </button>
        <div className="modal-content">
          <div className="image">
            <h2 className="h2">{item.name}</h2>
            <img src={item.image} />
            <div className="serving-time">
              <h5>Servis Süresi</h5>
              <MdAccessTime style={{ fontSize: "35px", color: "#f9a109" }} />{" "}
              {item.servingTime}
            </div>
          </div>
          <div className="information">
            <h3 className="h3">{item.dish}</h3>
            <h2 className="h2">{item.description}</h2>

            <div className="ingredients flex items-center space-x-2">
              <h4 className="h4 font-bold">İÇİNDEKİLER</h4>
              <p>
                {item.ingredients.map((ingredient, index) => (
                  <span key={index}>
                    {ingredient}
                    {index < item.ingredients.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="container-button">
          <div className="hover bt-1"></div>
          <div className="hover bt-2"></div>
          <div className="hover bt-3"></div>
          <div className="hover bt-4"></div>
          <div className="hover bt-5"></div>
          <div className="hover bt-6"></div>
          <button className="button"></button>
        </div>
      </div>
    </div>
  );
};

MenuModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dish: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    servingTime: PropTypes.string.isRequired,
  }).isRequired,
};
export default MenuModal;
