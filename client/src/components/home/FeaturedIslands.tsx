import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { islands } from "@/lib/data";
import { images } from "@/lib/images";
import { ArrowUpRight, MapPin, Star } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function FeaturedIslands() {
  const [activeId, setActiveId] = useState<string | null>(islands[0].id);
  const featured = islands.slice(0, 5); // Show top 5

  return (
    <section className="py-16 sm:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-turquoise/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-deep-blue/40 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <span className="text-turquoise font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 block">
              Colección Exclusiva
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Destinos de Ensueño
            </h2>
          </div>
          <Link href="/pasadias">
            <Button variant="outline" className="hidden md:flex border-white/20 text-white hover:bg-white hover:text-deep-blue rounded-full px-6 text-sm">
              Ver Catálogo Completo
            </Button>
          </Link>
        </div>

        {/* Gallery - Stack on mobile, Expandable on desktop */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[500px] gap-3 lg:gap-4">
          {featured.map((island, idx) => (
            <motion.div
              key={island.id}
              layoutId={`island-${island.id}`}
              onClick={() => setActiveId(island.id)}
              className={cn(
                "relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out group",
                "lg:transition-all lg:duration-300",
                // Mobile: Simple stacked layout
                "h-60 sm:h-72",
                // Desktop: Expandable gallery
                "lg:h-auto",
                activeId === island.id 
                  ? "lg:flex-[3]" 
                  : "lg:flex-[1] lg:hover:flex-[1.2]"
              )}
              onMouseEnter={() => activeId !== island.id && setActiveId(island.id)}
            >
              {/* Background Image */}
              <img
                src={images[island.id as keyof typeof images] || images.island}
                alt={island.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-b transition-opacity duration-500",
                activeId === island.id
                  ? "from-transparent via-black/20 to-black/90 opacity-100"
                  : "from-black/40 via-black/60 to-black/80 opacity-100"
              )} />

              {/* Content */}
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                <AnimatePresence mode="wait">
                  {activeId === island.id || window.innerWidth < 1024 ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="space-y-2 sm:space-y-3 lg:space-y-4"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-md bg-turquoise text-deep-blue text-[9px] sm:text-xs font-bold uppercase tracking-wider">
                          {island.priceLevel}
                        </span>
                        {island.rating && (
                          <span className="flex items-center gap-1 text-yellow-400 text-[9px] sm:text-xs font-bold">
                            <Star className="w-2 h-2 sm:w-3 sm:h-3 fill-current" /> {island.rating}
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl lg:text-4xl font-bold text-white leading-tight">
                        {island.name}
                      </h3>
                      
                      <p className="text-white/80 text-xs sm:text-sm lg:text-base line-clamp-2 max-w-md">
                        {island.description}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2 sm:pt-3 lg:pt-4">
                        <Link href="/pasadias">
                           <Button className="bg-white text-deep-blue hover:bg-turquoise hover:text-deep-blue rounded-full px-3 sm:px-5 py-1.5 sm:py-2 font-bold text-xs sm:text-sm">
                             Reservar
                           </Button>
                        </Link>
                        <div className="flex items-center gap-1.5 text-white/60 text-[9px] sm:text-xs uppercase tracking-wider">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" /> Islas del Rosario
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="hidden lg:flex lg:flex-col justify-between items-start h-full"
                    >
                      <div className="transform -rotate-90 origin-bottom-left translate-x-8 mb-8 whitespace-nowrap">
                        <span className="font-serif text-2xl font-bold text-white/90 tracking-wide">
                          {island.name}
                        </span>
                      </div>
                      
                      <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm group-hover:bg-turquoise group-hover:text-deep-blue transition-colors text-white">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/pasadias">
            <Button className="w-full bg-turquoise text-deep-blue py-6 rounded-xl font-bold">
              Explorar Todas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
