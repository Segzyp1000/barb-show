import { useState, useContext, ChangeEvent } from "react";
import Sidebar from "../component/Sidebar";
import Recommended from "../component/Recommended";
import Products from "../component/Products";
import products from "../db/data";
import Card from "../component/Card";
import SearchInput from "../component/SearchInput";
import { CartContext } from "../CartContext";

// Define product type
type Product = {
  id: number | string;
  img: string;
  title: string;
  newPrice: number;
  prevPrice: number;
  category: string;
  color: string;
  company: string;
  
};

type SyntheticEvent = {
  target: { value: string | number };
};


const MainPage = () => {
  const { query } = useContext(CartContext) as { query: string };
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  // Handlers
  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
    setSelectedColor("");
    setSelectedPrice(null);
    setSelectedCompany("");
  };

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
    setSelectedCategory("");
    setSelectedPrice(null);
    setSelectedCompany("");
  };

  const handlePriceChange = (event: SyntheticEvent) => {
    setSelectedPrice(Number(event.target.value));
    setSelectedColor("");
    setSelectedCategory("");
    setSelectedCompany("");
  };

   const handleRecommendedClick = (event: SyntheticEvent) => {
    setSelectedCompany(event.target.value as string);
    setSelectedCategory("");
    setSelectedColor("");
    setSelectedPrice(null);
  };


  const getFilteredProducts = (): Product[] => {
    let filtered = [...(products as Product[])];

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedColor) {
      filtered = filtered.filter((product) => product.color === selectedColor);
    }

    if (selectedPrice !== null) {
      filtered = filtered.filter((product) => product.newPrice === selectedPrice);
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
                  { id, img, title, newPrice, prevPrice },
                  index
                ) => (
                  <Card
                    key={`${id}-${title}-${index}`}
                    id={id}
                    img={img}
                    title={title}
                    newPrice={newPrice}
                    prevPrice={prevPrice}
                  />
                )
              )}
            />
          ) : (
            <p className="font-semibold ml-5 text-red-500 mt-6">
              No Produt found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
