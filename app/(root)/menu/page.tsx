import PromoCard from "@/components/layout/PromoCard";
import SearchNav from "@/components/layout/SearchNav";
import Separator from "@/components/layout/Separator";
import ProductList from "@/components/ProductList";

const Menu = () => {
  return (
    <div className="flex flex-col items-center mt-4 mx-5">
      <SearchNav />
      <div className="hidden md:flex w-full justify-between items-start mt-8">
        <div className="w-1/3">
          <PromoCard />
        </div>
        <div className="w-2/3"> 
          <ProductList />
        </div>
      </div>

      {/* Prikaz za mobilne uređaje */}
      <div className="flex flex-col md:hidden w-full mt-10 items-center">
        <PromoCard /> 
        <ProductList /> 
      </div>

      <Separator />
    </div>
  );
};

export default Menu;
export const dynamic = "force-dynamic";












