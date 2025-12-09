import { useState } from "react";
import { motion } from "framer-motion";
import { islands } from "@/lib/data";
import { IslandCard } from "@/components/cards/IslandCard";
import { images } from "@/lib/images";
import { Filter, Map, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pasadias() {
  const [activeFilter, setActiveFilter] = useState("todo");
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  // Categorize islands by type
  const categorizedIslands: { [key: string]: string[] } = {
    premium: ["bora-bora", "bora-bora-vip", "luxury-open-bar"],
    relax: ["isla-del-sol", "pao-pao", "islabela"],
    fiesta: ["bora-bora", "luxury-open-bar"]
  };

  // Filter islands based on active filter
  const filteredIslands = activeFilter === "todo" 
    ? islands 
    : islands.filter(island => categorizedIslands[activeFilter]?.includes(island.id));

  return (
    <div className="w-full bg-white">
      {/* Premium Header with Parallax Feel */}
      <div className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-deep-blue">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 opacity-40"
        >
            <img src={images.island} className="w-full h-full object-cover mix-blend-luminosity" alt="Background" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/40 via-transparent to-white" />
        
        <div className="container mx-auto relative z-10 text-center flex flex-col justify-center h-full gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-turquoise/60 text-turquoise text-sm font-semibold uppercase tracking-widest backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all">
                 <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse" />
                 Colección 2025
               </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 drop-shadow-2xl tracking-tight"
            >
              Islas <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-white italic pr-4">Privadas</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-light drop-shadow-xl"
            >
              Descubre el verdadero lujo caribeño. Hemos curado una selección de los destinos más exclusivos del archipiélago para ti.
            </motion.p>
          </div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8, duration: 1 }}
             className="text-deep-blue flex flex-col items-center gap-2"
          >
             <span className="text-[10px] uppercase tracking-widest font-bold">Explorar Colección</span>
             <ArrowDown className="w-5 h-5 animate-bounce" />
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-4">
          
          {/* Filter Bar - Desktop & Mobile */}
          <div className="sticky top-24 z-40 mb-24 flex justify-center">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-1 bg-white/80 backdrop-blur-xl p-3 sm:p-2 rounded-full shadow-2xl shadow-deep-blue/5 border border-slate-200/50">
              <Button 
                onClick={() => setActiveFilter("todo")}
                className={`rounded-full px-4 sm:px-6 h-10 transition-all duration-300 text-sm sm:text-base ${
                  activeFilter === "todo" 
                    ? "bg-deep-blue text-white shadow-lg" 
                    : "bg-transparent text-slate-600 hover:text-deep-blue hover:bg-slate-100"
                }`}
              >
                Todo
              </Button>
              <Button 
                onClick={() => setActiveFilter("premium")}
                className={`rounded-full px-4 sm:px-6 h-10 transition-all duration-300 text-sm sm:text-base ${
                  activeFilter === "premium" 
                    ? "bg-deep-blue text-white shadow-lg" 
                    : "bg-transparent text-slate-600 hover:text-deep-blue hover:bg-slate-100"
                }`}
              >
                Premium
              </Button>
              <Button 
                onClick={() => setActiveFilter("relax")}
                className={`rounded-full px-4 sm:px-6 h-10 transition-all duration-300 text-sm sm:text-base ${
                  activeFilter === "relax" 
                    ? "bg-deep-blue text-white shadow-lg" 
                    : "bg-transparent text-slate-600 hover:text-deep-blue hover:bg-slate-100"
                }`}
              >
                Relax
              </Button>
              <Button 
                onClick={() => setActiveFilter("fiesta")}
                className={`rounded-full px-4 sm:px-6 h-10 transition-all duration-300 text-sm sm:text-base ${
                  activeFilter === "fiesta" 
                    ? "bg-deep-blue text-white shadow-lg" 
                    : "bg-transparent text-slate-600 hover:text-deep-blue hover:bg-slate-100"
                }`}
              >
                Fiesta
              </Button>
            </div>
          </div>

          {/* Zig Zag Layout */}
          <div className="max-w-7xl mx-auto">
            {filteredIslands.map((island, index) => (
              <motion.div
                key={island.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              >
                <IslandCard island={island} index={index} />
              </motion.div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-20 bg-slate-50 rounded-[3rem] p-12 text-center border border-slate-100">
             <h3 className="font-serif text-3xl md:text-4xl font-bold text-deep-blue mb-4">¿No encuentras lo que buscas?</h3>
             <p className="text-slate-700 text-base md:text-lg mb-8 max-w-xl mx-auto font-light">
               Tenemos acceso a islas secretas y experiencias personalizadas que no están listadas aquí. Contáctanos para un itinerario a medida.
             </p>
             <a href="https://wa.me/573234362220?text=Hola, me gustaría más información sobre las islas privadas." target="_blank" rel="noopener noreferrer" className="border border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white rounded-full px-8 h-12 font-bold transition-all inline-flex items-center justify-center">
               Contactar Concierge
             </a>
          </div>

        </div>
      </section>
    </div>
  );
}
