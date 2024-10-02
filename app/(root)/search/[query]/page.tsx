import SearchNav from "@/components/layout/SearchNav";
import ProductCard from "@/components/ProductCard";
import { getSearchedProducts } from "@/lib/actions";

// Asinhrona funkcionalna komponenta SearchPage koja prikazuje rezultate pretrage
const SearchPage = async ({ params }: { params: { query: string } }) => {
  
  const searchedProducts = await getSearchedProducts(params.query);
  const decodedQuery = decodeURIComponent(params.query); // Dekodiranje upita za prikaz u čitljivom formatu

  return (
    <div className='bg-black flex flex-col items-center mt-4 mx-4'>
      <SearchNav />
      <div className='flex flex-col items-center'> 
        <p className='text-heading3-bold my-10 text-center'>Search results for {decodedQuery}</p>
        
        {/* Prikaz poruke ako nema rezultata */}
        {(!searchedProducts || searchedProducts.length === 0) && (
          <p className='text-body-bold my-5 text-center text-gold'>No results found</p> 
        )}
        
        {/* Prikaz kartica proizvoda */}
        <div className='flex flex-wrap justify-center gap-16 mb-10'> 
          {searchedProducts?.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";
export default SearchPage;

