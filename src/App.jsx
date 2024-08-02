import { useState } from "react";
import Nav from "./component/Nav";
import Products from "./component/Products";
import Recommended from "./component/Recommended";
import Sidebar from "./component/Sidebar";
// database
import products from "./db/data";
import Card from "./component/Card";
import Footer from "./component/Footer";

function App() {
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
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
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
    <div className="app">
      <Nav query={query} handleinputChange={handleinputChange} />
      <div className="flex">
        <Sidebar handleChange={handleChange} />
        <div>
          <Recommended handleClick={handleClick} />
          <Products result={result} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
