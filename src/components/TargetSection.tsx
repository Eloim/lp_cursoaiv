import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";

const targets = [
  "Grava vídeos, mas sente que parecem amadores",
  "Posta conteúdo e não recebe atenção",
  "Sente que tem algo errado, mas não sabe o que é",
  "Se compara com outros e sempre parece inferior",
  "Quer parecer profissional mesmo sendo iniciante",
  "Não quer gastar com equipamento caro",
  "Quer resultado rápido, sem complicação",
];

const TargetSection = () => (
  <SectionWrapper alternate>
    <h2 className="font-display font-bold text-2xl md:text-4xl text-center mb-10">
      Esse método é pra você que:
    </h2>

    <div className="space-y-4 max-w-2xl mx-auto mb-12">
      {targets.map((item, i) => (
        <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border">
          <span className="text-primary text-xl">✓</span>
          <span className="text-secondary-foreground">{item}</span>
        </div>
      ))}
    </div>

    <div className="text-center">
      <CTAButton>Quero parar de parecer amador nos meus vídeos</CTAButton>
    </div>
  </SectionWrapper>
);

export default TargetSection;
