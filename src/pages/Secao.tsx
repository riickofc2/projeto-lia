
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import FABMenu from '@/components/FABMenu';

const sectionData = {
  1: {
    title: 'Origens filosóficas dos direitos humanos',
    content: `
      As origens filosóficas dos direitos humanos remontam às tradições do pensamento ocidental 
      e oriental, incluindo contribuições da filosofia grega, do cristianismo, do iluminismo 
      e de outras correntes filosóficas.

      Os filósofos gregos, como Aristóteles, já discutiam conceitos relacionados à justiça 
      e à dignidade humana. O cristianismo trouxe a ideia da igualdade fundamental entre 
      todos os seres humanos, criados à imagem de Deus.

      O período do Iluminismo foi particularmente importante, com filósofos como John Locke, 
      Immanuel Kant e Jean-Jacques Rousseau desenvolvendo teorias sobre direitos naturais, 
      dignidade humana e contrato social que influenciaram profundamente a concepção moderna 
      dos direitos humanos.
    `,
    videoTitle: 'Fundamentos Filosóficos dos Direitos Humanos'
  },
  2: {
    title: 'Origens jurídicas dos direitos humanos',
    content: `
      As origens jurídicas dos direitos humanos podem ser rastreadas através de documentos 
      históricos fundamentais que estabeleceram precedentes para a proteção legal dos 
      direitos individuais.

      A Magna Carta de 1215, embora limitada em escopo, estabeleceu o princípio de que 
      mesmo o poder real estava sujeito a limitações legais. A Petição de Direitos de 1628 
      e o Bill of Rights inglês de 1689 expandiram essas proteções.

      A Declaração de Independência Americana de 1776 e a Declaração dos Direitos do Homem 
      e do Cidadão de 1789 representaram marcos importantes na codificação legal dos direitos 
      humanos fundamentais.
    `,
    videoTitle: 'Desenvolvimento Jurídico dos Direitos Humanos'
  },
  3: {
    title: 'Origens políticas dos direitos humanos',
    content: `
      As origens políticas dos direitos humanos estão intimamente ligadas às lutas pelo 
      poder e pela liberdade ao longo da história, incluindo revoluções, movimentos sociais 
      e transformações políticas.

      A Revolução Inglesa, a Revolução Americana e a Revolução Francesa foram eventos 
      fundamentais que estabeleceram novos paradigmas políticos baseados na soberania 
      popular e na limitação do poder governamental.

      Os movimentos abolicionistas, as lutas pelos direitos das mulheres, e outros movimentos 
      sociais contribuíram para expandir a compreensão e aplicação dos direitos humanos 
      em diferentes contextos políticos.
    `,
    videoTitle: 'Movimentos Políticos e Direitos Humanos'
  },
  4: {
    title: 'Direitos humanos: contextualização histórica',
    content: `
      A contextualização histórica dos direitos humanos revela como esses direitos evoluíram 
      em resposta a diferentes desafios e necessidades históricas, desde as primeiras 
      civilizações até os desenvolvimentos contemporâneos.

      As atrocidades das duas guerras mundiais, especialmente o Holocausto, criaram um 
      impulso internacional para estabelecer proteções universais dos direitos humanos, 
      culminando na Declaração Universal dos Direitos Humanos de 1948.

      A Guerra Fria, os processos de descolonização e os movimentos pelos direitos civis 
      continuaram a moldar a evolução e aplicação dos direitos humanos no século XX e XXI.
    `,
    videoTitle: 'Evolução Histórica dos Direitos Humanos'
  },
  5: {
    title: 'Direitos humanos no Brasil',
    content: `
      A história dos direitos humanos no Brasil reflete as particularidades do desenvolvimento 
      político, social e jurídico do país, desde o período colonial até a redemocratização.

      O período colonial e imperial foi marcado por graves violações dos direitos humanos, 
      incluindo a escravidão e a marginalização das populações indígenas. A abolição da 
      escravatura em 1888 representou um marco importante, embora a implementação efetiva 
      da igualdade tenha sido um processo longo e ainda em andamento.

      A Constituição de 1988 estabeleceu um marco fundamental para os direitos humanos no 
      Brasil, consagrando princípios como a dignidade da pessoa humana e estabelecendo 
      um amplo catálogo de direitos fundamentais. A criação de instituições como a 
      Defensoria Pública e o fortalecimento do Ministério Público contribuíram para 
      a proteção desses direitos.
    `,
    videoTitle: 'Direitos Humanos na História do Brasil'
  }
};

const Secao = () => {
  const { secaoId } = useParams();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState<number>(1);

  useEffect(() => {
    if (secaoId) {
      setCurrentSection(parseInt(secaoId));
    }
  }, [secaoId]);

  const section = sectionData[currentSection as keyof typeof sectionData];
  
  const goToSection = (sectionNumber: number) => {
    navigate(`/capitulo/1/secao/${sectionNumber}`);
  };

  const goToPrevious = () => {
    if (currentSection > 1) {
      goToSection(currentSection - 1);
    } else {
      navigate('/capitulo/1');
    }
  };

  const goToNext = () => {
    if (currentSection < 5) {
      goToSection(currentSection + 1);
    }
  };

  if (!section) {
    return <div>Seção não encontrada</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/capitulo/1')}
          className="text-white hover:bg-slate-800"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-white text-lg font-semibold">Seção 1.{currentSection}</h1>
        <div className="w-10"></div>
      </header>

      {/* Content */}
      <div className="p-6 max-w-4xl mx-auto space-y-8">
        {/* Video Section */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center mb-4">
              <Button className="bg-blue-600 hover:bg-blue-700 w-16 h-16 rounded-full">
                <Play className="h-8 w-8 ml-1" />
              </Button>
            </div>
            <h2 className="text-white text-xl font-bold mb-2">{section.videoTitle}</h2>
            <p className="text-gray-400 text-sm">Videoaula sobre {section.title.toLowerCase()}</p>
          </CardContent>
        </Card>

        {/* Section Title */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <h2 className="text-white text-2xl font-bold mb-4">
              1.{currentSection} {section.title}
            </h2>
          </CardContent>
        </Card>

        {/* Text Content */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="text-gray-300 space-y-4 leading-relaxed">
              {section.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={goToPrevious}
            className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {currentSection > 1 ? `Anterior: 1.${currentSection - 1}` : 'Voltar ao Capítulo'}
          </Button>
          {currentSection < 5 && (
            <Button
              onClick={goToNext}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Próximo: 1.{currentSection + 1}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>

      {/* FAB Menu */}
      <FABMenu 
        context={`secao-1-${currentSection}`} 
        chapterTitle={`1.${currentSection} ${section.title}`} 
      />
    </div>
  );
};

export default Secao;
