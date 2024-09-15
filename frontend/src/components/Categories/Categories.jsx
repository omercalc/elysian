
import PropTypes from 'prop-types';
import Card from '../Categories/Card/Card';

const Categories = ({ categories }) => {
    return (
        <>
            {categories.map((category) => (
                <Card key={category.categoryId} category={category} />
            ))}
        </>
    );
};

Categories.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            categoryId: PropTypes.number.isRequired,
            // Add more prop types for other properties of the category object
        })
    ).isRequired,
};

export default Categories;
