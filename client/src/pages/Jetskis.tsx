import { motion } from "framer-motion";
import { jetskis } from "@/lib/data";
import { JetskiCard } from "@/components/cards/JetskiCard";
import { images } from "@/lib/images";
import { CheckCircle2, AlertTriangle, Zap, Waves, ShieldCheck, ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Jetskis() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* High Energy Hero */}
      <div className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-deep-blue to-deep-blue">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-turquoise/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-20 w-96 h-96 rounded-full bg-turquoise/10 blur-3xl" />
        </div>

        <div className="absolute inset-0 z-0">
          <img 
            src={images.jetskiHero} 
            alt="Jetskis Cartagena" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-turquoise/20 border border-turquoise/50 backdrop-blur mb-8"
          >
            <Flame className="w-5 h-5 text-turquoise fill-current" />
            <span className="text-turquoise font-bold uppercase tracking-widest text-sm">Adrenalina Pura</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise via-white to-sand">Domina</span>
            <br/>las Olas
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            La experiencia más emocionante de Cartagena. Equipos de última generación para explorar el mar con potencia, libertad y seguridad.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="https://wa.me/573234362220?text=Hola, me gustaría reservar un jetski." target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-turquoise to-sand text-deep-blue hover:shadow-2xl hover:shadow-turquoise/30 px-10 py-6 rounded-full text-lg font-bold transition-all inline-flex items-center justify-center">
              Reserva tu Aventura <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      <section className="py-28 relative overflow-hidden bg-white">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
           <Waves className="w-[800px] h-[800px] absolute -right-40 -top-40 text-deep-blue" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left: Models */}
            <div className="lg:col-span-7 xl:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-1 w-12 bg-gradient-to-r from-turquoise to-sand rounded-full" />
                  <span className="text-turquoise font-bold uppercase tracking-widest text-sm">Máquinas de Leyenda</span>
                </div>
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-deep-blue mb-4">Nuestras Máquinas</h2>
                <p className="text-slate-600 text-lg">Jetskis de última tecnología, mantenidas al más alto estándar de seguridad y rendimiento.</p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {jetskis.map((jetski, index) => (
                  <JetskiCard key={jetski.id} jetski={jetski} index={index} />
                ))}
              </div>
            </div>

            {/* Right: Info & Rules (Sticky Sidebar) */}
            <div className="lg:col-span-5 xl:col-span-4">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 sticky top-24"
              >
                {/* Security Card */}
                <div className="bg-gradient-to-br from-turquoise/10 to-sand/10 border border-turquoise/20 p-10 rounded-3xl backdrop-blur">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-turquoise p-3 rounded-2xl">
                      <ShieldCheck className="w-6 h-6 text-deep-blue" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-deep-blue">Seguridad Primero</h3>
                  </div>
                  <p className="text-slate-700 mb-8 text-base leading-relaxed font-light">
                    Tu seguridad es innegociable. Todos nuestros alquileres incluyen equipo profesional y briefing de seguridad obligatorio.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-deep-blue uppercase tracking-wider mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-turquoise" /> Incluido en tu renta
                      </h4>
                      <ul className="space-y-3">
                        {["Chaleco salvavidas profesional", "Instrucción de manejo", "Seguro contra accidentes", "Combustible incluido"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-deep-blue">
                            <div className="w-1.5 h-1.5 rounded-full bg-turquoise" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                      <div className="bg-orange-50/80 p-5 rounded-2xl border border-orange-200">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-orange-900 text-sm mb-2">Requisitos Obligatorios</h4>
                            <ul className="text-xs text-orange-800 space-y-1.5">
                              <li>✓ Edad mínima: 16 años</li>
                              <li>✓ Documento de identidad válido</li>
                              <li>✓ Firma de descargo de responsabilidad</li>
                              <li>✓ Saber nadar (recomendado)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-deep-blue to-slate-900 rounded-3xl p-8 text-white text-center"
                >
                  <Zap className="w-8 h-8 text-turquoise mx-auto mb-4" />
                  <h4 className="font-serif text-xl font-bold mb-3">¿Listo para la aventura?</h4>
                  <p className="text-white/70 text-sm mb-6">Contacta con nuestro equipo para reservar tu jetski hoy.</p>
                  <a href="https://wa.me/573234362220?text=Hola, me gustaría reservar un jetski." target="_blank" rel="noopener noreferrer" className="w-full bg-turquoise text-deep-blue hover:bg-sand rounded-full font-bold py-3 px-6 inline-flex items-center justify-center">
                    Reservar Ahora
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
