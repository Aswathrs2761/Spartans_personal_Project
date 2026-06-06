import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gold-gradient mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-sm p-8 space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Address</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  3/1, Fourth St, Dharmaraja Nagar, Porur, Shiekmaniyam, Chennai, Tamil Nadu 600116
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:+917871485215" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors block">
                  +91 78714 85215
                </a>
                <a href="tel:+916383930289" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors block">
                  +91 63839 30289
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:spartanseventschennai@gmail.com" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                  spartanseventschennai@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-card border border-border rounded-sm p-8 flex flex-col items-center justify-center text-center"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Let's Plan Your Event</h3>
            <p className="font-body text-sm text-muted-foreground mb-8">
              Reach out to us on WhatsApp for instant consultation and booking.
            </p>
            <a
              href="https://wa.me/+917871485215"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm tracking-widest uppercase px-8 py-3 bg-primary text-primary-foreground rounded-sm hover:bg-gold-light transition-colors"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
