import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";

const items = [
  { icon: "🎬", text: "Curso completo Autoridade Instantânea em Vídeo" },
  { icon: "🧠", text: "Método estruturado passo a passo" },
  { icon: "📦", text: "Checklists práticos (setup, gravação, edição, publicação)" },
  { icon: "📄", text: "Templates de enquadramento e ambiente" },
  { icon: "🎯", text: "Exercícios de presença e comunicação" },
  { icon: "📊", text: "Guia de exportação e formatos" },
  { icon: "📁", text: "Fluxograma completo do método" },
  { icon: "📩", text: "Suporte por e-mail" },
];

const OfferSection = () => (
  <SectionWrapper alternate id="oferta">
    <h2 className="font-display font-bold text-2xl md:text-4xl text-center mb-10">
      Ao entrar hoje, você recebe:
    </h2>

    <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/40 border border-border">
          <span className="text-2xl">{item.icon}</span>
          <span className="text-secondary-foreground">{item.text}</span>
        </div>
      ))}
    </div>

    <div className="text-center mb-10 p-8 rounded-xl bg-card border border-gold/30 glow-gold-sm max-w-lg mx-auto">
      <p className="text-muted-foreground line-through text-lg mb-1">De R$197</p>
      <p className="font-display font-bold text-5xl md:text-6xl text-gradient-gold mb-2">R$67</p>
      <p className="text-muted-foreground text-sm mb-6">Pagamento único · Parcelamento via Hotmart</p>
      <CTAButton className="w-full">👉 Quero acesso agora</CTAButton>
    </div>

    <div className="text-center p-6 rounded-lg bg-secondary/30 border border-border max-w-2xl mx-auto">
      <h3 className="font-display font-bold text-xl mb-3">🔒 Garantia de 7 dias</h3>
      <p className="text-muted-foreground">
        Se entrar, assistir e sentir que não é pra você, é só pedir o reembolso.
        Sem burocracia. Sem perguntas.
      </p>
    </div>
  </SectionWrapper>
);

export default OfferSection;
