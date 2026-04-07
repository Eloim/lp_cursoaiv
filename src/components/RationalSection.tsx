import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Eye, Play, TrendingUp, Gem } from "lucide-react";

const facts = [
  { icon: Eye, text: "Pessoas julgam credibilidade em segundos", accent: "em segundos" },
  { icon: Play, text: "Vídeo é o formato mais consumido hoje", accent: "mais consumido" },
  { icon: TrendingUp, text: "Mais retenção = mais vendas", accent: "mais vendas" },
  { icon: Gem, text: "Percepção define valor percebido", accent: "valor percebido" },
];

const RationalSection = () => (
  <SectionWrapper>
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-display font-bold text-2xl md:text-4xl mb-10">
        Fatos que você não pode ignorar
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        {facts.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative p-6 rounded-xl bg-card border border-gold/20 hover:border-gold/50 transition-all group hover:glow-gold-sm"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-secondary-foreground text-lg font-medium">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-gradient-gold font-display font-bold text-xl md:text-2xl uppercase tracking-wide">
        Não é opinião. É comportamento humano.
      </p>
    </div>
  </SectionWrapper>
);

export default RationalSection;
