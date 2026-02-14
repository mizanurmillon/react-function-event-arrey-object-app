function Product() {
  const products = [
    {
      name: "Laptop",
      price: 999.99,
      description: "Powerful laptop for work and play.",
    },
    {
      name: "Smartphone",
      price: 699.99,
      description: "Latest smartphone with advanced features.",
    },
    {
      name: "Headphones",
      price: 199.99,
      description: "High-quality headphones for immersive sound.",
    },
  ];

  return (
    <div>
      <h1>Product List</h1>

      {products.map((product, index) => (
        <div key={index}>
          <h1>Name: {product.name}</h1>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;
