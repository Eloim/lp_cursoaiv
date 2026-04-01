import SectionWrapper from "./SectionWrapper";

const PreVSLSection = () => (
  <SectionWrapper alternate>
    <h2 className="font-display font-bold text-2xl md:text-4xl mb-8 text-center">
      Se você grava vídeos, mas sente que tem algo errado…{" "}
      <span className="text-gradient-gold">provavelmente tem.</span>
    </h2>

    <p className="text-muted-foreground text-center text-lg mb-8">
      E o pior: 👉 <strong className="text-foreground">você não sabe o que é</strong>
    </p>

    <p className="text-muted-foreground text-center mb-6">Nesse vídeo, você vai entender:</p>

    <ul className="space-y-4 max-w-2xl mx-auto">
      {[
        'Por que seus vídeos parecem "estranhos" mesmo quando o conteúdo é bom',
        "O erro invisível que faz as pessoas não levarem você a sério",
        "Como parecer profissional usando apenas o que você já tem",
        "O que muda completamente a forma como você é percebido em poucos minutos",
        "Por que alguns vídeos prendem atenção… e outros são ignorados",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-secondary-foreground">
          <span className="text-primary mt-1">▸</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>

    {/* VSL placeholder */}
    <div className="mt-12 aspect-video bg-secondary rounded-lg border border-gold flex items-center justify-center">
      <span className="text-muted-foreground text-lg">🎬 Vídeo de Vendas (VSL)</span>
    </div>
  </SectionWrapper>
);

export default PreVSLSection;
