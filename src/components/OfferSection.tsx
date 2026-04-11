import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";
import { Video, Brain, ClipboardCheck, Target, Mail, ShieldCheck } from "lucide-react";

const items = [
  { icon: Video, text: "Curso completo Autoridade Instantânea em Vídeo" },
  { icon: Brain, text: "Método estruturado passo a passo" },
  { icon: ClipboardCheck, text: "Checklists práticos (setup, gravação, edição, publicação)" },
  { icon: Target, text: "Exercícios de presença e comunicação" },
  { icon: Mail, text: "Suporte por e-mail" },
];

const OfferSection = () => (
  <SectionWrapper alternate id="oferta" texture="radial">
    <h2 className="font-display font-bold text-2xl md:text-4xl text-center mb-10">
      Ao entrar hoje, você recebe:
    </h2>

    <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex items-center gap-3 p-4 rounded-lg glass-gold hover:glow-gold-sm transition-all ${i === 4 ? "md:col-span-2 md:max-w-sm md:mx-auto md:w-full" : ""}`}
        >
          <item.icon className="w-6 h-6 text-primary shrink-0" />
          <span className="text-secondary-foreground">{item.text}</span>
        </div>
      ))}
    </div>

    <div className="text-center mb-10 p-8 rounded-xl glass-gold glow-gold max-w-lg mx-auto">
      <p className="text-muted-foreground line-through text-lg mb-1">De R$197</p>
      <p className="font-display font-bold text-5xl md:text-6xl text-gradient-gold mb-2">R$87</p>
      <p className="text-muted-foreground text-sm mb-6">Pagamento único · Parcelamento via Hotmart</p>
      <CTAButton className="w-full uppercase tracking-wider">QUERO ACESSO AGORA</CTAButton>
    </div>

    <div className="text-center p-6 rounded-lg glass-neutral max-w-2xl mx-auto flex flex-col items-center gap-3">
      <ShieldCheck className="w-8 h-8 text-primary" />
      <h3 className="font-display font-bold text-xl">Garantia de 7 dias</h3>
      <p className="text-muted-foreground">
        Se entrar, assistir e sentir que não é pra você, é só pedir o reembolso.
        Sem burocracia. Sem perguntas.
      </p>
    </div>
  </SectionWrapper>
);

export default OfferSection;
