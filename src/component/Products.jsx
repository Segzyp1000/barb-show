function Products({ result }) {
  return (
    <section className=" text-navColor">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 p-3 bg-white">
        {result}
      </div>
    </section>
  );
}

export default Products;
