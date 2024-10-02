import { getProducts } from "@/lib/actions";
import ProductCard from "./ProductCard";

// Komponenta za prikaz svih proizvoda po kategorijama
const ProductList = async () => {
  const products: ProductType[] = await getProducts(); 

  // Grupisanje proizvoda po kategorijama
  const categorizedProducts = products.reduce<Record<string, ProductType[]>>((acc, product) => {
    const category = product.category || "Other"; // Podrazumevana kategorija ako nema
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className="flex flex-col bg-black items-center gap-10 py-10 px-5">
      {Object.keys(categorizedProducts).length === 0 ? (
        <p className="text-body-bold font-playfair">No products found</p>
      ) : (
        Object.entries(categorizedProducts).map(([category, products]) => (
          <div key={category} className="w-full text-center">
            <div className="flex items-center justify-center mb-8">
              <hr className="border-gold-1 border-t-2 w-1/4" />
              <span className="text-heading2-bold font-playfair text-gold-1 mx-4">{category}</span>
              <hr className="border-gold-1 border-t-2 w-1/4" />
            </div>
            <div className="flex flex-wrap justify-center gap-16">
              {products.map((product: ProductType) => (
                <ProductCard 
                  key={product._id} 
                  product={product} 
                />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;



