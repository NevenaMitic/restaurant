import { getOrders } from "@/lib/actions";
import { auth } from "@clerk/nextjs/server";
import Separator from "@/components/layout/Separator";
import OrdersInfo from "@/components/OrdersInfo";

const Orders = async () => {
  const { userId } = auth();
  const orders = await getOrders(userId as string);

  return (
    <>
      <Separator />
      <div className="px-6 max-sm:px-4 bg-black min-h-screen flex flex-col items-center">
        <p className="text-heading3-bold font-playfair text-gold-1 text-center mb-4">
          Your Orders
        </p>
        <OrdersInfo />
      </div>
      <Separator /> 
    </>
  );
};

export default Orders;
export const dynamic = "force-dynamic";


