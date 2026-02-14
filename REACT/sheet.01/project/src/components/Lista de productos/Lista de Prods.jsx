import Product from "./Product";

function ListOfProducts({ list }) {
  return (
    <>
      {list.map((prod) => (
        <Product
          name={prod.name}
          price={prod.price}
          description={prod.description}
        />
      ))}
    </>
  );
}

export default ListOfProducts;
