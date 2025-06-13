import { useState, useContext } from "react";
import Sidebar from "../component/Sidebar";
import Recommended from "../component/Recommended";
import Products from "../component/Products";
import products from "../db/data";
import Card from "../component/Card";
import SearchInput from "../component/SearchInput";
import { CartContext } from "../CartContext";

const MainPage = () => {
  const { query } = useContext(CartContext); // Use query from context
  const [selectedCategory, setSelectedCategory] = useState(null);

  // radio filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // button filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = [...products];

    // Filtering input items
    if (query) {
      filteredProducts = products.filter(
        (product) =>
          product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          title === selected ||
          company === selected ||
          newPrice === selected
      );
    }

    return filteredProducts.map(
      ({ id, img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={id}
          id={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      <SearchInput />
      <div className="flex container w-full">
        <Sidebar handleChange={handleChange} />
        <div>
          <Recommended handleClick={handleClick} />
          <Products result={result} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
