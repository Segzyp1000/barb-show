
type ProductsProps = {
  result: React.ReactNode;
};

function Products({ result }: ProductsProps) {
  return (
    <section className=" text-navColor">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-5 bg-white ">
        {result}
      </div>
    </section>
  );
}

export default Products;
