import React from "react";

function Products({ result }) {
  return (
    <section className=" text-navColor w-full p-3">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-2 ">
        {result}
      </div>
    </section>
  );
}

export default Products;
