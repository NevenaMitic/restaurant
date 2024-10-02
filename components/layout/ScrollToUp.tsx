"use client";
import { useState, useEffect, useCallback } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToUp = () => {
  const [visible, setVisible] = useState(false); // Stanje za vidljivost dugmeta

  // Funkcija za pomeranje na vrh stranice
  const scrollToTop = useCallback(() => {
    scroll.scrollToTop(); 
  }, []);

 // Funkcija za upravljanje scroll događajem
  const handleScroll = useCallback(() => {
    if (window.scrollY > 400) { 
      setVisible(true); // Prikazuje dugme ako je skrolovanje veće od 400px
    } else {
      setVisible(false);
    }
  }, []);

  // Efekat za dodavanje i uklanjanje scroll događaja
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
   
      <button
        onClick={scrollToTop} // Poziva funkciju za pomeranje na vrh stranice kada se klikne
        className={`fixed bottom-4 right-4 w-12 h-12 bg-gold text-white rounded-full  flex items-center justify-center cursor-pointer transition-opacity duration-300 
        ${visible ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Scroll to top"
      >
       <span className="text-body-bold">↑</span>
      </button>
  );
};

export default ScrollToUp;