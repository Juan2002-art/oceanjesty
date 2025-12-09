import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Timer, Zap, ShieldCheck, Gauge } from "lucide-react";
import { images } from "@/lib/images";
import { Badge } from "@/components/ui/badge";

interface JetskiProps {
  id: string;
  name: string;
  power: string;
  description: string;
  price: string;
  duration: string;
}

export function JetskiCard({ jetski, index }: { jetski: JetskiProps; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col relative group hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <img
          src={images[jetski.id as keyof typeof images] || images.jetski}
          alt={jetski.name}
          className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-deep-blue text-white border-none px-3 py-1.5 shadow-lg">
            <Zap className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" /> {jetski.power}
          </Badge>
        </div>
      </div>
      
      <div className="p-8 flex-grow flex flex-col relative">
        {/* Floating Price */}
        <div className="absolute -top-6 right-8 bg-turquoise text-deep-blue font-bold px-4 py-3 rounded-2xl shadow-lg border border-white">
           {jetski.price}
           <span className="block text-[10px] font-normal uppercase opacity-80">{jetski.duration}</span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-deep-blue mb-3 pr-20">{jetski.name}</h3>
        <p className="text-slate-600 mb-8 text-sm leading-relaxed">{jetski.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-50 p-3 rounded-xl flex items-center gap-3 border border-slate-100">
            <div className="bg-white p-2 rounded-full shadow-sm text-turquoise"><Timer className="h-4 w-4" /></div>
            <span className="text-xs font-semibold text-deep-blue">30 min / 1h</span>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl flex items-center gap-3 border border-slate-100">
            <div className="bg-white p-2 rounded-full shadow-sm text-turquoise"><ShieldCheck className="h-4 w-4" /></div>
            <span className="text-xs font-semibold text-deep-blue">Seguro Incl.</span>
          </div>
        </div>

        <a href="https://wa.me/573234362220?text=Hola, me gustaría reservar un jetski." target="_blank" rel="noopener noreferrer" className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white font-bold py-6 rounded-xl shadow-lg shadow-deep-blue/20 mt-auto group-hover:bg-turquoise group-hover:text-deep-blue transition-all inline-flex items-center justify-center">
          Reservar Ahora
        </a>
      </div>
    </motion.div>
  );
}
