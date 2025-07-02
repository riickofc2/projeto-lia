
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FABMenu from '@/components/FABMenu';

const Capitulo1 = () => {
  const navigate = useNavigate();

  const sections = [
    { id: 1, title: '1.1 Origens filosóficas dos direitos humanos', path: '/capitulo/1/secao/1' },
    { id: 2, title: '1.2 Origens jurídicas dos direitos humanos', path: '/capitulo/1/secao/2' },
    { id: 3, title: '1.3 Origens políticas dos direitos humanos', path: '/capitulo/1/secao/3' },
    { id: 4, title: '1.4 Direitos humanos: contextualização histórica', path: '/capitulo/1/secao/4' },
    { id: 5, title: '1.5 Direitos humanos no Brasil', path: '/capitulo/1/secao/5' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-muted">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/apresentacao')}
          className="text-white hover:bg-primary/20"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-white text-lg font-semibold">Capítulo 1</h1>
        <div className="w-10"></div>
      </header>

      {/* Content */}
      <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Chapter Title */}
        <Card className="bg-card border-border">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-card-foreground text-2xl sm:text-3xl font-bold mb-4 break-words leading-tight">
              Bases históricas dos direitos humanos
            </h2>
          </CardContent>
        </Card>

        {/* Introduction Text */}
        <Card className="bg-card border-border">
          <CardContent className="p-4 sm:p-6">
            <div className="text-muted-foreground space-y-4 text-sm sm:text-base leading-relaxed">
              <p className="break-words">
                A discussão sobre os direitos humanos apresenta uma dicotomia: ao mesmo tempo em que 
                todos os seres humanos têm os mesmos direitos com relação aos diversos fatores que 
                compõem a vida em sociedade (direito à vida, à saúde, à educação e a oportunidades iguais), 
                o que se observa na prática é que parcelas cada vez mais significativas da população têm 
                seus direitos mais básicos negados.
              </p>
              <p className="break-words">
                A pobreza, as guerras e as pandemias globais mostram que a sociedade se divide entre um 
                grupo que tem acesso a seus direitos e outro que se vê marginalizado e não é beneficiado 
                pelo aumento da riqueza ou pelo desenvolvimento da humanidade. Apesar de as legislações 
                globais e nacionais definirem nitidamente os direitos humanos, colocá-los em prática 
                requer mudanças profundas na organização política, econômica, jurídica e social. Ainda 
                há uma grande distância entre o que as leis pregam e o que acontece no mundo.
              </p>
              <p className="break-words">
                Neste capítulo, vamos abordar o desenvolvimento da discussão sobre os direitos humanos, 
                desde as primeiras civilizações até o momento atual, traçando um paralelo entre direitos 
                individuais e filosofia; esta discute a igualdade entre os seres humanos. Ainda, 
                trataremos da relação entre os direitos humanos e a política, pois as duas áreas guardam 
                uma profunda relação, visto que é papel do Estado garantir que os direitos das parcelas 
                mais pobres e marginalizadas da população sejam garantidos.
              </p>
              <p className="break-words">
                Portanto, discutiremos também as origens das legislações que abordam os direitos humanos 
                e como elas evoluíram ao longo do tempo, mostrando como se organizam as declarações globais 
                que orientam as legislações nacionais sobre o tema, especialmente no Brasil.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sections */}
        <Card className="bg-card border-border">
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-card-foreground text-lg sm:text-xl font-bold mb-4">Seções do Capítulo</h3>
            <div className="space-y-3">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="outline"
                  className="w-full justify-start bg-muted border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground p-4 h-auto min-h-[60px]"
                  onClick={() => navigate(section.path)}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-left font-semibold text-xs sm:text-sm leading-relaxed flex-1 pr-4 whitespace-normal break-words">
                      {section.title}
                    </span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0" />
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate('/apresentacao')}
            className="bg-card border-border text-card-foreground hover:bg-accent hover:text-accent-foreground w-full sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar: Apresentação
          </Button>
          <Button
            onClick={() => navigate('/capitulo/1/secao/1')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
          >
            Começar: Seção 1.1
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* FAB Menu */}
      <FABMenu context="capitulo1" chapterTitle="Bases históricas dos direitos humanos" />
    </div>
  );
};

export default Capitulo1;
