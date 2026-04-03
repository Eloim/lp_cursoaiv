import SectionWrapper from "./SectionWrapper";

const ProductSection = () => (
  <SectionWrapper>
    <h2 className="font-display font-bold text-2xl md:text-4xl text-center mb-4">
      O <span className="text-gradient-gold">Autoridade Instantânea em Vídeo</span> é um curso 100% online, direto ao ponto.
    </h2>

    <div className="mt-10 space-y-4 max-w-2xl mx-auto">
      {[
        "Acesso imediato aos módulos",
        "Aulas práticas e curtas",
        "Aplicação em tempo real (você assiste e já executa)",
        "Método estruturado do básico ao nível profissional",
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3 text-secondary-foreground">
          <span className="text-primary">▸</span>
          <span>{item}</span>
        </div>
      ))}
    </div>

    <div className="mt-10 text-center">
      <p className="text-lg text-foreground mb-2">Você não vai estudar…</p>
      <p className="text-gradient-gold font-display font-bold text-2xl md:text-3xl">
        Você vai ajustar e ver resultado no mesmo dia
      </p>
    </div>
  </SectionWrapper>
);

export default ProductSection;
