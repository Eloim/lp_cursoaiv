import SectionWrapper from "./SectionWrapper";

const StorySection = () => (
  <SectionWrapper>
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="font-display font-bold text-2xl md:text-4xl mb-8">
        Sobre o Autor
      </h2>

      <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
        <p>Eu não comecei como diretor.</p>
        <p>Comecei carregando equipamento.</p>
        <p>Queria trabalhar com som.</p>
        <p>Depois de anos, fui entrando mais fundo… estudando, errando, aprendendo.</p>
        <p>Passei por estúdio, gravação, engenharia, cinema…</p>
        <p>Até entender uma coisa:</p>
      </div>

      <div className="mt-6 space-y-2 text-xl font-display font-bold">
        <p>👉 Não é sobre técnica</p>
        <p className="text-gradient-gold">👉 É sobre percepção</p>
      </div>

      <p className="mt-6 text-muted-foreground text-lg">
        Porque hoje, com muito menos do que eu tinha lá atrás…
        qualquer pessoa consegue parecer profissional. <strong className="text-foreground">Se souber o que ajustar.</strong>
      </p>
    </div>
  </SectionWrapper>
);

export default StorySection;
