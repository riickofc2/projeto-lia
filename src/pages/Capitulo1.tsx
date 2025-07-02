
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/apresentacao')}
          className="text-white hover:bg-slate-800"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-white text-lg font-semibold">Capítulo 1</h1>
        <div className="w-10"></div>
      </header>

      {/* Content */}
      <div className="p-6 max-w-4xl mx-auto space-y-8">
        {/* Chapter Title */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <h2 className="text-white text-3xl font-bold mb-4">
              Bases históricas dos direitos humanos
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Neste capítulo, exploraremos as origens e o desenvolvimento histórico dos direitos humanos, 
              analisando suas raízes filosóficas, jurídicas e políticas que moldaram a compreensão 
              contemporânea desses direitos fundamentais.
            </p>
          </CardContent>
        </Card>

        {/* Introduction Text */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <h3 className="text-white text-xl font-bold mb-4">Introdução</h3>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Os direitos humanos constituem um conjunto de princípios e normas que reconhecem 
                a dignidade inerente a todos os seres humanos, independentemente de sua origem, 
                raça, religião, gênero ou qualquer outra característica distintiva.
              </p>
              <p>
                Para compreender plenamente a importância e a aplicação dos direitos humanos 
                na atualidade, é fundamental analisar suas bases históricas, que remontam a 
                diferentes tradições filosóficas, desenvolvimentos jurídicos e movimentos políticos 
                ao longo dos séculos.
              </p>
              <p>
                Este capítulo apresenta uma análise detalhada dessas origens, proporcionando 
                uma compreensão abrangente dos fundamentos que sustentam os direitos humanos 
                como os conhecemos hoje.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sections */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <h3 className="text-white text-xl font-bold mb-4">Seções do Capítulo</h3>
            <div className="space-y-3">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="outline"
                  className="w-full justify-start h-auto p-4 bg-slate-900 border-slate-600 text-white hover:bg-slate-700"
                  onClick={() => navigate(section.path)}
                >
                  <div className="text-left">
                    <p className="font-semibold">{section.title}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-auto" />
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => navigate('/apresentacao')}
            className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar: Apresentação
          </Button>
          <Button
            onClick={() => navigate('/capitulo/1/secao/1')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
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
