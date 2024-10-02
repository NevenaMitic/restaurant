import { ClerkLoaded, SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
    return (
        <div className="relative h-screen w-screen">
            <div className="absolute inset-0">
                <Image
                    src="/background.jpg"
                    alt="Background image"
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                    quality={100}
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-black opacity-40 "></div>

            <div className="relative flex h-full">
                {/*Leva strana ekrana */}
                <div className="flex-1 flex justify-center items-center">
                    <ClerkLoaded>
                        <SignUp path="/signup" />
                    </ClerkLoaded>
                </div>
                {/* Desna strana ekrana */}
                <div className="flex-1 md:flex hidden flex-col justify-center items-center bg-gray-200 bg-opacity-5 backdrop-blur-sm p-8 rounded-lg shadow-xl">
                    <img
                        src="/logoimg.png"
                        alt="TSUBAKI Logo"
                        className="mb-6"
                        style={{ width: "380px", height: "auto", filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.25))" }}
                    />
                    <div className="text-center">
                        <p className="text-heading1-bold font-playfair text-gold-1 uppercase tracking-wider mb-4">
                        Dive into Flavor 
                        </p>
                        <p className="text-heading2-bold font-playfair text-gold-1 uppercase tracking-wider mb-4">
                        Join the Tsubaki Sushi Family
                        </p>
                        <p className="mt-11 mx-4 text-heading4 font-playfair text-white tracking-wider leading-relaxed">
                            Create Your Account and Start Your Culinary Journey
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
