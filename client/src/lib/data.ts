// Data for Oceanjestky Website

export const islands = [
  {
    id: "isla-del-sol",
    name: "Hotel Isla del Sol",
    description: "Una experiencia clásica y completa en el corazón de las Islas del Rosario. Ideal para familias y parejas que buscan tranquilidad y servicio tradicional.",
    priceLevel: "Moderado",
    rating: 4.8,
    reviews: 124,
    imageKey: "island", // Using generic key to map to generated image
    includes: [
      "Transporte Cartagena – Isla del Sol – Cartagena",
      "Frutas tropicales de bienvenida",
      "Almuerzo típico con opciones (Pescado, Pollo, Veggie)",
      "Postre típico caribeño",
      "Sillas asoleadoras y piscina de agua de mar",
      "Recorrido panorámico (entrada opcional al acuario)"
    ],
    notIncludes: [
      "Tasa Portuaria ($23.000 COP)",
      "Toallas",
      "Actividades adicionales (Snorkel, Masajes)"
    ],
    schedule: {
      departure: "8:30 AM - 9:00 AM",
      return: "3:00 PM"
    },
    policies: "No se permite ingreso de alimentos ni bebidas. Ambiente familiar."
  },
  {
    id: "bora-bora",
    name: "Bora Bora Beach Club",
    description: "Ambiente vibrante y exclusivo para los amantes de la fiesta y el buen estilo. El lugar para ver y ser visto en el Rosario.",
    priceLevel: "Premium",
    rating: 4.9,
    reviews: 342,
    imageKey: "island",
    includes: [
      "Traslado en lancha rápida deportiva",
      "Cóctel de bienvenida exclusivo",
      "Cama de playa (Ubicación General)",
      "Almuerzo típico gourmet (3 opciones)"
    ],
    notIncludes: [
      "Tasa Portuaria ($23.000 COP)",
      "Toallas",
      "Alimentos a la carta",
      "Zonas VIP"
    ],
    conditions: "No mascotas. No Oceanario. Llegada 7:20 AM. Solo mayores de 18 años en zonas de fiesta."
  },
  {
    id: "bora-bora-vip",
    name: "Bora Bora Beach VIP",
    description: "La experiencia definitiva de lujo y privacidad en Bora Bora. Acceso a la zona más exclusiva con atención personalizada.",
    priceLevel: "Lujo",
    rating: 5.0,
    reviews: 89,
    imageKey: "island",
    includes: [
      "Transporte prioritario",
      "Cóctel especial de bienvenida",
      "Almuerzo premium (Paella, Risotto, Pasta Marinera)",
      "Cama playera en zona VIP Front Row",
      "Acceso a instalaciones exclusivas y baños privados"
    ],
    notIncludes: ["Tasa Portuaria ($23.000 COP)"],
    conditions: "Solo adultos. No mascotas. Llegada 7:20 AM."
  },
  {
    id: "pao-pao",
    name: "Pao Pao Beach",
    description: "Elegancia tranquila y sofisticada para un relax total. Un diseño 'Boho Chic' perfecto para desconectarse del mundo.",
    priceLevel: "Premium",
    rating: 4.7,
    reviews: 156,
    imageKey: "island",
    includes: [
      "Transporte ida y vuelta",
      "Cóctel especial de la casa",
      "Almuerzo premium variado a la carta",
      "Uso de Cabaña / cama playera",
      "Acceso a piscina de agua dulce y playa"
    ],
    notIncludes: ["Tasa Portuaria ($23.000 COP)"],
    conditions: "No mascotas. No snorkel. Llegada 7:20 AM. Ambiente Chill-out."
  },
  {
    id: "islabela",
    name: "Islabela",
    description: "Encanto natural y sostenibilidad en una playa de arena blanca. Una experiencia eco-friendly sin sacrificar confort.",
    priceLevel: "Moderado",
    rating: 4.6,
    reviews: 98,
    imageKey: "island",
    includes: [
      "Transporte en lancha rápida",
      "Cóctel de bienvenida",
      "Almuerzo típico o vegetariano",
      "Sillas asoleadoras",
      "Uso de instalaciones y playa privada"
    ],
    notIncludes: ["Tasa Portuaria ($23.000 COP)", "Camas balinesas (costo adicional)"]
  },
  {
    id: "luxury-open-bar",
    name: "Luxury Open Bar VIP",
    description: "Todo incluido con barra libre para disfrutar sin preocupaciones. La mejor opción para grupos que quieren diversión total.",
    priceLevel: "Lujo",
    rating: 4.8,
    reviews: 210,
    imageKey: "island",
    includes: [
      "Transporte VIP",
      "Barra libre nacional ilimitada (Cervezas, Cócteles)",
      "DJ en vivo fines de semana",
      "Cama playera garantizada",
      "Almuerzo menú amplio (10 opciones)",
      "Servicio a la mesa en playa"
    ],
    notIncludes: ["Tasa Portuaria ($23.000 COP)", "Licores premium"]
  }
];

export const boats = [
  {
    id: "powercat-51",
    name: "Powercat 51 ft",
    type: "Catamarán a Motor",
    capacity: 35,
    price: "Desde $4.500.000 COP",
    features: [
      "Capitán + 2 marineros",
      "Hielo y Agua incluidos",
      "4 habitaciones dobles",
      "4 baños completos",
      "Sonido Bluetooth High-End",
      "Asoleadoras en proa y flybridge"
    ],
    imageKey: "boat"
  },
  {
    id: "lagoon-440",
    name: "Lagoon 440",
    type: "Catamarán a Vela",
    capacity: 23,
    price: "Desde $3.800.000 COP",
    features: [
      "4 cabinas de lujo",
      "4 baños privados",
      "Aire acondicionado",
      "Sonido Bluetooth",
      "Cocina equipada",
      "Red de proa para asolearse"
    ],
    imageKey: "boat"
  },
  {
    id: "firpool-42",
    name: "Lancha Harb (Firpool 42 ft)",
    type: "Lancha Rápida",
    capacity: 20,
    price: "Desde $2.500.000 COP",
    features: [
      "2 motores Suzuki 250 HP",
      "Baño completo",
      "Sonido profesional JL Audio",
      "Asoleadoras acolchadas en proa",
      "Ducha de agua dulce"
    ],
    imageKey: "boat"
  },
  {
    id: "cohiba-33",
    name: "Cohiba 33'",
    type: "Lancha Deportiva",
    capacity: 14,
    price: "Desde $1.800.000 COP",
    features: [
      "Asoleadora VIP en proa",
      "Full sonido Bluetooth",
      "Baño pequeño",
      "Nevera con hielo",
      "4 máscaras snorkel incluidas"
    ],
    imageKey: "boat"
  }
];

export const jetskis = [
  {
    id: "yamaha-vx",
    name: "Yamaha VX Cruiser",
    power: "110 HP",
    imageKey: "jetski",
    description: "Ideal para principiantes y paseos tranquilos. Estabilidad superior y fácil manejo para toda la familia.",
    price: "$180.000",
    duration: "30 min"
  },
  {
    id: "seadoo-gti",
    name: "Sea-Doo GTI 130",
    power: "130 HP",
    imageKey: "jetski",
    description: "Equilibrio perfecto entre estabilidad y diversión. Modo Sport disponible para los más aventureros.",
    price: "$220.000",
    duration: "30 min"
  }
];
