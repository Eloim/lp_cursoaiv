import SectionWrapper from "./SectionWrapper";

const without = ["Tentativa e erro", "Vídeos inconsistentes", "Baixa retenção", "Aparência amadora", "Frustração constante"];
const withMethod = ["Clareza total", "Ajustes rápidos", "Vídeos profissionais", "Mais atenção", "Mais autoridade"];

const ComparisonSection = () => (
  <SectionWrapper alternate>
    <h2 className="font-display font-bold text-2xl md:text-4xl text-center mb-10">
      A diferença é clara
    </h2>

    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/20">
        <h3 className="font-display font-bold text-lg mb-4 text-center">❌ Sem o método</h3>
        <ul className="space-y-3">
          {without.map((item, i) => (
            <li key={i} className="text-muted-foreground flex items-center gap-2">
              <span className="text-destructive">✕</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 rounded-xl bg-primary/10 border border-gold/30 glow-gold-sm">
        <h3 className="font-display font-bold text-lg mb-4 text-center">✅ Com o método</h3>
        <ul className="space-y-3">
          {withMethod.map((item, i) => (
            <li key={i} className="text-foreground flex items-center gap-2">
              <span className="text-primary">✓</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default ComparisonSection;
