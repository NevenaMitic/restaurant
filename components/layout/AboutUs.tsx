"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useRef } from 'react';

const AboutUs = () => {
    // Referenca na div koji će služiti kao ograničenje za vučenje slike
    const constraintsRef = useRef(null);
    return (
        <div ref={constraintsRef} className="relative w-full h-screen">
            {/* Motion div sa slikom koja se može vući i rotirati */}
            <motion.div
                className="absolute left-[280px] top-[170px] z-50"
                drag
                dragElastic={0.2}
                dragConstraints={constraintsRef}
                whileDrag={{ rotate: 360 }}
            >
                <Image
                    src="/sushi.jpg"
                    height={190}
                    width={190}
                    alt="cursor"
                    draggable="false"
                />
            </motion.div>

            <motion.div
                className="absolute bottom-6 right-20 z-50"
                drag
                dragElastic={0.2}
                dragConstraints={constraintsRef}
                whileDrag={{ rotate: 360 }}
            >
                <div className="transform rotate-180">
                    <Image
                        src="/sushi.jpg"
                        height={150}
                        width={150}
                        alt="cursor"
                        draggable="false"
                    />
                </div>
            </motion.div>

            {/* Pozadinska slika */}
            <div className="bg-cover bg-center bg-no-repeat absolute inset-0"
                style={{ backgroundImage: 'url(/aboutimg.png)' }}></div>

            {/* Tamni sloj */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Tekstualni deo */}
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full text-white relative px-4 md:px-8">
                <div className="text-center mb-8">
                    <p className="text-heading3-bold font-playfair text-gold">Discover</p>
                    <p className="text-heading1-bold font-playfair text-white">Our Story</p>
                </div>

                {/* Opis */}
                <div className="text-body-bold font-extralight space-y-4 text-gold-1 mt-5">
                    <p>
                        We are dedicated to crafting exquisite sushi dishes using the finest ingredients. Each plate is a combination of
                        tradition and modern techniques, delivering an unforgettable dining experience.
                    </p>
                    <p>
                        At Tsubaki, every dish is a work of art, meticulously prepared by our experienced chefs who are committed to
                        preserving the authenticity of Japanese cuisine while infusing it with a modern twist.
                    </p>
                    <p>
                        Our cozy and elegant ambiance provides the perfect setting for a relaxing meal, whether you're enjoying a quiet dinner for two
                        or celebrating a special occasion. We invite you to join us on this culinary journey.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default AboutUs;
