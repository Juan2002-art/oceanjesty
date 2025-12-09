import { motion } from "framer-motion";
import { boats } from "@/lib/data";
import { BoatCard } from "@/components/cards/BoatCard";
import { images } from "@/lib/images";
import { Anchor, ShieldCheck, Compass, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Botes() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Premium Header */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-deep-blue via-deep-blue to-slate-900">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-turquoise/10 blur-3xl" />
          <div className="absolute -bottom-40 left-20 w-96 h-96 rounded-full bg-turquoise/10 blur-3xl" />
        </div>

        <div className="absolute inset-0 z-0">
          <img 
            src={images.boat} 
            alt="Botes de Lujo" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-turquoise/30 backdrop-blur"
          >
            <Badge className="bg-turquoise text-deep-blue border-none">Oceanjestky Fleet</Badge>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Navega sin <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-sand">Límites</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Tu propia isla privada en movimiento. Nuestra flota de yates y catamaranes redefiniendo el lujo en el Caribe colombiano.
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-white/10 pt-10"
          >
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-turquoise">100%</p>
              <p className="text-xs text-white/90 uppercase tracking-wider mt-2 font-semibold">Privacidad</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-turquoise">24h</p>
              <p className="text-xs text-white/90 uppercase tracking-wider mt-2 font-semibold">Soporte VIP</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-turquoise">5★</p>
              <p className="text-xs text-white/90 uppercase tracking-wider mt-2 font-semibold">Servicio</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Premium Benefits Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-50 border-2 border-turquoise/20 rounded-3xl p-8 hover:border-turquoise/50 hover:bg-turquoise/5 transition-all duration-300 shadow-lg shadow-slate-200/30"
            >
              <div className="bg-gradient-to-br from-turquoise to-sand p-4 rounded-2xl w-fit mb-6">
                <Anchor className="w-8 h-8 text-deep-blue" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-deep-blue mb-3">Tripulación Experta</h4>
              <p className="text-slate-700 leading-relaxed font-light text-base">Capitán y marinero profesional en cada viaje, con experiencia en aguas del Caribe</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 border-2 border-turquoise/20 rounded-3xl p-8 hover:border-turquoise/50 hover:bg-turquoise/5 transition-all duration-300 shadow-lg shadow-slate-200/30"
            >
              <div className="bg-gradient-to-br from-sand to-turquoise p-4 rounded-2xl w-fit mb-6">
                <ShieldCheck className="w-8 h-8 text-deep-blue" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-deep-blue mb-3">Seguridad Total</h4>
              <p className="text-slate-700 leading-relaxed font-light text-base">Botes certificados, pólizas actualizadas y mantenimiento riguroso en todo momento</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 border-2 border-turquoise/20 rounded-3xl p-8 hover:border-turquoise/50 hover:bg-turquoise/5 transition-all duration-300 shadow-lg shadow-slate-200/30"
            >
              <div className="bg-gradient-to-br from-turquoise to-sand p-4 rounded-2xl w-fit mb-6">
                <Compass className="w-8 h-8 text-deep-blue" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-deep-blue mb-3">Itinerario Flexible</h4>
              <p className="text-slate-700 leading-relaxed font-light text-base">Tú decides dónde ir, cuándo parar y qué explorar en nuestro hermoso archipiélago</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showcase Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-turquoise/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-sand/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-8 bg-gradient-to-r from-turquoise to-sand rounded-full" />
              <span className="text-turquoise font-bold uppercase tracking-widest text-sm">Nuestra Colección Premium</span>
              <div className="h-1 w-8 bg-gradient-to-l from-turquoise to-sand rounded-full" />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-deep-blue mb-6">Embarcaciones Excepcionales</h2>
            <p className="text-slate-700 text-lg max-w-3xl mx-auto font-light">Cada bote en nuestra flota ha sido seleccionado cuidadosamente para ofrecerte la máxima comodidad y lujo caribeño. Desde íntimos catamaranes hasta yates de ensueño.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {boats.map((boat, index) => (
              <BoatCard key={boat.id} boat={boat} index={index} />
            ))}
          </div>

          {/* Stats Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-gradient-to-br from-turquoise/10 to-sand/10 rounded-2xl p-6 border border-turquoise/20 text-center">
              <p className="text-3xl font-serif font-bold text-deep-blue mb-1">12+</p>
              <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold">Embarcaciones</p>
            </div>
            <div className="bg-gradient-to-br from-turquoise/10 to-sand/10 rounded-2xl p-6 border border-turquoise/20 text-center">
              <p className="text-3xl font-serif font-bold text-deep-blue mb-1">300+</p>
              <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold">Viajes Anuales</p>
            </div>
            <div className="bg-gradient-to-br from-turquoise/10 to-sand/10 rounded-2xl p-6 border border-turquoise/20 text-center">
              <p className="text-3xl font-serif font-bold text-deep-blue mb-1">50k+</p>
              <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold">Pasajeros Felices</p>
            </div>
            <div className="bg-gradient-to-br from-turquoise/10 to-sand/10 rounded-2xl p-6 border border-turquoise/20 text-center">
              <p className="text-3xl font-serif font-bold text-deep-blue mb-1">100%</p>
              <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold">Recomendación</p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-deep-blue via-deep-blue to-slate-900 rounded-3xl p-12 text-white text-center border-2 border-turquoise/30"
          >
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">¿No encuentras lo que buscas?</h3>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto font-light">Nuestro equipo puede personalizar una experiencia única según tus necesidades específicas.</p>
            <a href="https://wa.me/573234362220?text=Hola, me gustaría consultar y reservar un bote." target="_blank" rel="noopener noreferrer" className="bg-turquoise text-deep-blue hover:bg-sand px-10 py-6 rounded-full text-lg font-bold inline-flex items-center justify-center">
              Consulta Personalizada <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
