"use client";
import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { user } = useUser();
    const cart = useCart();

    const [dropdownMenu, setDropdownMenu] = useState(false);
    const [query, setQuery] = useState("");

    return (
        <div className="sticky font-montserrat text-gold-1 top-0 z-10 px-10 flex gap-2 items-center bg-grey max-sm:px-2">
            <div className="flex gap-6 uppercase mx-40 max-lg:hidden">
                <Link
                    href="/"
                    className={`hover:text-gold-1 ${pathname === "/" && "text-white"}`}
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className={`hover:text-gold-1 ${pathname === "/about" && "text-white"}`}
                >
                    About
                </Link>
            </div>
    
            <Link href="/" className="flex justify-center mx-auto">
                <Image
                    src="/logoimg.png"
                    alt="logo"
                    width={130}
                    height={100}
                    className="max-md:w-24 max-md:h-20 max-lg:w-28 max-lg:h-24"
                />
            </Link>
    
            <div className="flex gap-6 uppercase mx-40 max-lg:hidden">
                <Link
                    href={user ? "/orders" : "/login"}
                    className={`hover:text-gold-1 ${pathname === "/orders" && "text-white"}`}
                >
                    Orders
                </Link>
                <Link
                    href="/menu"
                    className={`hover:text-gold-1 ${pathname === "/products" && "text-white"}`}
                >
                    Menu
                </Link>
            </div>
    
            <div className="relative flex gap-3 items-center">
                <Link
                    href="/cart"
                    className="flex items-center gap-3 rounded-xl px-2 py-1 hover:bg-gold hover:text-white max-lg:hidden"
                >
                    <ShoppingCart />
                    <p className="text-base-bold">
                        {cart.cartItems.length > 0 ? cart.cartItems.length : ''} 
                    </p>
                    {cart.cartItems.length === 0 && <span className="text-gold"></span>}
                </Link>
    
                <Menu
                    className="cursor-pointer lg:hidden"
                    onClick={() => setDropdownMenu(!dropdownMenu)}
                />
    
                {dropdownMenu && ( //Dropdown menu za manje ekrane
                    <div className="absolute top-12 uppercase right-5 flex flex-col gap-4 p-3 rounded-lg border bg-grey text-gold-1 lg:hidden">
                        <Link href="/" className="hover:text-white">
                            Home
                        </Link>
                        <Link href="/menu" className="hover:text-white">
                            Menu
                        </Link>
                        <Link
                            href={user ? "/orders" : "/login"}
                            className="hover:text-white"
                        >
                            Orders
                        </Link>
                        <Link href="/about" className="hover:text-white">
                            About
                        </Link>
                        <Link
                            href="/cart"
                            className="flex items-center hover:text-white"
                        >
                            <p className="text-base-bold">
                                Cart {cart.cartItems.length > 0 ? cart.cartItems.length : ''}
                            </p>
                        </Link>
                    </div>
                )}
    
                {user ? (
                    <UserButton afterSignOutUrl="/login" />
                ) : (
                    <Link href="/login">
                        <CircleUserRound />
                    </Link>
                )}
            </div>
        </div>
    );    
};

export default Navbar;