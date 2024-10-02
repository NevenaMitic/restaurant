import { getCollections } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

//Prikaz svih Kolekcija
const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="py-8 bg-black px-5">
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold font-playfair text-gold-1 text-center">
          No collections found
        </p>
      ) : (
        <div className="max-w-[1000px] mx-auto">
          {collections.map((collection: CollectionType, index: number) => (
            <div
              key={collection._id}
              className={`flex flex-col mb-10 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} p-4`}
            >
              <Link
                href={`/collections/${collection._id}`}
                className="w-full flex-none md:w-[400px] lg:w-[400px] group"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={400}
                  height={350}
                  className="rounded-md cursor-pointer object-cover w-full h-[350px] transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div className="mx-5 flex flex-col justify-center mt-4 md:mt-0">
                <Link
                  href={`/collections/${collection._id}`}
                  className="text-heading2-bold uppercase font-playfair text-white transition-colors duration-300 hover:text-yellow-400"
                >
                  {collection.title}
                </Link>
                <p className="text-body-normal font-playfair text-gold text-sm mt-1">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;




