import { motion } from "framer-motion";
import { Music, Camera, Palette, UtensilsCrossed, Disc3,Video, Images,  } from "lucide-react";
import chendaImg from "../components/images/chenda.jpeg";
import djMusic from "../components/images/djMusic.png";
import photography from "../components/images/photography.png";
import baloon from "../components/images/baloon_decoration.png";
import catering from "../components/images/catering_service.png";
import selfieBooth from "../components/images/360_selfieBooth.png";

const services = [
  { icon: Music, title: "Chenda Melam & Singari Melam", Images: chendaImg  ,desc: "Experience the vibrant energy of traditional Kerala percussion for weddings, festivals, and cultural events in Chennai.",  },

  { icon: Disc3, title: "DJ Music", Images: djMusic,   desc: "Keep your guests entertained with professional DJ services. Perfect soundtrack for weddings, corporate parties, birthdays, and more." },

  { icon: Camera, title: "Photography", Images: photography, desc: "Capture every precious moment with expert photography. From candid shots to stunning portraits, memories that last a lifetime." },

  { icon: Palette, title: "Stage & Balloon Decoration", Images:baloon, desc: "Stunning backdrops and decor for all types of events, ensuring a visually appealing ambiance." },

  { icon: UtensilsCrossed, title: "Catering Services", Images:catering, desc: "Exquisite culinary experiences with a wide range of options to suit your taste and event size." },

  { icon: Video, title: "360 Selfie Booth", Images: selfieBooth, desc: "State-of-the-art 360 selfie booth creating fun, shareable memories for guests." },
  
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gold-gradient mb-4">
            What We Offer
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
           <motion.div
  key={service.title}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: i * 0.08 }}
  className="group overflow-hidden bg-card border-gold-top rounded-lg border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
>
  <img
    src={service.Images}
    alt={service.title}
    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
  />

  <div className="p-6">
    <service.icon className="w-10 h-10 text-primary mb-4" />

    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
      {service.title}
    </h3>

    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      {service.desc}
    </p>
  </div>
</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
