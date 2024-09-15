
import PropTypes from 'prop-types';

const Card = ({ category }) => {
  const { name, image } = category;
  return (
    <a href="#" className='top-categories__item'>
      <img src={image} className='js-img' alt={name} />
      <div className='top-categories__item-hover'>
        <h5>{name}</h5>
        <span>Ürünler İçin -</span>
        <i style={{color: 'white'}} className="ri-arrow-right-line"></i>
      </div>
    </a>
  );
};

Card.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;