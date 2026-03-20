import React from "react";
import "./Menu.css"; 

const products = [
  { icon: "🍕", title: "Pizza Specials", desc: "Delicious hand-tossed pizzas with fresh toppings and cheesy goodness." },
  { icon: "🍔", title: "Burgers & Sandwiches", desc: "Juicy burgers and sandwiches prepared with fresh ingredients." },
  { icon: "🥗", title: "Healthy Salads", desc: "Fresh and nutritious salads for a lighter meal option." },
  { icon: "🥤", title: "Cold Beverages", desc: "Refreshing drinks including shakes, smoothies, and soft drinks." },
  { icon: "🍝", title: "Pasta & Noodles", desc: "Tasty pasta and noodle dishes with a variety of sauces." },
  { icon: "🍛", title: "Rice & Curries", desc: "Authentic curries served with steamed rice or biryani." },
  { icon: "🧁", title: "Desserts", desc: "Sweet treats and desserts to finish your meal perfectly." },
  { icon: "🚚", title: "Fast Delivery", desc: "Hot and fresh food delivered straight to your doorstep." },
  { icon: "🥪", title: "Wraps & Roll", desc: "Soft wraps filled with vegetables, chicken, or paneer." },
  { icon: "🌮", title: "Tacos & Quesadillas", desc: "Mexican delights with fresh toppings and sauces." },
  { icon: "🍤", title: "Seafood Specials", desc: "Fresh and delicious seafood dishes, cooked to perfection." },
  { icon: "🍳", title: "Breakfast Combo", desc: "Start your day with hearty breakfast options." },
  { icon: "🥩", title: "Grilled Meats", desc: "Succulent grilled chicken, beef, and lamb dishes." },
  { icon: "🍹", title: "Mocktails & Juices", desc: "Refreshing beverages to pair with your meals." },
  { icon: "🫔", title: "Biryani Specials", desc: "Aromatic biryanis with chicken, mutton, or vegetables." },
  { icon: "🍿", title: "Snacks & Sides", desc: "Quick bites like fries, nuggets, samosas, and more." },
  { icon: "🫓", title: "Indian Breads", desc: "Freshly baked naan, roti, and parathas." },
  { icon: "🥘", title: "Chef Specials", desc: "Unique dishes crafted by our head chef." },
  { icon: "🥛", title: "Milkshakes", desc: "Creamy milkshakes in a variety of flavors." },
  { icon: "🍱", title: "Family Meals", desc: "Special combo meals for families and groups." }
];

export default function Menu() { 
  return (
    <section className="products-section">
      <div className="products-container">

        <h2 className="title">
          Explore Our <span className="highlight">Restaurant Menu</span> 🍴
        </h2>

        <div className="products-grid">

          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}