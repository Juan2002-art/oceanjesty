// Generic hero image (generated)
import heroImage from "@assets/generated_images/aerial_view_of_rosario_islands_with_turquoise_water_and_boats..png";

// Jetski hero image
import jetskiHero from "@assets/generated_images/high-speed_jet_ski_in_turquoise_water.png";

// Real Island Images
import hotelIsladelSol from "@assets/hotel isla del sol_1764208812570.jpg";
import boraboraBeachClub from "@assets/Bora Bora Beach Club_1764208812567.jpg";
import boraboraVIP from "@assets/Bora Bora Beach VIP_1764208812569.jpg";
import paopaoBeach from "@assets/pao pao beach_1764208812574.jpg";
import islabeela from "@assets/isabela_1764208812570.jpg";
import luxuryOpenBar from "@assets/luxury open bar_1764208812574.jpg";

// Real Boat Images
import powercat51 from "@assets/powert 51 ft_1764208812574.jpg";
import lagoon440 from "@assets/lagoon 440_1764208812572.jpg";
import lanchaHarb from "@assets/lancha harb_1764208812573.jpg";
import lanchaCohiba from "@assets/lancha cohiba_1764208812572.jpg";

// Real Jetski Images
import jetski1 from "@assets/jestky 1_1764208812571.jpg";
import jetski2 from "@assets/jestky 2_1764208812571.jpg";
import jetski3 from "@assets/jestky 2_1764210432538.jpg";

export const images = {
  hero: heroImage,
  jetskiHero: jetskiHero,
  
  // Generic fallbacks
  island: hotelIsladelSol,
  boat: powercat51,
  jetski: jetski1,
  
  // Specific island images
  "isla-del-sol": hotelIsladelSol,
  "bora-bora": boraboraBeachClub,
  "bora-bora-vip": boraboraVIP,
  "pao-pao": paopaoBeach,
  "islabela": islabeela,
  "luxury-open-bar": luxuryOpenBar,
  
  // Specific boat images
  "powercat-51": powercat51,
  "lagoon-440": lagoon440,
  "firpool-42": lanchaHarb,
  "cohiba-33": lanchaCohiba,
  
  // Specific jetski images
  "yamaha-vx": jetski1,
  "seadoo-gti": jetski2,
};
