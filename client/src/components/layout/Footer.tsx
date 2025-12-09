import { Anchor, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-deep-blue text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Anchor className="h-8 w-8 text-turquoise" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-widest">OCEANJESTKY</span>
                <span className="text-xs tracking-[0.3em] text-white/60">AGENCIA DE TURISMO</span>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed max-w-xs">
              Especialistas en experiencias náuticas premium en Cartagena. Pasadías a islas privadas, alquiler de botes y jetskis con servicio de primera clase.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-turquoise hover:text-deep-blue transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-turquoise hover:text-deep-blue transition-all">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-turquoise">Explora</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/pasadias" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-turquoise"></span>
                  Pasadías Islas del Rosario
                </Link>
              </li>
              <li>
                <Link href="/botes" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-turquoise"></span>
                  Alquiler de Botes Privados
                </Link>
              </li>
              <li>
                <Link href="/jetskis" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-turquoise"></span>
                  Alquiler de Jetskis
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-turquoise"></span>
                  Contacto & Ubicación
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-turquoise">Contacto</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-turquoise shrink-0 mt-1" />
                <span className="text-white/70">Muelle La Bodeguita<br/>Cartagena de Indias, Colombia</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-turquoise shrink-0" />
                <span className="text-white/70">+57 300 123 4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-turquoise shrink-0" />
                <span className="text-white/70">reservas@oceanjestky.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2025 OCEANJESTKY. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
