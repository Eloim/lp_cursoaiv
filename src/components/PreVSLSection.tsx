import SectionWrapper from "./SectionWrapper";
import { ChevronRight } from "lucide-react";

const PreVSLSection = () => (
  <SectionWrapper alternate>
    <h2 className="font-display font-bold text-2xl md:text-4xl mb-8 text-center">
      Se você grava vídeos, mas sente que tem algo errado…{" "}
      <span className="text-gradient-gold">provavelmente tem.</span>
    </h2>

    <p className="text-muted-foreground text-center text-lg mb-8">
      E o pior: <strong className="text-foreground text-xl">você não sabe o que é</strong>
    </p>

  </SectionWrapper>
);

export default PreVSLSection;
