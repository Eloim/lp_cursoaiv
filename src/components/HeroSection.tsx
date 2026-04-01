import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import CTAButton from "./CTAButton";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24 md:py-32">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-display font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-6"
      >
        Seus vídeos não são ignorados por falta de conteúdo…{" "}
        <span className="text-gradient-gold">eles são ignorados porque você ainda parece amador</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
      >
        Aprenda como transformar qualquer vídeo em uma apresentação profissional em até 1 dia —
        usando apenas o que você já tem, sem equipamento caro e sem edição complexa
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <CTAButton>👉 Quero parar de parecer amador nos meus vídeos</CTAButton>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
