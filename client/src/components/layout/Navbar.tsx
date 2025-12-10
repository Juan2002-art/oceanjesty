import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, Anchor, MapPin, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "573234362220";
const openWhatsApp = (message: string) => {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Pasadías", path: "/pasadias" },
    { name: "Botes", path: "/botes" },
    { name: "Jetskis", path: "/jetskis" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled || location !== "/"
          ? "bg-white/90 backdrop-blur-md py-4 shadow-sm border-white/20"
          : "bg-transparent py-6 text-white"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <Anchor className={cn("h-8 w-8 transition-colors", scrolled || location !== "/" ? "text-deep-blue" : "text-white group-hover:text-turquoise")} />
          <div className="flex flex-col">
            <span className={cn(
              "font-serif text-xl font-bold tracking-widest leading-none",
              scrolled || location !== "/" ? "text-deep-blue" : "text-white"
            )}>
              OCEANJETSKI
            </span>
            <span className={cn(
              "text-[10px] tracking-[0.3em] uppercase opacity-80",
              scrolled || location !== "/" ? "text-deep-blue" : "text-white"
            )}>
              Cartagena
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} className={cn(
              "text-sm font-medium tracking-wide uppercase hover:text-turquoise transition-colors relative group cursor-pointer",
              scrolled || location !== "/" ? "text-deep-blue" : "text-white/90"
            )}>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-turquoise transition-all group-hover:w-full" />
            </Link>
          ))}
          <Button
            onClick={() => openWhatsApp("Hola! Me gustaría reservar una experiencia con OCEANJETSKI. ¿Qué servicios tienen disponibles?")}
            variant={scrolled || location !== "/" ? "default" : "outline"}
            className={cn(
              "rounded-full px-6 font-medium tracking-wide",
              scrolled || location !== "/"
                ? "bg-deep-blue hover:bg-deep-blue/90 text-white"
                : "border-white text-white hover:bg-white hover:text-deep-blue"
            )}
            data-testid="button-reservar-navbar"
          >
            Reservar
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={scrolled || location !== "/" ? "text-deep-blue" : "text-white"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-l-0 w-[80%] sm:w-[350px]">
              <div className="flex flex-col h-full pt-10">
                <div className="mb-8">
                  <span className="font-serif text-2xl font-bold text-deep-blue">OCEANJETSKI</span>
                </div>
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link key={link.path} href={link.path} className="text-xl font-serif text-deep-blue hover:text-turquoise transition-colors cursor-pointer">
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto mb-8 space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-turquoise" />
                    <span className="text-sm">Muelle La Bodeguita, Cartagena</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-5 w-5 text-turquoise" />
                    <span className="text-sm">+57 300 123 4567</span>
                  </div>
                  <Button
                    onClick={() => openWhatsApp("Hola! Me gustaría reservar una experiencia con OCEANJETSKI. ¿Qué servicios tienen disponibles?")}
                    className="w-full bg-deep-blue text-white rounded-full mt-4"
                    data-testid="button-whatsapp-mobile"
                  >
                    WhatsApp Directo
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
