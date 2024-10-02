import { getOrders } from "@/lib/actions";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

//Prikaz svih narudžbina za kupca
const OrdersInfo = async () => {
  const { userId } = auth();
  const orders = await getOrders(userId as string);

  // Sortiranje narudžbina po datumu kreiranja u opadajućem redosledu
  const sortedOrders = orders ? orders.sort((a: OrderType, b: OrderType) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) : [];

  return (
    <div className="flex items-center justify-center mt-4">
      {(!orders || orders.length === 0) && (
        <p className="font-playfair text-lg text-gold-1 text-center">You have no orders yet.</p>
      )}

      {sortedOrders.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center ">
          {sortedOrders.map((order: OrderType) => (
            <div
              key={order._id}
              className="p-6 transition-transform transform hover:scale-105 border border-gold shadow-lg shadow-gold-500 animate-fade-in">

              {/* ID, datum i ukupna cena porudžbine */}
              <div className="flex flex-col gap-1 mb-4">
                <div className="flex justify-between text-gold-1">
                  <span className="text-base-medium font-montserrat uppercase mr-2">Order ID:</span>
                  <span className="text-gold text-base-medium font-extralight uppercase">{order._id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gold-1 text-base-medium font-montserrat uppercase">Date:</span>
                  <span className="text-gold text-base-medium font-extralight uppercase">{new Date(order.createdAt).toLocaleString()}</span>
                </div>
                <hr className="w-full my-1 border-gold" />
                <div className="flex justify-between text-gold-1 text-base-bold font-montserrat uppercase">
                  <span>Total:</span>
                  <span className="text-white">{order.totalAmount} EUR</span>
                </div>
              </div>

              {/* Detalji porudžbine */}
              <div className="flex flex-col gap-4">
                {order.products.map((orderItem: OrderItemType) => (
                  orderItem.product && (
                    <div key={orderItem.product._id} className="flex gap-4 items-center p-4 bg-black rounded-lg shadow-md transition-shadow hover:shadow-lg">
                      {orderItem.product.media && orderItem.product.media.length > 0 && (
                        <Image
                          src={orderItem.product.media[0]}
                          alt={orderItem.product.title}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      )}

                      <div className="flex flex-col justify-between flex-grow">
                        <p className="text-base-bold text-gold">
                          <span>{orderItem.product.title}</span>
                        </p>

                        {/* Proverava da li proizvod ima popust */}
                        {orderItem.product.discount ? (
                          <div className="flex items-center">
                            <p className="line-through font-extralight text-yellow-1">{orderItem.product.price} EUR</p>
                            <p className="text-sm text-yellow-1 font-extralight ml-2">- {orderItem.product.discount}%</p>
                            <p className="text-white text-base-bold ml-6">{orderItem.product.discountedPrice} EUR</p>
                          </div>
                        ) : (
                          <p className="text-white">{orderItem.product.price} EUR</p>
                        )}

                        <div className="flex justify-between font-extralight text-gold">
                          <span>Qty: <span>{orderItem.quantity}</span></span>
                          <span>Pieces: <span>{orderItem.pieces}</span></span>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersInfo;

