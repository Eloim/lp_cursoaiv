import SectionWrapper from "./SectionWrapper";
import authorPhoto from "@/assets/author-photo.jpg";

const StorySection = () => (
  <SectionWrapper texture="mesh">
    <h2 className="font-display font-bold text-2xl md:text-4xl text-center mb-10">
      Sobre o Autor
    </h2>

    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-3xl mx-auto">
      {/* Photo */}
      <div className="shrink-0">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden glass-gold glow-gold">
          <img
            src={authorPhoto}
            alt="Eloim Machado Tavares"
            className="w-full h-full object-cover object-[center_20%]"
            width={256}
            height={256}
          />
          <div className="absolute inset-0 rounded-2xl border border-gold/30 pointer-events-none" />
        </div>
      </div>

      {/* Text */}
      <div className="text-center md:text-left">
        <div className="space-y-3 text-lg text-muted-foreground leading-relaxed">
          <p>Eu não comecei como diretor.</p>
          <p>Comecei carregando equipamento, como assistente.</p>
          <p>Depois de anos, fui aperfeiçoando… estudando, errando, aprendendo.</p>
          <p>Passei por empresa de som e luz, estúdio de gravação, produtoras de publicidade e corporativo, cinema…</p>
          <p>Até entender uma coisa:</p>
        </div>

        <div className="mt-6 space-y-2">
          <p className="text-foreground font-display font-bold text-xl">Não é sobre técnica</p>
          <p className="text-gradient-gold font-display font-bold text-2xl md:text-3xl">É sobre percepção</p>
        </div>

        <p className="mt-6 text-muted-foreground text-lg">
          Porque hoje, com muito menos do que eu tinha lá atrás…
          qualquer pessoa consegue fazer uma boa gravação. <strong className="text-foreground">Se souber o que ajustar.</strong>
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default StorySection;
