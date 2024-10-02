import Link from "next/link";

//Banner Video na pocetku Home stranice
const Video = () => {
    return (
        <div className="relative w-full h-screen m-0 p-0 overflow-hidden">
            <video
                src="/videoBg.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
            />
            {/* Tamni sloj */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            
            {/* Tekst */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-gold text-center px-4">
                <p className="text-heading3-bold uppercase font-extralight mb-4">
                    Welcome To The
                </p>
                <p className="text-heading1-bold uppercase font-playfair mb-6">
                    TSUBAKI Japanese Sushi Restaurant
                </p>
                <p className="text-heading4-bold font-light mb-10">
                    Crafted with passion, precision, and the finest ingredients.
                </p>

                <Link href="/menu">
                    <button className="bg-gold text-black px-8 py-3 text-base-bold uppercase hover:bg-grey transition-all duration-300">
                        View Our Menu
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Video;
