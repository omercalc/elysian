import "./Contents.css";

const Contents = () => {
  return (
    <div className="content-build">
      <h1 className="con-h1">İÇERİKLER</h1>
      <div className="menu">
        <div className="content">
          <img src="../kahvaltı.png" alt="" />
        </div>
        <div className="content">
          <img src="../icecekler.png" alt="" />
        </div>
        <div className="content">
          <img src="../yemekler.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contents;
