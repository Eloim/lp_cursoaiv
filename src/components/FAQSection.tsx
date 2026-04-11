import SectionWrapper from "./SectionWrapper";
import { Mail } from "lucide-react";

const faqs = [
  { q: "Funciona com celular?", a: "Sim. Inclusive é o foco." },
  { q: "Preciso saber editar?", a: "Não. O método é simples." },
  { q: "Preciso aparecer?", a: "Se quiser autoridade, sim — e você vai aprender como." },
  { q: "Quanto tempo leva?", a: "Você já aplica no mesmo dia." },
  { q: "É para iniciantes?", a: "Principalmente para iniciantes e intermediários travados." },
];

const FAQSection = () => (
  <SectionWrapper>
    <h2 className="font-display font-bold text-2xl md:text-4xl text-center mb-10">
      Perguntas Frequentes
    </h2>

    <div className="space-y-4 max-w-2xl mx-auto">
      {faqs.map((faq, i) => (
        <div key={i} className="p-5 rounded-lg glass-cool hover:border-gold/20 transition-all">
          <p className="font-display font-semibold text-foreground mb-2">{faq.q}</p>
          <p className="text-muted-foreground">{faq.a}</p>
        </div>
      ))}
    </div>

    <div className="mt-12 text-center p-6 rounded-lg bg-secondary/30 border border-border max-w-xl mx-auto flex flex-col items-center gap-3">
      <Mail className="w-7 h-7 text-primary" />
      <h3 className="font-display font-bold text-lg">Suporte</h3>
      <p className="text-muted-foreground">
        Você não fica sozinho. Suporte via e-mail para dúvidas, direcionamento e ajuda na aplicação.
      </p>
    </div>
  </SectionWrapper>
);

export default FAQSection;
