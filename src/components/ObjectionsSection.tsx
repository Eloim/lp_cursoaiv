import SectionWrapper from "./SectionWrapper";

const objections = [
  { q: '"Meu problema não é vídeo, é falta de cliente"', a: "Sem percepção, você nem entra no jogo" },
  { q: '"Não tenho equipamento bom"', a: "Você já tem mais do que precisa — só está usando errado" },
  { q: '"Não levo jeito pra câmera"', a: "Isso não é talento, é direção" },
  { q: '"Isso parece detalhe"', a: "O cérebro decide em segundos — detalhe define tudo" },
  { q: '"Agora não é o momento"', a: "Enquanto você espera, outros estão sendo escolhidos" },
];

const ObjectionsSection = () => (
  <SectionWrapper texture="dots">
    <h2 className="font-display font-bold text-2xl md:text-4xl text-center mb-10">
      Ainda tem dúvidas?
    </h2>

    <div className="space-y-4 max-w-2xl mx-auto">
      {objections.map((obj, i) => (
        <div key={i} className="p-5 rounded-lg glass-neutral hover:border-gold/20 transition-all">
          <p className="text-muted-foreground italic mb-2">{obj.q}</p>
          <p className="text-foreground font-medium">→ {obj.a}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ObjectionsSection;
