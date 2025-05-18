import CategorySection from "../Component/ProductPage/CategorySection";
import { Product, products } from "../Utils/Products";


const ProductPage: React.FC = () => {
  return (

      <div className="container mx-auto md:w-[90%] overflow-hidden my-16 md:my-20 xl:my-24">
        {Object.entries(groupProductsByCategory()).map(([category, items]) => (
          <CategorySection
            key={category}
            category={category}
            products={items}
          />
        ))}
      </div>

  );
};

function groupProductsByCategory(): Record<string, Product[]> {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);
}

export default ProductPage;
