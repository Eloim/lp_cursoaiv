import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

const FinalCTASection = () => (
  <section className="py-20 md:py-32 px-4 bg-gradient-dark">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
        Chegou a hora de{" "}
        <span className="text-gradient-gold">parecer profissional</span>
      </h2>
      <p className="text-muted-foreground text-lg mb-10">
        Enquanto você espera, outros estão sendo escolhidos.
      </p>
      <CTAButton className="text-xl px-12 py-5">
        🚀 Quero parecer profissional nos meus vídeos agora
      </CTAButton>
      <p className="text-muted-foreground text-sm mt-6">
        Acesso imediato · Garantia de 7 dias · Pagamento seguro
      </p>
    </motion.div>
  </section>
);

export default FinalCTASection;
