import { useState, useContext } from "react";
import Sidebar from "../component/Sidebar";
import Recommended from "../component/Recommended";
import Products from "../component/Products";
import products from "../db/data";
import Card from "../component/Card";
import SearchInput from "../component/SearchInput";
import { CartContext } from "../CartContext";

const MainPage = () => {
  const { query } = useContext(CartContext);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  // Handlers
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedColor("");
    setSelectedPrice("");
    setSelectedCompany("");
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    setSelectedCategory("");
    setSelectedPrice("");
    setSelectedCompany("");
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
    setSelectedColor("");
    setSelectedCategory("");
    setSelectedCompany("");
  };

  const handleRecommendedClick = (event) => {
    setSelectedCompany(event.target.value);
    setSelectedCategory("");
    setSelectedColor("");
    setSelectedPrice("");
  };

  const getFilteredProducts = () => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedColor) {
      filtered = filtered.filter((product) => product.color === selectedColor);
    }

    if (selectedPrice) {
      filtered = filtered.filter(
        (product) => Number(product.newPrice) <= Number(selectedPrice)
      );
    }

    if (selectedCompany) {
      filtered = filtered.filter(
        (product) => product.company === selectedCompany
      );
    }

    if (query) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div>
      <SearchInput />
      <div className="flex container w-full">
        <Sidebar
          onCategoryChange={handleCategoryChange}
          onColorChange={handleColorChange}
          onPriceChange={handlePriceChange}
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          selectedPrice={selectedPrice}
        />
        <div className="flex-1 px-0.5">
          <Recommended handleClick={handleRecommendedClick} />
          {filteredProducts.length > 0 ? (
            <Products
              result={filteredProducts.map(
                (
                  { id, img, title, star, reviews, newPrice, prevPrice },
                  index
                ) => (
                  <Card
                    key={`${id}-${title}-${index}`}
                    id={id}
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    newPrice={newPrice}
                    prevPrice={prevPrice}
                  />
                )
              )}
            />
          ) : (
            <p className="text-center text-red-500 font-semibold mt-6">
              No products match the selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
