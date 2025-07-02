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
      A discussão sobre os direitos humanos é central em nossa sociedade contemporânea, marcada por grandes diferenças entre as parcelas mais ricas e as mais marginalizadas da população global. Questões políticas, econômicas, raciais, étnicas e sociais dividem os grupos humanos a ponto de impedir que uma parcela significativa da humanidade não tenha acesso aos seus direitos mais básicos.

      No entanto, os debates sobre os direitos individuais não são recentes. Na verdade, estão presentes desde os pensamentos dos primeiros filósofos clássicos. Logo, as bases dos conceitos que norteiam as legislações quanto aos direitos humanos podem ser rastreadas nas ideias da lei natural e do direito natural.

      Platão discute a lei natural em alguns de seus diálogos, como em Timeu, no qual o filósofo aponta o indivíduo como um ser social que deve agir de modo justo com os outros indivíduos (MATSUURA, 2019). A lei natural também é discutida por Platão em Górgias, outro de seus diálogos, publicado originalmente por volta do ano 403 a.C. Em uma discussão entre Sócrates e Cálicles a respeito da justiça, Platão (2006, p. 167) define: "não é, portanto, apenas em virtude da lei que é mais feio praticar algum ato injusto do que ser vítima de injustiça, e que a justiça consiste na igualdade, mas também por natureza".

      Em uma de suas obras mais importantes, A República, o filósofo aprofunda as discussões sobre a justiça e sobre o que chama de direito natural, utilizando o termo physei dikaion (justo por natureza) para explicar como esse direito é diferente do direito fundado nas leis escritas pelos seres humanos. Segundo Platão (2006), as ações humanas são mutáveis e individuais, portanto o direito humano é diferente do direito natural, que é sempre igual e imutável para todos (NEIVA, 2011).

      A discussão sobre o physei dikaion está presente também na obra Ética a Nicômaco (ARISTÓTELES, 2009), em que Aristóteles discute os conceitos de justiça e equidade. Para o filósofo, equidade e justiça estão interligadas. Contudo, não é possível afirmarmos que tudo o que é lei seja totalmente pleno e justo, pois não abarca todas as possibilidades e realidades de todos os indivíduos. Mesmo que as leis desenvolvidas pelo grupo social sejam justas, nem tudo que é justo, do ponto de vista da natureza humana e das relações sociais, é abarcado pela lei. Dessa forma, o direito natural deve estar acima dos códigos legais desenvolvidos pela sociedade (MIRANDA FILHO, 2013).

      São Tomás de Aquino (2005), um dos principais filósofos católicos, retoma o tema dos direitos naturais em Suma Teológica, obra na qual discute as diversas modalidades da lei e as classifica em quatro diferentes tipos: lei eterna, lei natural, lei humana e lei divina positiva.

      A lei eterna é aquela que está relacionada a Deus e dirige os atos dos indivíduos. Já a lei natural, segundo Aquino (2005), surge da relação entre a lei eterna e a ação moral do ser humano racional. Enquanto a lei eterna é infinita, a lei natural é finita e temporal, por se relacionar à humanidade e ao grupo social. A lei natural é, para o filósofo, a manifestação da lei eterna no indivíduo, que possibilita a ele poder distinguir entre o bem e o mal. Para que os princípios e as normas éticas da lei eterna e da lei natural possam ser colocados em prática no cotidiano das relações humanas, é necessário que sejam transcritos e traduzidos para regras específicas e normas explícitas. Essa é a origem da terceira lei, a lei humana, um ordenamento jurídico que possibilita a convivência em sociedade.

      Como filósofo católico, Aquino (2005) desenvolve um quarto tipo de lei, a denominada lei divina positiva. Para ele, essa lei é necessária para que o ser humano seja virtuoso e possa agir tanto de acordo com a lei eterna quanto com a lei natural, e isso depende de ele receber ou não a revelação divina. O ser humano é falho e, para ter a certeza de que suas ações não sejam fundamentadas em juízos equivocados, deve seguir a lei divina. As leis humanas dizem respeito apenas aos atos externos que ocorrem nas relações humanas. Entretanto, para ser virtuoso, o ser humano precisa seguir internamente os ensinamentos e as regras divinas. De acordo com o filósofo cristão, a lei humana não consegue controlar e castigar todos os males realizados pelo indivíduo. Assim, a lei divina pune aqueles que não são julgados pela lei humana.

      Aquino – assim como outro importante filósofo católico da Idade Média, Santo Agostinho – estabelece uma relação entre o direito natural, discutido pelos filósofos gregos, e a fé cristã, mostrando que a lei divina e a lei eterna são a base sobre a qual se estabelece a lei natural, que coloca todos os seres humanos como iguais.

      A lei humana, por ser imperfeita e incompleta, não garante que essa igualdade seja colocada em prática. Por isso, os direitos humanos, apesar de serem um direito de todos os indivíduos, não são totalmente garantidos pela lei humana.

      Martin Luther King Jr., um dos mais proeminentes líderes na luta pelos direitos humanos no século XX, apoiou algumas de suas ideias nessa visão da filosofia católica da era medieval, tanto nas ideias de Santo Agostinho quanto nas de São Tomás de Aquino. Conforme King: "todos os estatutos da segregação são injustos porque a segregação distorce a alma, prejudica a personalidade, dá ao segregacionista um sentido falso de superioridade e ao segregado um sentido falso de inferioridade" (KING, 1970 apud MIRANDA FILHO, 2013, p. 18).

      Para Miranda Filho (2013), estão presentes nas ideias e na luta de King aspectos relacionados à lei eterna e à lei natural. A lei humana, no momento histórico no qual se dá a luta de King, não garante a igualdade, pois é segregacionista. Para o líder, só com o total respeito ao direito de todos os indivíduos, com equidade e justiça, a lei humana se aproximaria da justiça divina e natural.
    `,
    videoTitle: 'Fundamentos Filosóficos dos Direitos Humanos',
    videoUrl: 'https://player-serverless.iesde.com.br/prod/player?path=ZGlyZWl0b3NfaHVtYW5vc19lX3JlbGFjb2VzX3NvY2lhaXMvZGlyZWl0b3NfaHVtYW5vc19lX3JlbGFjb2VzX3NvY2lhaXNfMDBfc2VjX2FwcmVzZW50YWNhb18yNjY3NDMubXA0'
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
            <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden mb-4">
              {section.videoUrl ? (
                <iframe
                  src={section.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title={section.videoTitle}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700 w-16 h-16 rounded-full">
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
              )}
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
