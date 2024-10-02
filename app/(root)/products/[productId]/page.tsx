import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import ProductInfo from "@/components/ProductInfo";
import { getProductDetails, getRelatedProducts } from "@/lib/actions";
import Separator from "@/components/layout/Separator";

// Asinhrona funkcionalna komponenta ProductDetails koja prikazuje detalje o proizvodu i srodne proizvode
const ProductDetails = async ({ params }: { params: { productId: string } }) => {

  const productDetails = await getProductDetails(params.productId);
  const relatedProducts = await getRelatedProducts(params.productId);

  return (
    <div className="bg-black min-h-screen">
      <div className="flex justify-center items-start gap-16 max-md:flex-col max-md:items-center py-10">
        <Image
          src={productDetails.media[0]} 
          alt={productDetails.title}
          width={400} 
          height={400}
          className="object-contain mt-10"
        />
        
        {/* Prikaz detaljnih informacija o proizvodu */}
        <ProductInfo productInfo={productDetails} />
      </div>
      
      <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
        <Separator />
        <p className="text-heading4-bold uppercase font-playfair text-gold-1">You might like it</p>
        <div className="flex flex-wrap gap-16 mx-auto mt-8">

          {/* Prikaz kartica srodnih proizvoda */}
          {relatedProducts?.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";
export default ProductDetails;



