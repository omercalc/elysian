import { mealOfWeek,chiefSuggestions } from "../../constants/data.js";
import Menu from "../../components/Menu/Menu";
import "./ShopPage.css";

const ShopPage = () => {
  return (
    <div className="shop">
      <div className="wrapper">
        <div className="shop-content">
          <div className="shop-aside">
            <div className="box-field box-field__search">
              <input
                type="search"
                className="form-control"
                placeholder="Yemeğini Ara"
              />
              <i className="ri-search-line"></i>
            </div>
            <div className="shop-aside__item">
              <span className="shop-aside__item-title">Kategoriler</span>
              <ul>
                <li>
                  <a href="#">
                    Türk Mutfağı <span>(37)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    İtalyan Mutfağı <span>(162)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Uzakdoğu Mutfağı <span>(153)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Meksika Mutfağı <span>(86)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Tatlılar <span>(48)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    İçecekler <span>(54)</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="shop-aside__item">
              <span className="shop-aside__item-title">Haftanın Yemekleri</span>
              {mealOfWeek.map((item) => (
                <a href="#" className="shop-aside__item-product" key={item.id}>
                  <div className="shop-aside__item-product-img">
                    <img
                      src={item.image}
                      className="js-img"
                      alt="Haftanın Yemeği"
                    />
                  </div>
                  <div className="shop-aside__item-product-info">
                    <span className="shop-aside__item-product-title">
                      {item.dish}
                    </span>
                    <span className="shop-aside__item-product-price">
                      ₺{item.price}
                    </span>
                    <ul className="star-rating">
                      <li>
                        <i className="icon-star"></i>
                      </li>
                      <li>
                        <i className="icon-star"></i>
                      </li>
                      <li>
                        <i className="icon-star"></i>
                      </li>
                      <li>
                        <i className="icon-star"></i>
                      </li>
                      <li>
                        <i className="icon-star"></i>
                      </li>
                    </ul>
                  </div>
                </a>
              ))}
            </div>
            <div className="shop-aside__item">
              <span className="shop-aside__item-title">Şefin Öneri Köşesi</span>
              {chiefSuggestions.map((item) => (
                <a href="#" className="shop-aside__item-product" key={item.id}>
                <div className="shop-aside__item-product-img">
                  <img
                    data-src="https://via.placeholder.com/60x70"
                    src={item.image}
                    className="js-img"
                    alt=""
                  />
                </div>
                <div className="shop-aside__item-product-info">
                  <span className="shop-aside__item-product-title">
                    {item.dish}
                  </span>
                  <span className="shop-aside__item-product-price">
                    ₺{item.price}
                  </span>
                  <ul className="star-rating">
                    <li>
                      <i className="icon-star"></i>
                    </li>
                    <li>
                      <i className="icon-star"></i>
                    </li>
                    <li>
                      <i className="icon-star"></i>
                    </li>
                    <li>
                      <i className="icon-star"></i>
                    </li>
                    <li>
                      <i className="icon-star"></i>
                    </li>
                  </ul>
                </div>
              </a>
              ))}
              
            </div>
          </div>
          <div className="shop-main">
            <div className="shop-main__filter">
              <div className="shop-main__checkboxes">
                <label className="checkbox-box">
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                  SALE
                </label>
                <label className="checkbox-box">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  NEW
                </label>
              </div>
              
            </div>
            <div className="shop-main__items">
              <Menu />
            </div>
            <ul className="paging-list">
              <li className="paging-list__item paging-prev">
                <a href="#" className="paging-list__link">
                  <i className="icon-arrow"></i>
                </a>
              </li>
              <li className="paging-list__item active">
                <a href="#" className="paging-list__link">
                  1
                </a>
              </li>
              <li className="paging-list__item">
                <a href="#" className="paging-list__link">
                  2
                </a>
              </li>
              <li className="paging-list__item">
                <a href="#" className="paging-list__link">
                  3
                </a>
              </li>
              <li className="paging-list__item">
                <a href="#" className="paging-list__link">
                  4
                </a>
              </li>
              <li className="paging-list__item">
                <a href="#" className="paging-list__link">
                  5
                </a>
              </li>
              <li className="paging-list__item paging-next">
                <a href="#" className="paging-list__link">
                  <i className="icon-arrow"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ShopPage;
