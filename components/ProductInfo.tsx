"use client";
import { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";
import useCart from "@/lib/hooks/useCart";

interface ProductInfoProps {
  productInfo: ProductType;
}
// Komponenta za prikaz detaljnijih informacija o proizvodu
const ProductInfo = ({ productInfo }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const cart = useCart();

  // Izračunaj cenu sa popustom ako proizvod ima popust
  const discountedPrice = productInfo.discount > 0 ? productInfo.price * (1 - productInfo.discount / 100) : productInfo.price;

  return (
    <div className="max-w-[400px] flex flex-col gap-4 p-6">
       {/* Prikazuje kategoriju proizvoda */}
      <p className="text-base-bold text-gold-1">{productInfo.category}</p>

        {/* Prikazuje naslov proizvoda i popust ako postoji */}
      <div className="flex justify-between items-center gap-6">
        <p className="text-heading3-bold text-white">{productInfo.title}</p>
        
        {productInfo.discount > 0 && (  // Prikazuje oznaku sa procentom popusta
          <div className="bg-yellow-1 text-base-bold text-black p-2 rounded-full">
            -{productInfo.discount}%
          </div>
        )}
      </div>
      <hr className="w-full border-t-2 border-gold-1 my-1" />
        {/* Prikazuje sastojke i opis proizvoda */}
      <div className="flex flex-col font-montserrat text-gold-1 gap-2 mb-2">
        <p className="text-base-medium text-white">Ingredients:</p>
        <p className="text-small-medium">{productInfo.ingredients}</p>
        <p className="text-small-medium">{productInfo.description}</p>
      </div>

 {/* Prikazuje cenu proizvoda, količinu i kontrole za podešavanje količine */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col relative">
          <p className={`text-heading3-bold ${productInfo.discount > 0 ? "text-yellow-1" : "text-white"}`}>
            {discountedPrice.toFixed(2)} EUR
          </p>
          <p className="text-small-medium uppercase font-montserrat text-gold-1">
            {productInfo.pieces} {productInfo.pieces === 1 ? "portion" : "pieces"}
          </p>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <p className="text-small-medium text-center font-montserrat text-white">Quantity</p>
          <div className="flex gap-4 items-center text-gold-1">
            <MinusCircle
              className="hover:text-white cursor-pointer"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            />
            <p className="text-small-medium uppercase font-montserrat text-gold-1">{quantity}</p>
            <PlusCircle
              className="hover:text-white cursor-pointer"
              onClick={() => setQuantity(quantity + 1)}
            />
          </div>
        </div>
      </div>
      {/* Dugme za naručivanje proizvoda */}  
      <button
        className="outline text-base-bold uppercase py-3 bg-gold hover:text-grey"
        onClick={() => {
          cart.addItem({
            item: productInfo,
            quantity,
            pieces: productInfo.pieces,
            discount: productInfo.discount
          });
        }}
      >
        Order Now
      </button>
    </div>
  );
};

export default ProductInfo;
