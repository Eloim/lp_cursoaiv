import SectionWrapper from "./SectionWrapper";

const PainSection = () => (
  <SectionWrapper alternate>
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="font-display font-bold text-2xl md:text-4xl mb-8">
        Você sabe que tem algo errado…
      </h2>

      <div className="space-y-4 text-lg text-muted-foreground mb-8">
        <p>Mas não sabe o quê.</p>
        <p>Você grava. Regrava. Posta.</p>
        <p>E nada muda.</p>
        <p>
          Enquanto isso, vê gente com menos conteúdo…{" "}
          <strong className="text-foreground">mas mais resultado.</strong>
        </p>
      </div>

      <p className="text-foreground text-lg mb-4">O que você quer não é aprender vídeo.</p>

      <div className="space-y-2 text-xl font-display font-bold">
        <p className="text-gradient-gold">👉 Você quer ser levado a sério</p>
        <p className="text-gradient-gold">👉 Você quer parar de ser ignorado</p>
        <p className="text-gradient-gold">👉 Você quer parecer maior do que é hoje</p>
      </div>
    </div>
  </SectionWrapper>
);

export default PainSection;
