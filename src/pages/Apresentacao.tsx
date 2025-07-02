
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
        <h1 className="text-white text-lg font-semibold">Direitos Humanos e Relações Sociais</h1>
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
            <h2 className="text-white text-xl font-bold mb-2">Apresentação do Curso</h2>
            <p className="text-gray-400 text-sm">Videoaula introdutória sobre Direitos Humanos e Relações Sociais</p>
          </CardContent>
        </Card>

        {/* Text Content */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <h3 className="text-white text-2xl font-bold mb-4">Bem-vindo ao Curso</h3>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Este curso apresenta uma abordagem abrangente sobre os direitos humanos e suas 
                implicações nas relações sociais contemporâneas. Através de uma perspectiva 
                histórica, filosófica e jurídica, exploraremos os fundamentos que sustentam 
                a construção e aplicação dos direitos humanos em diferentes contextos sociais.
              </p>
              <p>
                Ao longo deste material, você terá acesso a videoaulas, textos complementares, 
                recursos multimídia e ferramentas interativas que facilitarão sua compreensão 
                dos conceitos fundamentais relacionados aos direitos humanos.
              </p>
              <p>
                O conteúdo está estruturado de forma progressiva, começando pelas bases 
                históricas e evoluindo para as aplicações práticas dos direitos humanos 
                no contexto brasileiro e internacional.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Início
          </Button>
          <Button
            onClick={() => navigate('/capitulo/1')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
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
