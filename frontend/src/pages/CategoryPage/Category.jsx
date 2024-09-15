import categoryData from "../../constants/categories/category";
import Categories from "../../components/Categories/Categories";
import "./Category.css";

const CategoryPage = () => {
  const categories = [...categoryData];
  return (
    <section>
      <div className="menu-banner">
        <img src="../../../menupage.gif" alt="" />
      </div>
      <section className="all-categories">
        <h1 className="cate-h1">KATEGORİLER</h1>
        <div className="top-categories__items">
          <Categories categories={categories} />
        </div>
      </section>
    </section>
  );
};

export default CategoryPage;
