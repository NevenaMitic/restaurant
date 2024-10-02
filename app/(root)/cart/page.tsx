"use client";
import Separator from "@/components/layout/Separator";
import useCart from "@/lib/hooks/useCart";
import { useUser } from "@clerk/nextjs";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart(); // Uzimanje podataka iz korpe
  const [showCheckoutItems] = useState(false);

  // Izračunavanje ukupne cene u korpi
  const total = cart.cartItems.reduce((acc, cartItem) => {
    const priceWithDiscount = cartItem.item.discount > 0
      ? cartItem.item.price * (1 - cartItem.item.discount / 100)
      : cartItem.item.price;

    return acc + priceWithDiscount * cartItem.quantity;
  }, 0);

  const totalRounded = parseFloat(total.toFixed(2));

  // Informacije o korisniku za checkout
  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  // Funkcija za procesuiranje checkout-a
  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("/login");
        return;
      }

      const checkoutItems = cart.cartItems.map(cartItem => ({
        ...cartItem,
        price: cartItem.item.discount > 0
          ? cartItem.item.price * (1 - cartItem.item.discount / 100)
          : cartItem.item.price,
      }));

      // Slanje podataka za checkout na server
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems: checkoutItems, customer }),
      });

      if (!res.ok) {
        throw new Error("Failed to create checkout session");
      }

      const data = await res.json();
      window.location.href = data.url;
    } catch (err) {
      console.error("[checkout_POST]", err);
    }
  };

  // Izgled Korpe
  return (
    <div>
      <Separator />
      <div className="flex gap-20 bg-black min-h-screen px-10 max-lg:flex-col max-sm:px-3">
        <div className="w-2/3 max-lg:w-full">
          <p className="text-heading3-bold font-playfair text-gold-1 md:mt-4">
            Pending Selections
          </p>
          <hr className="border-t-2 border-gold-1 mt-2" />

          {cart.cartItems.length === 0 ? (
            // Poruka kada je korpa prazna
            <p className="text-heading4-bold font-extralight text-gold-1 mt-4">
              Your order is waiting to be filled! Discover our delightful dishes to begin.
            </p>
          ) : (
            // Izgled Korpe kada je puna
            <div>
              {cart.cartItems.map((cartItem) => {
                // Izračunavanje cene sa popustom
                const priceWithDiscount = cartItem.item.discount > 0
                  ? cartItem.item.price * (1 - cartItem.item.discount / 100)
                  : cartItem.item.price;

                return (
                  <div
                    key={cartItem.item._id}
                    className="w-full flex max-sm:flex-col max-sm:gap-3 px-4 py-3 items-center max-sm:items-start justify-between"
                  >
                    {/* Prikaz slike i informacija o proizvodu */}
                    <div className="flex items-center">
                      <Image
                        src={cartItem.item.media[0]}
                        width={100}
                        height={100}
                        className="w-32 h-32 object-cover"
                        alt="product"
                      />
                      <div className="flex text-gold-1 flex-col gap-3 ml-4">
                        <p className="text-heading4-bold font-playfair">{cartItem.item.title}</p>
                        {cartItem.item.discount > 0 && (
                          // Prikaz originalne cene sa popustom
                          <p className="text-small-medium font-extralight text-yellow-1">
                            <span className="line-through">{cartItem.item.price.toFixed(2)} EUR</span>
                            {" "} -{cartItem.item.discount}% off
                          </p>
                        )}
                        {/* Prikaz cene sa popustom ili bez njega */}
                        <p className="text-base-bold font-extralight text-white">
                          {priceWithDiscount.toFixed(2)} EUR
                        </p>
                        <p className="text-small-medium uppercase font-extralight text-gold-1">
                          {cartItem.pieces !== undefined
                            ? `${cartItem.pieces} ${Number(cartItem.pieces) === 1 ? "portion" : "pieces"}`
                            : ""}
                        </p>
                      </div>
                    </div>

                    {/* Kontrole za količinu i brisanje */}
                    <div className="flex gap-4 items-center">
                      <MinusCircle
                        className="text-gold-1 hover:text-white cursor-pointer"
                        onClick={() => cart.decreaseQuantity(cartItem.item._id)}
                        style={{ width: "24px", height: "24px" }}
                      />
                      <p
                        className="text-body-bold text-gold-1"
                        style={{ width: "40px", textAlign: "center" }}
                      >
                        {cartItem.quantity}
                      </p>
                      <PlusCircle
                        className="text-gold-1 hover:text-white cursor-pointer"
                        onClick={() => cart.increaseQuantity(cartItem.item._id)}
                        style={{ width: "24px", height: "24px" }}
                      />
                      <Trash
                        className="text-gold-1 hover:text-red-1 cursor-pointer ml-10"
                        onClick={() => cart.removeItem(cartItem.item._id)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Desna strana - Pregled narudžbe */}
        <div className="w-1/3 max-lg:w-full flex flex-col bg-gold-1 bg-opacity-80 shadow-gold-500 shadow-lg gap-6 px-6 mt-5 py-5 h-72">
          <p className="font-playfair uppercase justify-center flex text-body-bold text-black">Order Summary</p>
          <hr className="w-full border-black" />

          {/* Prikaz količine proizvoda */}
          <div className="flex justify-between text-black text-base-bold font-montserrat uppercase">
            <span>Quantity: </span>
            <span>
              {cart.cartItems.length === 0
                ? "No items"
                : `${cart.cartItems.length} ${cart.cartItems.length === 1 ? "item" : "items"}`}
            </span>
          </div>

          {/* Prikaz troškova dostave */}
          <div className="flex justify-between text-black text-base-bold font-montserrat uppercase">
            <span>Delivery: </span>
            <span>FREE</span>
          </div>

          {/* Prikaz ukupne cene */}
          <div className="flex justify-between text-body-bold uppercase font-montserrat">
            <span>Total:</span>
            <span>{totalRounded} EUR</span>
          </div>

          {/* Dugme za checkout */}
          <button
            className="bg-black py-3 mt-auto w-full text-base-bold uppercase text-gold-1 hover:text-white"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Prikaz stavki u checkout-u ako su vidljive */}
      {showCheckoutItems && (
        <div className="mt-5 p-4 bg-gray-800 text-gold-1">
          <h3 className="text-heading4-bold">Checkout Items:</h3>
          <ul>
            {cart.cartItems.map((cartItem) => (
              <li key={cartItem.item._id}>
                {cartItem.item.title} -
                {cartItem.item.discount > 0
                  ? (cartItem.item.price * (1 - cartItem.item.discount / 100)).toFixed(2)
                  : cartItem.item.price.toFixed(2)}
                EUR
              </li>
            ))}
          </ul>
        </div>
      )}
      <Separator />
    </div>
  );
};
export default Cart;
export const dynamic = "force-dynamic";
