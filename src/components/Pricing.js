import React from "react";
import "./Pricing.css";

const combos = [
  { name: "Burger Combo 🍔", details: "Burger + Fries + Cold Drink", price: "₹199" },
  { name: "Pizza Combo 🍕", details: "Medium Pizza + Garlic Bread + Soft Drink", price: "₹499" },
  { name: "Family Meal 🥗", details: "2 Main Courses + 2 Sides + 2 Drinks", price: "₹799" },
  { name: "Snacks Combo 🍟", details: "French Fries + Nuggets + Cold Drink", price: "₹149" },
  { name: "Paneer Tikka Combo 🥘", details: "Paneer Tikka + Naan + Drink", price: "₹299" },
  { name: "Chicken Tandoori Combo 🍗", details: "Tandoori Chicken + Rice + Drink", price: "₹399" },
  { name: "Veg Thali Combo 🥗", details: "Mixed Veg + Roti + Rice + Dessert", price: "₹299" },
  { name: "Non-Veg Thali Combo 🍛", details: "Chicken Curry + Roti + Rice + Dessert", price: "₹399" },
  { name: "Dessert Combo 🍨", details: "Ice Cream + Cake Slice", price: "₹149" },
  { name: "Cold Drink Combo 🥤", details: "2 Soft Drinks + Fries", price: "₹129" },
  { name: "Momos Combo 🥟", details: "8 Steamed Momos + Sauce + Drink", price: "₹199" },
  { name: "Pasta Combo 🍝", details: "Pasta + Garlic Bread + Soft Drink", price: "₹299" },
  { name: "Veg Sandwich Combo 🥪", details: "Sandwich + Fries + Drink", price: "₹179" },
  { name: "Chicken Sandwich Combo 🥪", details: "Sandwich + Fries + Drink", price: "₹199" },
  { name: "Wrap Combo 🌯", details: "Chicken/Paneer Wrap + Fries + Drink", price: "₹249" },
  { name: "Biryani Combo 🍛", details: "Veg/Chicken Biryani + Raita + Drink", price: "₹299" },
  { name: "Pizza Party Combo 🍕", details: "2 Medium Pizzas + Garlic Bread + Soft Drinks", price: "₹899" },
  { name: "Cheese Burst Pizza Combo 🧀", details: "Cheese Pizza + Cold Drink", price: "₹499" },
  { name: "Veg Burger Combo 🍔", details: "Veg Burger + Fries + Drink", price: "₹179" },
  { name: "Chicken Burger Combo 🍔", details: "Chicken Burger + Fries + Drink", price: "₹199" },
  { name: "Samosa Combo 🥟", details: "2 Samosas + Drink", price: "₹99" },
  { name: "French Fries Combo 🍟", details: "Large Fries + Dip + Drink", price: "₹149" },
  { name: "Wrap Meal Combo 🌯", details: "2 Wraps + Fries + Drink", price: "₹299" },
  { name: "Special Thali Combo 🥘", details: "Dal + Veg Curry + Roti + Rice + Dessert + Drink", price: "₹399" },
  { name: "Grilled Sandwich Combo 🥪", details: "Grilled Sandwich + Fries + Cold Drink", price: "₹199" },
  { name: "Veg Pizza Combo 🍕", details: "Medium Veg Pizza + Soft Drink", price: "₹399" },
  { name: "Chicken Pizza Combo 🍕", details: "Medium Chicken Pizza + Soft Drink", price: "₹449" },
  { name: "Taco Combo 🌮", details: "2 Tacos + Fries + Drink", price: "₹249" },
  { name: "Breakfast Combo 🥞", details: "Pancakes + Coffee + Fruit Juice", price: "₹199" },
  { name: "Lunch Special Combo 🍛", details: "Rice + Dal + 2 Curries + Roti + Drink", price: "₹299" },
  { name: "Dinner Special Combo 🍽️", details: "2 Main Courses + Sides + Dessert + Drink", price: "₹499" },
  { name: "Cheese Sandwich Combo 🥪", details: "Cheese Sandwich + Fries + Drink", price: "₹179" },
  { name: "Veggie Delight Combo 🥗", details: "Salad + Soup + Cold Drink", price: "₹199" },
  { name: "Chicken Delight Combo 🍗", details: "Grilled Chicken + Veggies + Drink", price: "₹299" },
  { name: "Family Snack Combo 🍟", details: "Fries + Nuggets + Cold Drinks", price: "₹299" },
  { name: "Chocolate Dessert Combo 🍫", details: "Brownie + Ice Cream + Drink", price: "₹149" },
  { name: "Fruit Juice Combo 🍹", details: "2 Fresh Juices + Snack", price: "₹129" },
  { name: "Mocktail Combo 🍸", details: "2 Mocktails + Snack", price: "₹199" },
  { name: "Paneer Burger Combo 🍔", details: "Paneer Burger + Fries + Drink", price: "₹199" },
  { name: "Grilled Chicken Burger Combo 🍔", details: "Grilled Chicken Burger + Fries + Drink", price: "₹219" },
  { name: "Cheese Momos Combo 🥟", details: "8 Cheese Momos + Dip + Drink", price: "₹199" },
  { name: "Veggie Pasta Combo 🍝", details: "Veg Pasta + Garlic Bread + Drink", price: "₹299" },
  { name: "Chicken Pasta Combo 🍝", details: "Chicken Pasta + Garlic Bread + Drink", price: "₹349" },
  { name: "Party Meal Combo 🎉", details: "3 Main Courses + 2 Sides + 4 Drinks", price: "₹1199" },
  { name: "Quick Bites Combo 🍟", details: "Fries + Nuggets + Cold Drink", price: "₹149" },
  { name: "Healthy Combo 🥗", details: "Salad + Fruit Juice + Snack", price: "₹199" },
  { name: "Dessert Fiesta Combo 🍰", details: "Cake Slice + Ice Cream + Drink", price: "₹179" },
  { name: "Lunch Box Combo 🍱", details: "Main + Rice + Salad + Drink", price: "₹249" },
];

function Pricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <h2 className="pricing-title">Our Combo Meals & Pricing</h2>
        <p className="pricing-subtitle">Delicious meals at pocket-friendly prices!</p>

        <div className="pricing-grid">
          {combos.map((combo, index) => (
            <div className="pricing-card" key={index}>
              <h3>{combo.name}</h3>
              <p>{combo.details}</p>
              <span className="price">{combo.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;