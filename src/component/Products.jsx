import React from "react";

function Products({ result }) {
  return (
    <section className=" text-navColor max-w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-2 p-2 ">
        {result}
      </div>
    </section>
  );
}

export default Products;
