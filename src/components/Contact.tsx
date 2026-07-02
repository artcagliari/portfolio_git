import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Instagram, MapPin, Phone, Download, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { containerVariants, itemVariants, titleVariants, defaultViewport } from "@/lib/motion";

const EMAIL_LINK =
  "https://mail.google.com/mail/?view=cm&fs=1&to=arturcagliari2018@gmail.com&su=Contato%20-%20Portf%C3%B3lio&body=Ol%C3%A1%20Artur,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "arturcagliari2018@gmail.com",
    link: EMAIL_LINK,
  },
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+55 (54) 99665-6386",
    link: "https://wa.me/5554996656386?text=Ol%C3%A1%20Artur,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "Carlos Barbosa, RS",
    link: "https://maps.google.com/?q=Carlos Barbosa, RS",
  },
];

const socialLinks = [
  { icon: Github, title: "GitHub", link: "https://github.com/artcagliari" },
  { icon: Linkedin, title: "LinkedIn", link: "https://www.linkedin.com/in/artur-cagliari-206b0936b" },
  { icon: Instagram, title: "Instagram", link: "https://www.instagram.com/artur.cagliari" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative section-glow">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={containerVariants}
        >
          <motion.span variants={titleVariants} className="editorial-eyebrow mb-5">
            <span className="w-8 h-px bg-primary" />
            03 — Contato
          </motion.span>
          <motion.h2
            variants={titleVariants}
            className="font-display font-semibold tracking-tight text-5xl md:text-7xl mb-6"
          >
            Vamos criar algo <span className="text-shimmer italic">juntos</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-xl mb-10">
            Estou disponível para trabalhos freelance e oportunidades full-time. Escolha o
            canal que preferir para conversar.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-7"
              onClick={() => window.open(EMAIL_LINK, "_blank")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Enviar email
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-7 border-border hover:border-primary/50 hover:bg-primary/5"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1weAKkTYcr_j0vqh8-cd0lZtwdJUkkrWp?usp=drive_link",
                  "_blank"
                )
              }
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <motion.button
                key={method.title}
                variants={itemVariants}
                onClick={() => window.open(method.link, "_blank")}
                className="group text-left bg-card p-8 hover:bg-secondary/40 transition-colors"
              >
                <Icon className="w-6 h-6 text-primary mb-6" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-ui uppercase tracking-[0.2em] text-muted-foreground">
                    {method.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-base mt-2 break-all group-hover:text-primary transition-colors">
                  {method.value}
                </p>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.button
                key={social.title}
                variants={itemVariants}
                onClick={() => window.open(social.link, "_blank")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Icon className="w-4 h-4" />
                {social.title}
              </motion.button>
            );
          })}
        </motion.div>

        <Footer />
      </div>
    </section>
  );
};

export default Contact;
