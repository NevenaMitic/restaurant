import Separator from "@/components/layout/Separator";
import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions";
import Image from "next/image";
import React from "react";

// Asinhrona funkcionalna komponenta za prikaz detalja kolekcije
const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  // Poziva funkciju za dobijanje detalja kolekcije na osnovu ID-a iz parametara
  const collectionDetails = await getCollectionDetails(params.collectionId);

  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Header sekcija */}
      <div className="relative w-full flex flex-col items-center gap-12">
        <Image
          src={collectionDetails.image}
          width={1500}
          height={1000}
          alt="collection"
          className="w-full h-[400px] object-cover shadow-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center p-4 bg-gradient-to-t from-black to-transparent">
          <p className="text-gold-1 text-heading1-bold font-playfair uppercase tracking-wide">
            {collectionDetails.title}
          </p>
        </div>
      </div>

      {/* Opis kolekcije */}
      <div className="max-w-[800px] mx-auto text-center p-4">
        <p className="text-body-normal font-playfair text-gold-1">
          {collectionDetails.description}
        </p>
      </div>

      {/* Prikaz proizvoda */}
      <div className="flex flex-wrap gap-10 justify-center">
        {collectionDetails.products.map((product: ProductType) => {
          // Kreiraj novi objekat proizvoda sa ažuriranom cenom
          const discountedProduct = {
            ...product,
          };
          return (
            <ProductCard
              key={product._id}
              product={discountedProduct}
            />
          );
        })}
      </div>
      <Separator />
    </div>
  );
};

export default CollectionDetails;
// Eksplicitno postavlja stranicu kao dinamičnu za uvek svež prikaz podataka
export const dynamic = "force-dynamic";
