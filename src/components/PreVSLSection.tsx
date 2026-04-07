import SectionWrapper from "./SectionWrapper";

const PreVSLSection = () => (
  <SectionWrapper alternate>
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-display font-bold text-2xl md:text-4xl">
        Se você grava vídeos, mas sente que tem algo errado…{" "}
        <span className="text-gradient-gold">provavelmente tem.</span>
      </h2>
      <p className="text-muted-foreground text-lg md:text-xl">
        E o pior: <strong className="text-foreground text-xl md:text-2xl">você não sabe o que é</strong>
      </p>
    </div>
  </SectionWrapper>
);

export default PreVSLSection;
