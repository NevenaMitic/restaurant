"use client"
import { Quote } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactUs = () => {
    return (
        <div className="relative flex flex-col md:flex-row">
            {/* Leva strana sa slikom i opisom */}
            <motion.div 
                className="relative w-full md:w-1/2 h-[70vh] md:h-screen flex items-center justify-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.25 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <img
                    src="/contactimg.jpg"
                    alt="Restaurant"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-65 text-center">
                    <Quote className="text-gold-1 font-extralight mb-4" size={60} strokeWidth={1} />
                    <p className="text-body-bold font-extralight text-gold-1 mx-5">
                        In our kitchen, every ingredient is carefully selected with the intention of creating unforgettable moments. I believe that food
                        is much more than what we put on a plate; it is an art that brings people together, evokes emotions, and creates memories that last forever.
                    </p>
                    <p className='text-white text-body-bold font-extralight mt-4'>Kevin Kowalsky - Restaurant’s chef</p>
                </div>
            </motion.div>

            {/* Desna strana sa blokom informacija o kontaktu */}
            <motion.div 
                className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-10 mb-20 bg-black"
                whileInView={{ opacity: 1, y: 75 }} 
                initial={{ opacity: 0, y: 75 }} 
                transition={{ duration: 0.30 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="border p-10 w-full text-center relative pb-20">
                    <p className="text-heading2-bold font-playfair text-gold-1 mb-4">Contact Information</p>
                    <p className="text-base-bold font-montserrat text-gold-1 mb-2">Beograd, Bulevar Kralja Aleksandra 123, 11000 Beograd</p>

                    {/* Email */}
                    <div className="flex flex-col md:flex-row justify-center items-center text-gold mb-5 flex-wrap">
                        <Link href="mailto:info@tsubaki.com" className="hover:underline text-base-bold font-montserrat md:w-auto w-full mb-2 md:mb-0 text-center">info@tsubaki.com</Link>
                        <span className="text-base-medium font-extralight hidden md:block mx-2">|</span>
                        <Link href="mailto:onlineorder@tsubaki.com" className="hover:underline text-base-bold font-montserrat md:w-auto w-full text-center">onlineorder@tsubaki.com</Link>
                    </div>

                    {/* Radno vreme */}
                    <p className="text-heading3-bold text-gold-1 font-playfair mb-4 md:text-3xl">Opening Hours</p>
                    <div className="flex justify-center items-center text-gold space-x-4">
                        {/* Monday – Friday */}
                        <div className="text-center">
                            <p className="text-base-bold font-montserrat">Monday – Friday</p>
                            <p className="text-base-medium font-extralight">11.00 AM – 11.00 PM</p>
                        </div>

                        <span className="text-base-medium font-extralight hidden md:block">|</span>

                        {/* Saturday – Sunday */}
                        <div className="text-center">
                            <p className="text-base-bold font-montserrat">Saturday – Sunday</p>
                            <p className="text-base-medium font-extralight mb-2">12.00 AM – 12.00 PM</p>
                        </div>
                    </div>

                    {/* Broj telefona */}
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                        <Link href="tel:+381111234567" className="text-gold-1 py-2 px-5 border hover:bg-gold hover:text-black">
                            +381 11 123 4567
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
export default ContactUs;
