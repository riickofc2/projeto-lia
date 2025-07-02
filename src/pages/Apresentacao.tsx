
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FABMenu from '@/components/FABMenu';

const Apresentacao = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/')}
          className="text-white hover:bg-slate-800"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-white text-base sm:text-lg font-semibold text-center flex-1 mx-4 truncate">
          Direitos Humanos e Relações Sociais
        </h1>
        <div className="w-10"></div>
      </header>

      {/* Content */}
      <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Video Section */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-4 sm:p-6">
            <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden mb-4">
              <iframe
                src="https://player-serverless.iesde.com.br/prod/player?path=ZGlyZWl0b3NfaHVtYW5vc19lX3JlbGFjb2VzX3NvY2lhaXMvZGlyZWl0b3NfaHVtYW5vc19lX3JlbGFjb2VzX3NvY2lhaXNfMDBfc2VjX2FwcmVzZW50YWNhb18yNjY3NDMubXA0"
                className="w-full h-full"
                allowFullScreen
                title="Apresentação do Curso"
              />
            </div>
            <h2 className="text-white text-lg sm:text-xl font-bold mb-2">Apresentação do Curso</h2>
            <p className="text-gray-400 text-sm">Videoaula introdutória sobre Direitos Humanos e Relações Sociais</p>
          </CardContent>
        </Card>

        {/* Text Content */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">Apresentação</h3>
            <div className="text-gray-300 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Embora a luta pelos direitos humanos esteja presente em grandes marcos da história da civilização, como na Revolução Francesa e na Declaração de Independência dos Estados Unidos, somente em meados do século XX, com a formação da Organização das Nações Unidas (ONU), é que o tema ganhou projeção global. Após mais de 70 anos, o que se observa na prática são parcelas cada vez mais significativas da população mundial tendo seus direitos mais básicos negados. Mesmo que legislações e tratados supranacionais definam os direitos humanos como base da relação entre os povos, o que observamos é uma grande distância entre o que as leis defendem e o que de fato acontece.
              </p>
              <p>
                O primeiro capítulo deste livro aborda o desenvolvimento histórico da discussão sobre os direitos humanos, desde as primeiras civilizações até a atualidade, traçando um paralelo entre direitos individuais e filosofia, política, legislações nacionais e tratados internacionais. No segundo capítulo é discutida a miscigenação étnico-racial do povo brasileiro, que se por um lado traz benefícios para o país, por outro alimenta o racismo, a discriminação, o preconceito e a xenofobia, temas que são abordados em seus contextos social, cultural, profissional e educacional, bem como os conceitos de raça e etnia.
              </p>
              <p>
                Os direitos humanos, as discriminações e os preconceitos relacionados ao gênero, à sexualidade e à diversidade sexual são debatidos no terceiro capítulo. Trata-se de temas urgentes e importantes na contemporaneidade, em especial em um país no qual as questões de gênero ainda causam perseguições, violência e mortes. Os movimentos LGBTQIA+ e feminista também são apresentados, bem como suas conquistas e seus desafios.
              </p>
              <p>
                O quarto capítulo tem como foco a discussão sobre identidade, alteridade e cultura. O reconhecimento das diferenças e da alteridade é fundamental para que os direitos humanos de todos que fazem parte da sociedade sejam respeitados. Também são examinados os aspectos relacionados ao multiculturalismo, em um mundo no qual as fronteiras entre países e culturas são cada vez mais tênues.
              </p>
              <p>
                Por fim, o quinto capítulo trata da desigualdade social no Brasil, da cidadania, da inclusão social e das relações entre estas e os direitos humanos. A história do país é marcada por questões étnico-raciais, econômicas e culturais que resultaram em uma sociedade desigual, em que uma parte significativa da população ainda não tem seus direitos humanos plenamente garantidos. Altos níveis de desemprego e subemprego, falta de qualidade de estruturas e serviços públicos, dificuldade de acesso à educação e carência de espaços de lazer e acesso à cultura são apenas alguns dos exemplos que mostram como a inclusão social ainda não é uma realidade para toda a população brasileira.
              </p>
              <p>
                Ao final desta obra, esperamos que você passe por um despertar de sua consciência quanto à realidade dos direitos humanos tanto no Brasil como no mundo.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700 w-full sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Início
          </Button>
          <Button
            onClick={() => navigate('/capitulo/1')}
            className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
          >
            Próximo: Capítulo 1
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* FAB Menu */}
      <FABMenu context="apresentacao" chapterTitle="Apresentação do Curso" />
    </div>
  );
};

export default Apresentacao;
