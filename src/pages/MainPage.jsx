import React, { useState } from "react";
<<<<<<< HEAD
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import Recommended from "../component/Recommended";
import Products from "../component/Products";
import Footer from "../component/Footer";
import products from "../db/data";
import Card from "../component/Card";
=======
import Sidebar from "../component/Sidebar";
import Recommended from "../component/Recommended";
import Products from "../component/Products";
import products from "../db/data";
import Card from "../component/Card";
import Footer from "../component/Footer";
import SearchInput from "../component/SearchInput";
>>>>>>> master

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // input filter
  const [query, setQuery] = useState("");

  const handleinputChange = (event) => {
    setQuery(event.target.value);
  };

  const filterItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // radio filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //button filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //filtering input items
    if (query) {
      filteredProducts = filterItems;
    }

    //selected Filter

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
<<<<<<< HEAD
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
=======
      ({ id, img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          id={id}
>>>>>>> master
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
<<<<<<< HEAD
      <Nav query={query} handleinputChange={handleinputChange} />
      <div className="flex">
=======
      <SearchInput query={query} handleinputChange={handleinputChange} />
      <div className="sty flex mx-3 md:mx-auto">
>>>>>>> master
        <Sidebar handleChange={handleChange} />
        <div>
          <Recommended handleClick={handleClick} />
          <Products result={result} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
