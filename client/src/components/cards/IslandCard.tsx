import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, X, Clock, Info, Star, ArrowRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface IslandProps {
  id: string;
  name: string;
  description: string;
  priceLevel: string;
  rating?: number;
  reviews?: number;
  includes: string[];
  notIncludes: string[];
  schedule?: { departure: string; return: string };
  conditions?: string;
  policies?: string;
}

export function IslandCard({ island, index }: { island: IslandProps; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <Dialog>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className={cn(
          "group flex flex-col gap-8 items-center mb-24 relative",
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        )}
      >
        {/* Decorative Background Line */}
        <div className={cn(
          "hidden lg:block absolute top-1/2 w-screen h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10",
          isEven ? "left-1/2" : "right-1/2"
        )} />

        {/* Image Section - Floating & Immersive */}
        <div className="w-full lg:w-1/2 relative px-4 lg:px-0">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-deep-blue/10 aspect-[4/3] group-hover:-translate-y-2 transition-transform duration-500 ease-out">
            <img
              src={images[island.id as keyof typeof images] || images.island}
              alt={island.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Floating Badges */}
            <div className="absolute top-6 left-6 flex flex-col gap-3">
               <Badge className="bg-white/90 backdrop-blur text-deep-blue border-none px-4 py-1.5 text-xs uppercase tracking-wider font-bold shadow-lg">
                 {island.priceLevel}
               </Badge>
               {island.rating && (
                 <Badge className="bg-yellow-400 text-deep-blue border-none px-3 py-1 font-bold shadow-lg flex items-center gap-1">
                   <Star className="w-3 h-3 fill-current" /> {island.rating}
                 </Badge>
               )}
            </div>
          </div>
          
          {/* Stylized Number */}
          <div className={cn(
            "absolute -bottom-10 font-serif text-9xl text-slate-100 font-bold -z-10 select-none",
            isEven ? "-left-8" : "-right-8"
          )}>
            0{index + 1}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 px-4 lg:px-12 flex flex-col justify-center">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
               <MapPin className="w-4 h-4 text-turquoise" />
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Islas del Rosario</span>
            </div>
            <h3 className="font-serif text-4xl lg:text-5xl font-bold text-deep-blue mb-6 leading-tight group-hover:text-turquoise transition-colors duration-300">
              {island.name}
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
              {island.description}
            </p>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {island.includes.slice(0, 4).map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-turquoise/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-turquoise" />
                  </div>
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-8">
               <div className="flex items-start gap-3 text-sm text-slate-600">
                 <Clock className="w-4 h-4 text-deep-blue mt-1 shrink-0" />
                 <div>
                   <span className="font-bold text-deep-blue block mb-1">Horario de Pasadía</span>
                   {island.schedule ? `${island.schedule.departure} - ${island.schedule.return}` : 'Día Completo'}
                 </div>
               </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://wa.me/573234362220?text=Hola, estoy interesado en reservar esta isla." target="_blank" rel="noopener noreferrer" className="h-14 px-8 rounded-full bg-deep-blue text-white hover:bg-turquoise hover:text-deep-blue transition-all shadow-xl shadow-deep-blue/20 text-base font-bold group/btn inline-flex items-center justify-center">
                Reservar Experiencia <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
              
              <DialogTrigger asChild>
                <span className="text-sm font-medium text-slate-400 underline decoration-slate-300 underline-offset-4 hover:text-deep-blue cursor-pointer transition-colors">
                  Ver detalles completos
                </span>
              </DialogTrigger>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Full Details Modal */}
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white rounded-3xl border-none shadow-2xl w-[95vw] max-h-[90vh] sm:max-h-[95vh]">
        <div className="flex flex-col md:grid md:grid-cols-5 h-[90vh] md:h-[80vh]">
            {/* Sidebar / Header Image - Collapses to banner on mobile */}
            <div className="md:col-span-2 relative h-24 sm:h-32 shrink-0 md:h-full">
                <img src={images[island.id as keyof typeof images] || images.island} alt={island.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent md:bg-deep-blue/20" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <Badge className="mb-2 bg-turquoise text-deep-blue hover:bg-white border-none shadow-lg text-xs">{island.priceLevel}</Badge>
                    <h3 className="font-serif text-xl md:text-4xl font-bold leading-tight mb-1">{island.name}</h3>
                    <div className="flex items-center gap-2 text-white/80 text-xs md:text-sm">
                      <MapPin className="w-3 w-3 md:w-4 md:h-4" /> Islas del Rosario
                    </div>
                </div>
            </div>

            {/* Content - Fully scrollable on mobile */}
            <div className="md:col-span-3 bg-white flex flex-col h-full overflow-hidden">
                <ScrollArea className="flex-grow p-5 md:p-10 overflow-y-auto">
                    <DialogHeader className="mb-6 md:mb-8 text-left">
                        <DialogTitle className="sr-only">{island.name} Detalles</DialogTitle>
                        <DialogDescription className="text-sm md:text-lg text-slate-700 font-light leading-relaxed whitespace-pre-wrap break-words">
                            {island.description}
                            
Disfruta de un día inolvidable en este paraíso caribeño, diseñado para ofrecerte el máximo confort y exclusividad.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 sm:space-y-6 md:space-y-10 pb-28 sm:pb-24 md:pb-0">
                        {/* Includes */}
                        <div>
                            <h4 className="font-bold text-deep-blue mb-4 md:mb-5 flex items-center gap-2 text-base md:text-lg">
                                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-turquoise/10 flex items-center justify-center">
                                  <Check className="w-4 h-4 md:w-5 md:h-5 text-turquoise" />
                                </div>
                                Lo que incluye tu experiencia
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                                {island.includes.map((item, i) => (
                                    <li key={i} className="text-xs md:text-sm text-slate-600 flex items-start gap-2 md:gap-3 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-turquoise mt-1.5 md:mt-2 shrink-0 group-hover/item:scale-125 transition-transform" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Separator />

                        {/* Not Includes & Schedule */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div>
                                <h4 className="font-bold text-deep-blue mb-3 md:mb-4 flex items-center gap-2 text-base">
                                    <X className="w-4 h-4 md:w-5 md:h-5 text-red-400" /> No incluye
                                </h4>
                                <ul className="space-y-2 md:space-y-3">
                                    {island.notIncludes.map((item, i) => (
                                        <li key={i} className="text-xs md:text-sm text-slate-500 flex items-start gap-2">
                                            <span className="text-red-300 text-xs mt-0.5">•</span> <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-deep-blue mb-3 md:mb-4 flex items-center gap-2 text-base">
                                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-deep-blue" /> Itinerario
                                </h4>
                                {island.schedule && (
                                    <div className="bg-slate-50 p-4 md:p-5 rounded-2xl border border-slate-100 space-y-2 md:space-y-3">
                                        <div className="flex justify-between text-xs md:text-sm items-center">
                                            <span className="text-slate-500">Zarpe Muelle</span>
                                            <Badge variant="outline" className="bg-white text-deep-blue text-xs">{island.schedule.departure}</Badge>
                                        </div>
                                        <div className="w-full h-px bg-slate-200/50" />
                                        <div className="flex justify-between text-xs md:text-sm items-center">
                                            <span className="text-slate-500">Retorno Cartagena</span>
                                            <Badge variant="outline" className="bg-white text-deep-blue text-xs">{island.schedule.return}</Badge>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Policies */}
                        {(island.conditions || island.policies) && (
                            <div className="bg-amber-50/50 p-4 md:p-5 rounded-2xl border border-amber-100 text-xs md:text-sm text-amber-900/80 flex gap-3 md:gap-4">
                                <Info className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-amber-500 mt-0.5" />
                                <div>
                                    <span className="font-bold block mb-1 text-amber-700">Información Importante</span>
                                    <p className="leading-relaxed">{island.conditions} {island.policies}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>
                
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-0 md:relative md:border-t md:border-slate-200 bg-gradient-to-b from-transparent via-white/98 to-white md:bg-gradient-to-b md:from-white md:via-white md:to-white/95 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-2 sm:gap-4 md:gap-6 shrink-0 z-50 md:shadow-2xl md:shadow-slate-300/20 md:py-6 md:px-10">
                    <div className="hidden md:block">
                        <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider mb-2 font-semibold">Precio por persona</p>
                        <p className="text-xl md:text-2xl font-serif font-bold text-deep-blue">Consultar</p>
                    </div>
                    <a href="https://wa.me/573234362220?text=Hola, me gustaría reservar esta isla." target="_blank" rel="noopener noreferrer" className="w-full md:w-auto h-11 sm:h-12 md:h-14 bg-gradient-to-r from-deep-blue to-deep-blue hover:from-turquoise hover:to-turquoise text-white hover:text-deep-blue rounded-full px-6 sm:px-8 md:px-12 font-bold shadow-lg shadow-deep-blue/30 transition-all hover:-translate-y-1 text-sm sm:text-base md:text-lg inline-flex items-center justify-center">
                        Reservar Ahora <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
