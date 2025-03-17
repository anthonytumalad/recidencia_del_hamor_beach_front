import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; 

i18n
  .use(LanguageDetector) // Auto-detects browser language
  .use(initReactI18next) // Initializes the library
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          accommodations: "Accommodations",
          amenities: "Amenities & Activities",
          contact: "Contact Us",
          gallery: "Gallery",
          bookNow: "Book Now"
        }
      },
      fr: {
        translation: {
          welcome: "Bienvenue",
          accommodations: "Hébergements",
          amenities: "Équipements & Activités",
          contact: "Contactez-nous",
          gallery: "Galerie",
          bookNow: "Réservez maintenant"
        }
      },
      es: {
        translation: {
          welcome: "Bienvenido",
          accommodations: "Alojamientos",
          amenities: "Comodidades y Actividades",
          contact: "Contáctenos",
          gallery: "Galería",
          bookNow: "Reservar ahora"
        }
      },
    },
    fallbackLng: "en", // Default language
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
