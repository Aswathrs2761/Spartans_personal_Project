import { motion } from "framer-motion";
import logo from "./images/Logo_gold.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-charcoal/30 to-deep-black" />

      {/* Shimmer overlay */}
      <div className="absolute inset-0 shimmer pointer-events-none" />

      {/* Gold particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/20 blur-3xl"
          style={{
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
            top: `${15 + i * 12}%`,
            left: `${10 + i * 15}%`,
            animation: `pulse-gold ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4 text-gold-gradient leading-tight">
            SPARTANS
            <br />
            <span className="text-foreground">EVENT MANAGEMENT</span>
          </h1> */}
          <div className="flex items-center justify-center mt-10 -mb-4 px-4">
            <img
              src={logo}
              alt="spartans event management"
              className="
      w-full
      max-w-sm
      sm:max-w-lg
      md:max-w-2xl
      lg:max-w-4xl
      xl:max-w-5xl
      h-auto
      object-contain
    "
            />
          </div>

        </motion.div>

        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-lg md:text-2xl text-primary tracking-wide mb-4"
        >
          Chennai's Premier A-Z Event Organizers
        </motion.p> */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 italic"
        >
          "Your Vision, Our Expertise: Crafting Unforgettable Events in Chennai!"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a
            href="tel:+917871485215"
            className="inline-block font-body font-semibold text-sm md:text-base tracking-widest uppercase px-10 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-gold-light transition-colors glow-gold"
          >
            Get a Free Quote Today
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
