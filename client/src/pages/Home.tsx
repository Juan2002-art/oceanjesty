import { Hero } from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Anchor, Sun } from "lucide-react";
import { islands, boats } from "@/lib/data";
import { BoatCard } from "@/components/cards/BoatCard";
import { images } from "@/lib/images";
import { FeaturedIslands } from "@/components/home/FeaturedIslands";

export default function Home() {
  const featuredBoats = boats.slice(0, 2);

  return (
    <div className="w-full overflow-x-hidden">
      <Hero />

      {/* Stats / Intro Section - More Visual */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
          <div className="absolute top-[-10%] right-[-5%] w-[30rem] h-[30rem] rounded-full bg-turquoise/5 blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40rem] h-[40rem] rounded-full bg-deep-blue/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="inline-block py-1 px-3 text-turquoise font-bold tracking-widest uppercase text-sm mb-6 border-l-2 border-turquoise pl-4">
                Bienvenido a Oceanjetski
              </span>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-deep-blue mb-8 leading-[1.1]">
                Diseñamos tu <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-turquoise">
                  escapada perfecta
                </span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 border-l border-slate-200 pl-6">
                No somos solo una agencia de turismo; somos curadores de experiencias. Seleccionamos las islas más exclusivas y mantenemos una flota premium para garantizar que tu día en el mar sea impecable.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <h4 className="font-serif text-4xl font-bold text-deep-blue mb-1">15+</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Islas Privadas</p>
                </div>
                <div>
                  <h4 className="font-serif text-4xl font-bold text-deep-blue mb-1">5k+</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Clientes Felices</p>
                </div>
                <div>
                  <h4 className="font-serif text-4xl font-bold text-deep-blue mb-1">24/7</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Soporte VIP</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700">
                <img src={images.island} alt="Experiencia Premium" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent flex items-end p-8">
                  <p className="text-white font-serif text-xl italic">"El lujo no es una opción, es nuestro estándar."</p>
                </div>
              </div>
              <div className="absolute top-4 -right-4 w-full h-full border-2 border-turquoise rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Featured Islands Section */}
      <FeaturedIslands />

      {/* Featured Boats - Premium Fleet Section */}
      <section className="relative py-28 bg-gradient-to-b from-deep-blue via-deep-blue to-slate-900 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-64 -right-32 w-96 h-96 rounded-full bg-turquoise/5 blur-3xl" />
          <div className="absolute -bottom-48 -left-32 w-96 h-96 rounded-full bg-turquoise/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="inline-block py-2 px-4 text-turquoise font-bold tracking-widest uppercase text-sm mb-6 bg-white/5 rounded-full border border-turquoise/30">
              Flota Premium
            </span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Navega a tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-sand">propio ritmo</span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
              Olvídate de los itinerarios fijos. Con nuestros botes privados, tú eres el capitán de tu destino. Lujo, privacidad y la mejor tripulación a tu disposición.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-turquoise to-sand p-4 rounded-2xl w-fit mb-6">
                <Shield className="w-8 h-8 text-deep-blue" />
              </div>
              <h4 className="font-serif text-2xl font-bold mb-3">Seguridad Garantizada</h4>
              <p className="text-white/70 leading-relaxed">Botes certificados internacionalmente, mantenimiento al día y capitanes con experiencia de 10+ años en aguas del Caribe.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-sand to-turquoise p-4 rounded-2xl w-fit mb-6">
                <Sun className="w-8 h-8 text-deep-blue" />
              </div>
              <h4 className="font-serif text-2xl font-bold mb-3">Todo Incluido Premium</h4>
              <p className="text-white/70 leading-relaxed">Capitán experto, combustible, snorkel de calidad, bebidas refrescantes y amenidades de lujo a bordo.</p>
            </motion.div>
          </div>

          {/* Featured Boats Showcase */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredBoats.map((boat, idx) => (
              <motion.div
                key={boat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-turquoise/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={images[boat.id as keyof typeof images] || images.boat}
                    alt={boat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 group-hover:from-deep-blue/90 transition-all duration-300">
                  <div className="mb-4">
                    <Badge className="mb-3 bg-turquoise text-deep-blue border-none">{boat.type}</Badge>
                    <h3 className="font-serif text-3xl font-bold mb-2">{boat.name}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">Bote {boat.type.toLowerCase()} exclusivo para tu aventura caribeña.</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div>
                        <p className="text-xs text-white/60 uppercase tracking-wider">Capacidad</p>
                        <p className="font-bold text-lg text-turquoise">{boat.capacity} personas</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/60 uppercase tracking-wider">Desde</p>
                        <p className="font-bold text-lg text-turquoise">${boat.price}</p>
                      </div>
                    </div>
                    <Link href="/botes">
                      <button className="bg-turquoise/20 border border-turquoise p-3 rounded-full hover:bg-turquoise hover:text-deep-blue transition-all duration-300 group/btn">
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Link href="/botes">
              <Button className="bg-gradient-to-r from-turquoise to-sand text-deep-blue hover:shadow-2xl hover:shadow-turquoise/30 px-12 py-7 rounded-full text-lg font-bold transition-all">
                Explorar Flota Completa <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modern Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-blue mb-4">Confianza que inspira</h2>
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-turquoise text-turquoise" />)}
            </div>
            <p className="text-slate-500">Más de 500 reseñas de 5 estrellas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Camila R.", text: "Simplemente espectacular. La atención al detalle en el bote fue increíble.", role: "Turista de México" },
              { name: "James W.", text: "Best day of our trip to Cartagena. The island recommendation was spot on.", role: "Turista de USA" },
              { name: "Sofia M.", text: "Organizaron el cumpleaños de mi esposo y todo salió perfecto. ¡Gracias!", role: "Cliente Local" }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-10 rounded-3xl relative group hover:bg-deep-blue hover:text-white transition-colors duration-300"
              >
                <span className="absolute top-8 left-8 text-6xl font-serif text-slate-200 group-hover:text-white/10">"</span>
                <p className="relative z-10 text-lg font-medium italic mb-8 pt-4 leading-relaxed group-hover:text-white/90">
                  {review.text}
                </p>
                <div className="relative z-10 border-t border-slate-200 group-hover:border-white/20 pt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-turquoise to-deep-blue flex items-center justify-center text-white font-bold text-lg">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-bold group-hover:text-white">{review.name}</p>
                    <p className="text-xs text-slate-500 group-hover:text-white/60 uppercase tracking-wider">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
