import React from "react";

function Products({ result }) {
  return (
    <section className=" text-navColor">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-1 py-2 bg-white">
        {result}
      </div>
    </section>
  );
}

export default Products;
