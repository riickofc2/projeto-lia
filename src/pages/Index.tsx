
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '@/components/SearchBar';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const chapters = [
    { id: 'apresentacao', title: 'Apresentação', path: '/apresentacao' },
    { 
      id: 'capitulo1', 
      title: 'Bases históricas dos direitos humanos',
      path: '/capitulo/1',
      sections: [
        { id: '1.1', title: 'Origens filosóficas dos direitos humanos', path: '/capitulo/1/secao/1' },
        { id: '1.2', title: 'Origens jurídicas dos direitos humanos', path: '/capitulo/1/secao/2' },
        { id: '1.3', title: 'Origens políticas dos direitos humanos', path: '/capitulo/1/secao/3' },
        { id: '1.4', title: 'Direitos humanos: contextualização histórica', path: '/capitulo/1/secao/4' },
        { id: '1.5', title: 'Direitos humanos no Brasil', path: '/capitulo/1/secao/5' },
      ]
    }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex flex-col">
      {/* Header with Menu and Search */}
      <header className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 bg-slate-900 border-slate-700">
            <SheetHeader>
              <SheetTitle className="text-white">Sumário</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              {chapters.map((chapter) => (
                <div key={chapter.id} className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-white hover:bg-slate-800 h-auto p-3"
                    onClick={() => handleNavigation(chapter.path)}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-medium text-left break-words leading-tight">{chapter.title}</span>
                      <ChevronRight className="h-4 w-4 flex-shrink-0 ml-2" />
                    </div>
                  </Button>
                  {chapter.sections && (
                    <div className="ml-4 space-y-1">
                      {chapter.sections.map((section) => (
                        <Button
                          key={section.id}
                          variant="ghost"
                          className="w-full justify-start text-sm text-gray-300 hover:bg-slate-800 h-auto p-2"
                          onClick={() => handleNavigation(section.path)}
                        >
                          <span className="text-left break-words leading-tight">
                            <span className="font-medium">{section.id}</span> {section.title}
                          </span>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex items-center gap-4">
          <div className="text-white text-sm font-medium">Menu</div>
          <SearchBar />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
        <Card className="w-48 h-64 sm:w-64 sm:h-80 bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 shadow-2xl mb-6 sm:mb-8 overflow-hidden">
          <div className="w-full h-full relative">
            <img 
              src="/lovable-uploads/deba2f07-5c5f-49d4-afaf-ae8b1add89cf.png" 
              alt="Capa do livro Direitos Humanos e Relações Sociais"
              className="w-full h-full object-cover"
            />
          </div>
        </Card>

        <p className="text-gray-300 text-lg sm:text-xl mb-6 sm:mb-8">Fabiano Caxito</p>

        <Button
          onClick={() => navigate('/apresentacao')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-full max-w-xs"
        >
          Entrar
        </Button>
      </div>

      <footer className="text-center p-4 text-gray-400 text-sm">
        Livro Digital Interativo
      </footer>
    </div>
  );
};

export default Index;
