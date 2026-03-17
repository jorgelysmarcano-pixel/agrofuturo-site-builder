import Navbar from "@/components/Navbar";
import ContentCard from "@/components/ContentCard";
import SectionImage from "@/components/SectionImage";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* SEÇÃO 1 - Hero */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center bg-secondary overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/slide1-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-accent font-display text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
            Trabalho Escolar
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-primary-foreground mb-6 animate-fade-in-up leading-tight">
            AGRONOMIA: <br />
            <span className="text-accent">FUTURO SUSTENTÁVEL</span>
            <br /> E PRODUÇÃO
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl mb-8 animate-fade-in-up font-body">
            Por Jorge Lys
          </p>
          <a
            href="#paradigma"
            className="inline-block bg-primary hover:bg-primary/80 text-primary-foreground font-display font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Explorar ↓
          </a>
        </div>
      </section>

      {/* SEÇÃO 2 - Novo Paradigma */}
      <section id="paradigma" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Novo Paradigma da Agronomia</h2>
          <p className="section-subtitle">
            Equilíbrio e Eficiência: Onde o Lucro Encontra a Natureza
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ContentCard>
              <h3 className="font-display text-xl font-bold text-primary mb-3">
                O Futuro é Regenerativo
              </h3>
              <p className="quote-text">
                "O solo não é um suporte inerte para plantas, é um ecossistema.
                Com o plantio direto e a manutenção da palhada, reduzimos a
                temperatura da terra e seguramos água. Solo com biologia ativa
                responde melhor ao adubo e resiste mais a veranicos."
              </p>
            </ContentCard>
            <ContentCard>
              <h3 className="font-display text-xl font-bold text-primary mb-3">
                ILPF: Integração Lavoura-Pecuária-Floresta
              </h3>
              <p className="quote-text">
                Um modelo integrado que combina lavoura, pecuária e floresta no
                mesmo espaço, maximizando a produção e minimizando o impacto
                ambiental. O futuro da agricultura sustentável.
              </p>
            </ContentCard>
          </div>

          <SectionImage src="/images/slide2.jpg" alt="Novo paradigma da agronomia" />
        </div>
      </section>

      {/* SEÇÃO 3 - Saúde do Solo */}
      <section id="solo" className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Saúde do Solo: O Ativo Mais Precioso</h2>
          <p className="section-subtitle">Solo Vivo, Bolso Cheio.</p>

          <ContentCard className="max-w-3xl mx-auto mb-12">
            <h3 className="font-display text-xl font-bold text-primary mb-4">
              O Ecossistema Sob Nossos Pés
            </h3>
            <p className="quote-text">
              "O solo não é um suporte inerte para plantas, é um ecossistema.
              Com o plantio direto e a manutenção da palhada, reduzimos a
              temperatura da terra e seguramos a água. Solo com biologia ativa
              responde melhor ao adubo e resiste mais a veranicos."
            </p>
          </ContentCard>

          <div className="grid md:grid-cols-2 gap-6">
            <SectionImage src="/images/slide3-1.jpg" alt="Saúde do solo" />
            <SectionImage src="/images/slide3-2.jpg" alt="Solo vivo" />
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 - Tecnologia e Precisão */}
      <section id="tecnologia" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Tecnologia e Precisão</h2>
          <p className="section-subtitle">
            Dados que Plantam, Sensores que Colhem
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <SectionImage src="/images/slide4.jpg" alt="Tecnologia e precisão na agricultura" />
            <ContentCard>
              <h3 className="font-display text-xl font-bold text-primary mb-4">
                Agricultura de Precisão
              </h3>
              <p className="quote-text">
                "A era do 'olhômetro' acabou. Com agricultura de precisão,
                tratamos cada metro quadrado como único. Aplicar apenas onde é
                necessário reduz custos em até 30% e evita a lixiviação de
                químicos para os lençóis freáticos. É tecnologia a serviço da
                ética ambiental."
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-card-foreground">
                  <span className="text-primary font-bold">•</span> Redução de custos em até 30%
                </li>
                <li className="flex items-start gap-2 text-card-foreground">
                  <span className="text-primary font-bold">•</span> Sensores e drones monitoram o campo
                </li>
                <li className="flex items-start gap-2 text-card-foreground">
                  <span className="text-primary font-bold">•</span> Menos impacto ambiental
                </li>
              </ul>
            </ContentCard>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 - ILPF */}
      <section id="ilpf" className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-title">
            Integração Lavoura-Pecuária-Floresta
          </h2>
          <p className="section-subtitle">
            Sinergia em Campo: O Sistema 3 em 1
          </p>

          <ContentCard className="max-w-3xl mx-auto mb-12">
            <h3 className="font-display text-xl font-bold text-primary mb-4">
              O Novo Paradigma da Agronomia
            </h3>
            <p className="quote-text">
              "A ILPF é o ápice da agronomia moderna. Recuperamos pastagens
              degradadas, diversificamos o caixa do produtor com grãos e
              madeira, e ainda garantimos bem-estar animal. É o sistema que
              melhor simula o equilíbrio natural dentro de uma escala comercial."
            </p>
          </ContentCard>

          <div className="grid md:grid-cols-3 gap-6">
            <SectionImage src="/images/slide5-1.jpg" alt="Lavoura" />
            <SectionImage src="/images/slide5-2.jpg" alt="Pecuária" />
            <SectionImage src="/images/slide5-3.jpg" alt="Floresta" />
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 - O Futuro */}
      <section id="futuro" className="py-20 md:py-28 bg-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-center mb-6 font-display">
            O Futuro é Regenerativo
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/70 text-center mb-10 max-w-3xl mx-auto">
            Resiliência: O Legado da Nossa Safra
          </p>

          <div className="max-w-3xl mx-auto bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-12 border border-primary-foreground/20 cursor-pointer transition-all duration-300 hover:bg-accent/20"
            onClick={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "hsl(270, 85%, 83%)";
              el.style.color = "hsl(263, 70%, 30%)";
            }}
          >
            <p className="text-base md:text-lg italic leading-relaxed">
              "Para encerrar, o futuro exige que sejamos regenerativos. Não
              basta não degradar; precisamos recuperar. O equilíbrio entre
              produção e meio ambiente é o que garante que o agronegócio
              continue sendo o motor da economia pelas próximas décadas. O
              futuro já está plantado."
            </p>
            <p className="text-xs mt-4 opacity-60">👆 Clique para mudar a cor</p>
          </div>

          <SectionImage src="/images/slide6.jpg" alt="O futuro regenerativo" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-8 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/60 font-body text-sm">
            Trabalho escolar — Agronomia: Futuro Sustentável e Produção
          </p>
          <p className="text-accent font-display font-bold mt-2">
            Jorge Lys • 2º Ano — Ensino Médio
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
