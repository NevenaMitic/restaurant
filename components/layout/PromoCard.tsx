"use client";
import Link from "next/link";
import React from "react";

const promoLink = process.env.NEXT_PUBLIC_PROMO_LINK;

const PromoCard = () => {
  return (
    <div className="w-auto md:w-64 lg:w-96 h-52 mx-auto p-4 text-white border flex flex-col transition-transform transform hover:scale-105">
      <Link href={promoLink || "/"} className="flex flex-col h-full justify-between">
        {/* Naslov */}
        <p className="text-heading3-bold font-playfair text-gold-1 text-center md:text-heading3-bold lg:text-heading3-bold">
          Check Out Our Latest Promotions!
        </p>

        {/* Opis */}
        <p className="text-center text-base-bold font-montserrat text-sm md:text-body-semibold lg:text-base-medium">
          Enjoy a <span className="text-yellow-1">15% discount</span> on selected items in our special offer collection!
        </p>

        {/* Dugme za navigaciju */}
        <button className="bg-yellow-1 text-black py-2 px-4 uppercase text-small-bold hover:bg-yellow-2 transition-all duration-300 ease-in-out">
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default PromoCard;





