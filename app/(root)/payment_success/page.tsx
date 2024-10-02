"use client";
import Separator from "@/components/layout/Separator";
import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useEffect } from "react";

// Definicija funkcionalne komponente SuccessfulPayment
const SuccessfulPayment = () => {
  const cart = useCart(); // Inicijalizacija korpe korišćenjem useCart hook-a

  useEffect(() => { 
    cart.clearCart(); // Brisanje svih stavki iz korpe
  }, []); // Prazna zavisnost, useEffect se izvršava samo jednom nakon prvog renderovanja

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center gap-8 text-center">
      <Separator /> 

      <video
        src="/success.mp4"
        autoPlay
        loop
        muted
        width={300}
        height={100}
      />

      <p className="text-heading2-bold font-playfair text-gold-1">Order Successful</p>
      <p className="text-heading4 font-playfair text-gold-1 px-5">
        Thank you for your purchase! Our team is preparing your order.
      </p>
      <Link
        href="/menu"
        className="p-4 border border-gold text-base-bold font-playfair text-gold hover:bg-gold hover:text-black"
      >
        CONTINUE SHOPPING
      </Link>

      <Separator />
    </div>
  );
};

export default SuccessfulPayment;
export const dynamic = "force-dynamic";
