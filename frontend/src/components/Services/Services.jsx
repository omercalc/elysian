import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="hiz-conta">
        <img className="hiz" src="../HİZMETLERİMİZ.png" alt="" />
      </div>
      <div className="restaurant">
        <div className="res-img">
          <img src="../ic-mekan.jpg" alt="" />
          <button className="ser-buton">Revervasyon</button>
        </div>
        <div className="res-text">
          <h1>My FAMİLY Restaurant</h1>
          <p>
            My FAMILY Restaurant adını taşıyan işletmemiz, 1000 kişilik geniş
            kapasitesiyle her türlü toplu etkinliğe uygun bir mekandır. Çocuk
            oyun alanımız, ailelerin rahatça vakit geçirebilmesi için özel
            olarak tasarlanmıştır. Özel günlerinizde, doğum günlerinden nişan ve
            düğünlere kadar her türlü organizasyonunuzda size en iyi hizmeti
            sunmak için buradayız. Kaliteli yemekler, sıcak bir atmosfer ve
            güler yüzlü servis ile misafirlerinize unutulmaz anlar yaşatmayı
            hedefliyoruz.
          </p>
        </div>
      </div>
      <div className="restaurant">
        <div className="res-text">
          <h1>Şirketler İçin Öğün Tedariği</h1>
          <p>
            My FAMILY Restaurant, şirketler için özel olarak tasarlanmış öğün
            tedariği hizmeti sunmaktadır. İş yerlerindeki verimliliği artırmak
            için kaliteli, dengeli ve lezzetli öğünler hazırlıyoruz.
            Şirketinizin ihtiyaçlarına göre günlük, haftalık veya aylık menüler
            oluşturabilir, personelinizin beslenme ihtiyaçlarını karşılayacak
            özelleştirilmiş seçenekler sunabiliriz. Çeşitli mutfaklardan
            lezzetler içeren geniş menümüz, herkesin damak zevkine hitap edecek
            şekilde düzenlenmiştir. Zamanında ve güvenilir teslimat
            hizmetimizle, iş yerinizdeki öğün planlamasını kolaylaştırıyoruz.
          </p>
        </div>
        <div className="res-img">
          <img src="../is-yerlerine.jpg" alt="" />
          <button className="ser-buton">Ön Talep</button>
        </div>
      </div>
      <div className="restaurant">
        <div className="res-img">
          <img src="../paket-servis.jpg" alt="" />
          <button className="ser-buton">Sipariş</button>
        </div>
        <div className="res-text">
          <h1>Paket Servis </h1>
          <p>
            My FAMILY Restaurant, lezzet dolu yemeklerini artık paket servis
            hizmetiyle kapınıza kadar getiriyor! Geniş menümüzden dilediğiniz
            yemeği seçebilir, evinizin veya iş yerinizin konforunda tadını
            çıkarabilirsiniz. Paket servisimiz, hızlı ve özenli teslimat
            anlayışımızla, sıcak ve taze yemekleri tam zamanında size
            ulaştırmayı garanti ediyor. İster tek kişilik öğünler, ister aileniz
            veya arkadaşlarınızla paylaşabileceğiniz büyük siparişler olsun, her
            seferinde mükemmel bir yemek deneyimi sunmayı hedefliyoruz. My
            FAMILY Restaurant ile artık lezzetlerimiz size bir telefon ya da
            tıklama kadar yakın!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
