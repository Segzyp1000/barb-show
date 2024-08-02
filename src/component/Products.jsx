import React from "react";

function Products({ result }) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-2 md:mx-6 mx-5 w-4/5  text-navColor">
      {result}
    </section>
  );
}

export default Products;
