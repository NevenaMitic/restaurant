"use client";
import Image from "next/image";
import Link from "next/link";
import useCart from "@/lib/hooks/useCart";

// Komponenta ProductCard za prikaz informacija o proizvodu u vidu kartice
const ProductCard = ({ product }: { product: ProductType }) => {
  const cart = useCart(); // Pristup funkcionalnostima korpe

  // Izračunaj sniženu cenu ako postoji popust
  const discountedPrice = product.discount > 0 
    ? product.price - (product.price * (product.discount / 100)) 
    : product.price;

  return (
    <div className="relative w-[200px] flex flex-col gap-2 group">
      {/* Link ka stranici detalja proizvoda */}
      <Link
        href={`/products/${product._id}`}
        className="flex flex-col gap-2 hover:scale-105 bg-black transition-transform duration-300 ease-in-out relative"
      >
        {/* Oznaka popusta */}
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-yellow-1 text-base-bold text-black py-1 px-2 rounded-full flex items-center justify-center w-10 h-10">
            -{product.discount}%
          </div>
        )}

        <Image
          src={product.media[0]}
          alt="product"
          width={1000}
          height={200}
          className="h-[200px] rounded-t-md object-contain"
        />
        <div className="p-2 relative">
          <p className="text-body-bold text-gold-1 text-center font-playfair mb-3">
            {product.title}
          </p>

          {/* Cena i komadi */}
          <div className="flex flex-col items-center group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center gap-2">
              <p
                className={`text-small-medium font-montserrat ${product.discount > 0 ? "text-yellow-1" : "text-white"
                  }`} // Boja cene menja se u žutu ako je na popustu
              >
                {discountedPrice.toFixed(2)} EUR {/* Prikazujemo sniženu cenu */}
              </p>
              <p className="text-gold-1 text-small-medium font-montserrat">|</p>
              <p className="text-small-medium uppercase font-montserrat text-gold-1">
                {product.pieces} {product.pieces === 1 ? "portion" : "pieces"}
              </p>
            </div>
          </div>
        </div>
      </Link>

      {/* Dugme Order Now */}
      <button
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gold-1 text-black text-base-bold uppercase py-2 px-4 
          opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap"
        onClick={() => {
          // Dodavanje proizvoda u korpu
          cart.addItem({
            item: product,
            quantity: 1, 
            pieces: product.pieces,
            discount: product.discount
          });
        }}
      >
        Order Now
      </button>
    </div>
  );
};

export default ProductCard;
