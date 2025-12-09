import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Instagram, Facebook, Star, Send } from "lucide-react";
import { useState } from "react";

interface Review {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

export default function Contact() {
  const [reviews, setReviews] = useState<Review[]>([
    { id: "1", name: "Camila R.", role: "Turista de México", text: "Simplemente espectacular. La atención al detalle en el bote fue increíble. Definitivamente volveremos.", rating: 5, date: "Hace 2 semanas" },
    { id: "2", name: "James W.", role: "Turista de USA", text: "Best day of our trip to Cartagena. The island recommendation was spot on and the crew was amazing.", rating: 5, date: "Hace 1 mes" },
    { id: "3", name: "Sofia M.", role: "Cliente Local", text: "Organizaron el cumpleaños de mi esposo y todo salió perfecto. ¡Gracias por hacerlo especial!", rating: 5, date: "Hace 3 semanas" }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
    rating: 5
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.text) {
      const newReview: Review = {
        id: Date.now().toString(),
        name: formData.name,
        role: "Cliente Verificado",
        text: formData.text,
        rating: formData.rating,
        date: "Ahora mismo"
      };
      setReviews([newReview, ...reviews]);
      setFormData({ name: "", email: "", text: "", rating: 5 });
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-deep-blue via-deep-blue to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-turquoise/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-20 w-96 h-96 rounded-full bg-turquoise/10 blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Conecta con <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-sand">Nosotros</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Estamos listos para hacer tu experiencia caribeña inolvidable. Contáctanos para reservas, dudas o para compartir tu aventura.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white">
        {/* Contact & Form Section */}
        <div className="py-28 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-4xl font-bold text-deep-blue mb-2">Información de Contacto</h2>
                <div className="h-1 w-12 bg-gradient-to-r from-turquoise to-sand rounded-full" />
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-turquoise/10 p-4 rounded-2xl group-hover:bg-turquoise/20 transition-colors">
                    <MapPin className="h-6 w-6 text-turquoise" />
                  </div>
                  <div>
                    <p className="font-bold text-deep-blue text-lg">Ubicación Principal</p>
                    <p className="text-slate-600">Muelle La Bodeguita, Taquilla 4<br/>Cartagena de Indias, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-turquoise/10 p-4 rounded-2xl group-hover:bg-turquoise/20 transition-colors">
                    <Phone className="h-6 w-6 text-turquoise" />
                  </div>
                  <div>
                    <p className="font-bold text-deep-blue text-lg">Teléfono / WhatsApp</p>
                    <p className="text-slate-600">+57 300 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-turquoise/10 p-4 rounded-2xl group-hover:bg-turquoise/20 transition-colors">
                    <Mail className="h-6 w-6 text-turquoise" />
                  </div>
                  <div>
                    <p className="font-bold text-deep-blue text-lg">Email</p>
                    <p className="text-slate-600">reservas@oceanjestky.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <p className="text-slate-600 mb-4 font-medium">Síguenos en redes</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="border-turquoise/30 hover:bg-turquoise hover:border-turquoise text-turquoise rounded-full w-12 h-12">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-turquoise/30 hover:bg-turquoise hover:border-turquoise text-turquoise rounded-full w-12 h-12">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-gradient-to-br from-deep-blue/10 to-turquoise/10 rounded-3xl overflow-hidden flex items-center justify-center border border-slate-200">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-turquoise/40 mx-auto mb-2" />
                  <span className="text-slate-400 font-medium">Ubicados en el corazón de Cartagena</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-3xl border border-slate-200 shadow-lg"
            >
              <h2 className="font-serif text-3xl font-bold text-deep-blue mb-6">Envíanos un Mensaje</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-deep-blue">Nombre</label>
                    <Input placeholder="Tu nombre" className="rounded-lg border-slate-200 focus:border-turquoise" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-deep-blue">Apellido</label>
                    <Input placeholder="Tu apellido" className="rounded-lg border-slate-200 focus:border-turquoise" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-deep-blue">Email</label>
                  <Input type="email" placeholder="tu@email.com" className="rounded-lg border-slate-200 focus:border-turquoise" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-deep-blue">Servicio de Interés</label>
                    <Select>
                      <SelectTrigger className="rounded-lg border-slate-200 focus:border-turquoise">
                        <SelectValue placeholder="Selecciona..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pasadia">Pasadía Isla</SelectItem>
                        <SelectItem value="bote">Alquiler Bote</SelectItem>
                        <SelectItem value="jetski">Alquiler Jetski</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-deep-blue">Fecha Planeada</label>
                    <Input type="date" className="rounded-lg border-slate-200 focus:border-turquoise" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-deep-blue">Mensaje</label>
                  <Textarea placeholder="Cuéntanos más sobre tu viaje..." className="min-h-[120px] rounded-lg border-slate-200 focus:border-turquoise" />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-turquoise to-sand text-deep-blue hover:shadow-lg hover:shadow-turquoise/30 py-6 text-lg rounded-xl font-bold transition-all">
                  Confirmar Reserva <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-turquoise/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-deep-blue/5 blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Reviews Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-deep-blue mb-4">
                Lo que <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-sand">Nuestros Clientes</span> Dicen
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Experiencias reales de aventureros que confiaron en nosotros
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {reviews.map((review, idx) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 hover:border-turquoise/30"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-turquoise text-turquoise" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-turquoise to-deep-blue flex items-center justify-center text-white font-bold text-lg">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-deep-blue">{review.name}</p>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">{review.role}</p>
                      <p className="text-xs text-slate-400 mt-1">{review.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Submit Review Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-deep-blue to-slate-900 text-white p-12 rounded-3xl shadow-2xl max-w-2xl mx-auto border border-turquoise/20"
            >
              <h3 className="font-serif text-3xl font-bold mb-2 text-center">Comparte Tu Experiencia</h3>
              <p className="text-white/70 text-center mb-8">Tu reseña nos ayuda a mejorar y a otros a conocer sobre nuestros servicios</p>

              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-turquoise">Tu Nombre</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-lg focus:border-turquoise"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-turquoise">Email</label>
                    <Input
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-lg focus:border-turquoise"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-turquoise">¿Qué calificación le das?</label>
                  <div className="flex gap-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="transition-all duration-200 hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= formData.rating
                              ? "fill-sand text-sand"
                              : "text-white/30"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-turquoise">Tu Reseña</label>
                  <Textarea
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    placeholder="Cuéntanos sobre tu experiencia con OCEANJESTKY..."
                    className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-lg focus:border-turquoise"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-turquoise to-sand text-deep-blue hover:shadow-lg hover:shadow-turquoise/40 py-6 text-lg rounded-xl font-bold transition-all"
                >
                  Publicar Reseña <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>

          </div>
        </section>
      </div>
    </div>
  );
}
