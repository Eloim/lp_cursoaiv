import SectionWrapper from "./SectionWrapper";

const AuthoritySection = () => (
  <SectionWrapper alternate texture="radial">
    <p className="text-muted-foreground text-center mb-4">Eu não ensino vídeo baseado em teoria.</p>

    <h2 className="font-display font-bold text-2xl md:text-4xl text-center mb-2">
      Meu nome é <span className="text-gradient-gold">Eloim Machado Tavares</span>
    </h2>

    <p className="text-center text-lg text-secondary-foreground mb-8">
      São mais de <strong className="text-foreground">21 anos de experiência</strong>, sendo{" "}
      <strong className="text-foreground">12 trabalhando com vídeo</strong>.
    </p>

    <div className="grid md:grid-cols-2 gap-3 max-w-2xl mx-auto mb-8">
      {[
        "Produção audiovisual",
        "Pós-produção de som para filmes",
        "Direção de fotografia",
        "Direção de projetos",
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2 p-3 rounded glass-warm">
          <span className="text-primary text-sm">●</span>
          <span className="text-secondary-foreground text-sm">{item}</span>
        </div>
      ))}
    </div>

    <div className="text-center space-y-2">
      <p className="text-foreground text-lg">Eu não aprendi vídeo no Instagram</p>
      <p className="text-gradient-gold font-display font-bold text-xl md:text-2xl">
        Eu aprendi na prática, no set, no erro e na execução real
      </p>
    </div>
  </SectionWrapper>
);

export default AuthoritySection;
