import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const { productId } = useParams<{ productId: string }>();

  const products: { [key: string]: { name: string; description: string } } = {
    "1": { name: "Product 1", description: "Description of Product 1" },
    "2": { name: "Product 2", description: "Description of Product 2" },
    "3": { name: "Product 3", description: "Description of Product 3" },
  };

  if (!productId || !products[productId]) {
    return <div>Product not found.</div>;
  }

  const product = products[productId];

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductsDetails;
