import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/aerial_view_of_rosario_islands_with_turquoise_water_and_boats..png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
          <img 
            src={heroImage} 
            alt="Islas del Rosario Aérea" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/70 via-deep-blue/30 to-deep-blue/60" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-2 px-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-md text-sm font-medium tracking-[0.2em] uppercase mb-8 text-turquoise shadow-lg shadow-turquoise/10">
            Cartagena · Colombia
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-8 drop-shadow-2xl tracking-tight"
        >
          <span className="block text-white/90">Vive el</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-turquoise via-white to-turquoise bg-[length:200%_auto] animate-shine italic pr-4">
            Caribe
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-white/80 max-w-3xl mb-12 font-light leading-relaxed"
        >
          Islas privadas, botes de lujo y experiencias diseñadas para <span className="font-semibold text-white">viajeros exigentes</span>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 w-full max-w-md sm:max-w-none justify-center"
        >
          <Link href="/pasadias">
            <Button className="h-14 px-8 text-lg bg-white text-deep-blue hover:bg-turquoise hover:text-deep-blue rounded-full transition-all duration-300 font-bold shadow-xl hover:shadow-turquoise/50 hover:-translate-y-1 group">
              Explorar Islas
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/botes">
            <Button variant="outline" className="h-14 px-8 text-lg border-white/40 text-white bg-white/5 backdrop-blur-md hover:bg-white/20 hover:border-white rounded-full transition-all duration-300 font-medium hover:-translate-y-1">
              Alquilar Bote
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-white/60 mix-blend-overlay"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
        <span className="text-[10px] tracking-[0.3em] uppercase font-light">Scroll</span>
      </motion.div>
    </section>
  );
}
