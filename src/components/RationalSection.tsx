import SectionWrapper from "./SectionWrapper";

const RationalSection = () => (
  <SectionWrapper>
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="font-display font-bold text-2xl md:text-4xl mb-8">
        Fatos que você não pode ignorar
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          "Pessoas julgam credibilidade em segundos",
          "Vídeo é o formato mais consumido hoje",
          "Mais retenção = mais vendas",
          "Percepção define valor percebido",
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-lg bg-card border border-border text-secondary-foreground">
            {item}
          </div>
        ))}
      </div>

      <p className="text-gradient-gold font-display font-bold text-xl">
        👉 Não é opinião. É comportamento humano.
      </p>
    </div>
  </SectionWrapper>
);

export default RationalSection;
