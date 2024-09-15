

const Nav = () => {
  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2xl max-auto px-4 flex justify-between items-center">
        <ul className="nav__links">
          <li className="link">
            <a to="/">Anasayfa</a>
          </li>
          <li className="link">
            <a to="/shop">Menüler</a>
          </li>
          <li className="link">
            <a to="/pages">Pages</a>
          </li>
          <li className="link">
            <a to="/contact">İletişim</a>
          </li>
        </ul>
        <div className="nav__logo">
          <a to="/"><img src="../logo_transparent.png" alt="" height={170} width={170} /></a>
        </div>

        <div className="nav__icons relative">
          <span>
            <a to="/search">
              <i className="ri-search-line" />
            </a>
          </span>
          <span>
            <button className="hover:text-red-600">  
              <i className="ri-shopping-cart-line" />
              <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-red-700 text-center">0</sup>
            </button>
          </span>

          <span>
            <a to="/login">
              <i className="ri-user-line" />
            </a>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
