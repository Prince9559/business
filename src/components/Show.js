import "./Show.css";

function Show() {
  return (
    <div className="video-container">
      
     
     <video className="bg-video" autoPlay muted loop>
  <source src="/pic/food.mp4" type="video/mp4" />
</video>

      <div className="overlay">
        <h1>Delicious Food 🍔</h1>
        <p>Fresh • Tasty • Fast Delivery</p>
        <button className="order-btn">Order Now</button>
      </div>

    </div>
  );
}

export default Show;