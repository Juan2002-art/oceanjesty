import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle2, ArrowRight, Zap, Waves } from "lucide-react";
import { images } from "@/lib/images";
import { Badge } from "@/components/ui/badge";

interface BoatProps {
  id: string;
  name: string;
  type: string;
  capacity: number;
  features: string[];
  price: string;
}

export function BoatCard({ boat, index }: { boat: BoatProps; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group relative rounded-3xl overflow-hidden bg-white border-2 border-slate-100 hover:border-turquoise/50 shadow-lg hover:shadow-2xl hover:shadow-turquoise/20 transition-all duration-500 flex flex-col h-full"
    >
      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-10 pointer-events-none" />

      {/* Premium Badge */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <Badge className="bg-gradient-to-r from-turquoise to-sand text-deep-blue border-none font-bold px-4 py-1.5 uppercase tracking-wider text-xs shadow-lg">
          {boat.type}
        </Badge>
      </div>

      {/* Image Section with Overlay */}
      <div className="relative h-80 overflow-hidden bg-gradient-to-b from-deep-blue to-slate-900">
        <img
          src={images[boat.id as keyof typeof images] || images.boat}
          alt={boat.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/90 via-deep-blue/40 to-transparent" />
        
        {/* Floating Icon */}
        <motion.div 
          className="absolute top-6 left-6 bg-turquoise/20 backdrop-blur border border-turquoise/40 p-3 rounded-2xl"
          initial={{ y: 0 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Waves className="w-6 h-6 text-turquoise" />
        </motion.div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h3 className="font-serif text-3xl font-bold mb-2 group-hover:text-sand transition-colors duration-300">{boat.name}</h3>
          <p className="text-white/90 text-sm flex items-center gap-2 font-light">
            <Users className="w-4 h-4 text-turquoise" /> Hasta {boat.capacity} personas
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex-grow flex flex-col relative z-10">
        {/* Características */}
        <div className="space-y-4 mb-10">
          <h4 className="text-xs font-bold text-turquoise uppercase tracking-widest flex items-center gap-2">
            <Zap className="w-4 h-4" /> Características Premium
          </h4>
          <ul className="space-y-2.5">
            {boat.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-turquoise to-sand mt-1.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8" />

        {/* Footer with Price and CTA */}
        <div className="mt-auto flex items-end justify-between gap-4">
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Desde</p>
            <p className="text-2xl font-serif font-bold text-deep-blue">{boat.price}</p>
            <p className="text-xs text-slate-500 mt-1">por día</p>
          </div>
          <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
            <a href="https://wa.me/573234362220?text=Hola, me gustaría reservar este bote." target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-turquoise to-sand text-deep-blue hover:shadow-lg hover:shadow-turquoise/30 rounded-full px-6 h-12 font-bold flex items-center gap-2 transition-all inline-flex">
              Reservar
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
