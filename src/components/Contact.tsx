import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Instagram, MapPin, Phone, Download } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "arturcagliari2018@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=arturcagliari2018@gmail.com&su=Contato%20-%20Portf%C3%B3lio&body=Ol%C3%A1%20Artur,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (54) 99665-6386",
      link: "https://wa.me/5554996656386?text=Ol%C3%A1%20Artur,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
      color: "text-accent",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Carlos Barbosa, RS",
      link: "https://maps.google.com/?q=Carlos Barbosa, RS",
      color: "text-primary",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "@artcagliari",
      link: "https://github.com/artcagliari",
      color: "text-accent",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Artur Cagliari",
      link: "https://www.linkedin.com/in/artur-cagliari-206b0936b",
      color: "text-primary",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@artur.cagliari",
      link: "https://www.instagram.com/artur.cagliari",
      color: "text-accent",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={titleVariants}
          >
            Entre em <span className="text-primary text-shimmer">Contato</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Vamos trabalhar juntos! Sinta-se à vontade para entrar em contato por qualquer um desses canais
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  className="group p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow-primary cursor-pointer"
                  onClick={() => window.open(method.link, "_blank")}
                >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-full bg-secondary group-hover:scale-110 transition-transform duration-500 animate-bounce-in`}>
                    <Icon className={`w-8 h-8 ${method.color} group-hover:rotate-12 transition-transform duration-300`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 animate-fade-in-left">{method.title}</h3>
                    <p className="text-sm text-muted-foreground break-all animate-fade-in-up animate-stagger-1">{method.value}</p>
                  </div>
                  
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-accent/60 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-all duration-500" />
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-all duration-500" style={{ animationDelay: '0.3s' }} />
                </div>
              </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-bold text-center mb-8"
            variants={titleVariants}
          >
            Redes Sociais
          </motion.h3>
          <motion.div 
            className="flex justify-center gap-6 flex-wrap"
            variants={containerVariants}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all group"
                    onClick={() => window.open(social.link, "_blank")}
                  >
                    <Icon className={`w-5 h-5 mr-2 ${social.color} group-hover:rotate-12 transition-transform duration-300`} />
                    {social.title}
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-card/50 to-secondary/30 backdrop-blur border-primary/20">
              <motion.h3 
                className="text-2xl font-bold mb-4"
                variants={titleVariants}
              >
                Pronto para Começar um Projeto?
              </motion.h3>
              <motion.p 
                className="text-muted-foreground mb-6"
                variants={itemVariants}
              >
                Estou disponível para trabalhos freelance e oportunidades full-time. Vamos criar algo incrível juntos!
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4 justify-center"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary transition-all duration-300"
                      onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=arturcagliari2018@gmail.com&su=Contato%20-%20Portf%C3%B3lio&body=Ol%C3%A1%20Artur,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.", "_blank")}
                    >
                      <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Enviar Email
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10 transition-all duration-300"
                      onClick={() => window.open("https://drive.google.com/drive/folders/1weAKkTYcr_j0vqh8-cd0lZtwdJUkkrWp?usp=drive_link", "_blank")}
                    >
                      <Download className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Download CV
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>

        <motion.footer 
          className="mt-20 text-center text-muted-foreground"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={itemVariants}
        >
          <p>© 2025 Artur Cagliari. All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
