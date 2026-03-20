import "./Home.css";
import Show from "./Show";

function Home() {
  return (
    <>
      <div
      id="demo"
      className="carousel slide mt-3"
      data-bs-ride="carousel"
      data-bs-interval="2000"
      data-bs-wrap="true">
        
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/pic/a.jpg" alt="Food 1" className="d-block w-100" style={{ height: "390px", objectFit: "cover" }} />
          </div>

          <div className="carousel-item">
            <img src="/pic/e.jpg" alt="Food 2" className="d-block w-100" style={{ height: "390px", objectFit: "cover" }} />
          </div>

          <div className="carousel-item">
            <img src="/pic/3.jpg" alt="Food 3" className="d-block w-100" style={{ height: "390px", objectFit: "cover" }} />
          </div>

          <div className="carousel-item">
            <img src="/pic/4.jpg" alt="Food 4" className="d-block w-100" style={{ height: "390px", objectFit: "cover" }} />
          </div>

          <div className="carousel-item">
            <img src="/pic/f.jpg" alt="Food 5" className="d-block w-100" style={{ height: "390px", objectFit: "cover" }} />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <section className="why-section">
        <h2 className="why-title">Why Choose FoodHub 🍔</h2>

        <div className="container">
          <div className="row text-center">

            <div className="col-md-4">
              <div className="feature-box">
                <i className="bi bi-emoji-smile text-danger"></i>
                <h5>Delicious Taste</h5>
                <p>We serve mouth-watering and fresh food every day.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-box">
                <i className="bi bi-heart text-warning"></i>
                <h5>Quality Ingredients</h5>
                <p>We use only fresh and high-quality ingredients.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-box">
                <i className="bi bi-clock text-primary"></i>
                <h5>Fast Delivery</h5>
                <p>Quick and reliable food delivery at your doorstep.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-box">
                <i className="bi bi-people text-success"></i>
                <h5>Happy Customers</h5>
                <p>Thousands of satisfied customers trust us.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-box">
                <i className="bi bi-cup-straw text-info"></i>
                <h5>Variety of Items</h5>
                <p>Wide range of food items like pizza, burger & more.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-box">
                <i className="bi bi-cash text-dark"></i>
                <h5>Affordable Prices</h5>
                <p>Best quality food at pocket-friendly prices.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-box">
                <i className="bi bi-fire text-danger"></i>
                <h5>Hot & Fresh Food</h5>
                <p>Freshly cooked hot meals served instantly.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-box">
                <i className="bi bi-truck text-primary"></i>
                <h5>Free Delivery</h5>
                <p>Enjoy free delivery on selected orders.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-box">
                <i className="bi bi-star text-warning"></i>
                <h5>Top Rated Quality</h5>
                <p>Rated highly by our happy customers.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Show></Show>
    </>
  );
}

export default Home;