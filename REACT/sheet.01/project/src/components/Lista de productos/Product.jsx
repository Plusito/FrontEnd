function Product({ name, price, description }) {
  return (
    <>
      <div className="product">
        <div className="info">
          <h1>Name: {name}</h1>
          <h1> Price: {price}$</h1>
          <h2>Description: {description}</h2>
        </div>
      </div>
    </>
  );
}

export default Product;
