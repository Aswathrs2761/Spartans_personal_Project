import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gold-gradient mb-4">
            Your Trusted Chennai Event Planners
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-10">
              Welcome to <span className="text-primary font-semibold">SPARTANS EVENT MANAGEMENT</span>, your dedicated partner for exceptional event planning in Chennai. Led by Proprietor <span className="text-foreground font-medium">Surya Prakash.K</span>, we offer comprehensive A to Z event solutions. With years of experience and a passion for perfection, we transform your ideas into stunning realities. Every event is unique and deserves personalized attention — from concept to execution, we ensure a seamless, memorable experience deeply rooted in Chennai's culture.
            </p>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-sm p-6 border-l-4 border-l-primary">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-primary" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  To provide unparalleled event management services in Chennai, exceeding client expectations through creativity, professionalism, and meticulous attention to detail.
                </p>
              </div>

              <div className="bg-card border border-border rounded-sm p-6 border-l-4 border-l-primary">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-primary" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">Our Vision</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  To be the leading event management company in Tamil Nadu, renowned for innovative solutions and unforgettable experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm aspect-square">
              {/* Gold border frame */}
              <div className="absolute inset-4 border-2 border-primary/30 rounded-sm" />
              <div className="absolute inset-8 border border-primary/20 rounded-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-heading text-6xl font-bold text-gold-gradient block">S</span>
                  <span className="font-heading text-lg tracking-[0.3em] text-primary/60 mt-2 block">
                    SPARTANS
                  </span>
                  <div className="w-16 h-0.5 bg-primary/40 mx-auto mt-4" />
                  <span className="font-body text-xs text-muted-foreground tracking-widest mt-3 block uppercase">
                    Est. Chennai
                  </span>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
