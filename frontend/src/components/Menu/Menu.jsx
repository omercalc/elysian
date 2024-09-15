import { dishMenu } from "../../constants/data.js";
import MenuModal from "../../uı/Modals/MenuModal.jsx";
import { useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const showModal = (item) => {
    setSelectedDish(item); // Seçilen yemeği ayarla
    setIsModalOpen(true);  // Modalı aç
  };

  const closeModal = () => {
    setIsModalOpen(false); // Modalı kapat
  };

  return (
    <div className="menu-conte">
      {dishMenu.map((item) => (
        <div key={item.id} className="menu-item">
          <div className="menu-img">
            <img src={item.image} alt="" />
            <h3 className="kitchen">{item.name}</h3>
          </div>
          <div className="f-of-know">
            <div className="information">
              <h3 className="food-name">{item.dish}</h3>
            </div>
          </div>
          <div className="menu-button">
            <button onClick={() => showModal(item)}>Sipariş Ver</button>
          </div>
        </div>
      ))}

      {selectedDish && (
        <MenuModal
          isOpen={isModalOpen}
          onClose={closeModal}
          item={selectedDish}
        />
      )}
    </div>
  );
};

export default Menu;
