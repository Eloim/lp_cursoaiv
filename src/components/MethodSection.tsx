import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const steps = [
  { num: "1", title: "Setup Invisível", desc: "Você corrige o que ninguém vê… mas todo mundo sente", detail: "configuração, luz e posicionamento" },
  { num: "2", title: "Cena que Valoriza", desc: "Você para de parecer mal posicionado", detail: "enquadramento, fundo e ângulo" },
  { num: "3", title: "Presença que Prende", desc: "Você deixa de parecer travado", detail: "ritmo, energia e postura" },
  { num: "4", title: "Acabamento que Impressiona", desc: "Seu vídeo começa a parecer caro", detail: "cortes e ajustes simples" },
  { num: "5", title: "Publicação sem Perda", desc: "Você mantém qualidade até o final", detail: "sem destruir tudo no upload" },
];

const MethodSection = () => (
  <SectionWrapper>
    <div className="-mt-40 text-center">
      <p className="text-muted-foreground">A maioria das pessoas acha que precisa de:</p>
      <div className="flex flex-col items-center gap-1 mb-6 text-lg">
        {["câmera cara", "edição avançada", "cenário perfeito"].map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            <X className="w-5 h-5 text-destructive" /> {item}
          </span>
        ))}
      </div>
      <p className="text-foreground text-lg mb-2">Mas isso não é o que define se você parece profissional.</p>
      <p className="text-gradient-gold font-display font-bold text-2xl md:text-3xl">O que define é isso aqui:</p>
    </div>

    <h2 className="font-display font-bold text-2xl md:text-3xl text-center mb-2">
      Método Autoridade Instantânea em Vídeo
    </h2>
    <p className="text-muted-foreground text-center mb-12">
      Um processo simples, direto e aplicável em poucas horas:
    </p>

    <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`flex gap-4 items-start p-6 rounded-xl bg-secondary/50 border border-gold/20 hover:border-gold/50 transition-colors ${i === 4 ? "md:col-span-2 md:max-w-md md:mx-auto" : ""}`}
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-display font-bold text-lg shrink-0">
            {step.num}
          </span>
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground">{step.title}</h3>
            <p className="text-secondary-foreground text-sm">{step.desc}</p>
            <p className="text-muted-foreground text-xs mt-1">({step.detail})</p>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="mt-12 text-center p-6 rounded-lg bg-primary/10 border border-gold/30">
      <p className="text-lg">
        <strong className="text-gradient-gold text-xl">Resultado:</strong>{" "}
        O mesmo vídeo… com uma percepção completamente diferente
      </p>
    </div>
  </SectionWrapper>
);

export default MethodSection;
