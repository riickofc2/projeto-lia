
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, MessageCircle, Headphones, FileText, Network, X } from 'lucide-react';

interface FABMenuProps {
  context?: string;
  chapterTitle?: string;
}

const FABMenu = ({ context = "geral", chapterTitle = "Conteúdo" }: FABMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const menuItems = [
    {
      id: 'mentor',
      icon: MessageCircle,
      label: 'Mentor Digital',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      id: 'podcast',
      icon: Headphones,
      label: 'Podcast',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      id: 'resumo',
      icon: FileText,
      label: 'Resumo',
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      id: 'mapa',
      icon: Network,
      label: 'Mapa Mental',
      color: 'bg-orange-600 hover:bg-orange-700'
    }
  ];

  return (
    <>
      {/* FAB Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
            isOpen 
              ? 'bg-red-600 hover:bg-red-700 rotate-45' 
              : 'bg-slate-800 hover:bg-slate-700'
          }`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </Button>

        {/* Menu Items */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 space-y-3 animate-fade-in">
            {menuItems.map((item, index) => (
              <Dialog key={item.id} open={activeDialog === item.id} onOpenChange={(open) => setActiveDialog(open ? item.id : null)}>
                <DialogTrigger asChild>
                  <Button
                    className={`w-12 h-12 rounded-full shadow-lg ${item.color} transition-all duration-300 transform hover:scale-110`}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animation: 'slide-in-right 0.3s ease-out forwards'
                    }}
                  >
                    <item.icon className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-slate-900 border-slate-700">
                  <DialogHeader>
                    <DialogTitle className="text-white flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="p-4">
                    {item.id === 'mentor' && (
                      <div className="space-y-4">
                        <p className="text-gray-300">
                          Converse com o mentor digital sobre: <strong>{chapterTitle}</strong>
                        </p>
                        <div className="bg-slate-800 p-3 rounded-lg">
                          <p className="text-sm text-gray-400 mb-2">Mentor Digital:</p>
                          <p className="text-white">
                            Olá! Sou seu mentor digital. Posso ajudar com dúvidas sobre {chapterTitle.toLowerCase()}. 
                            O que gostaria de saber?
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            placeholder="Digite sua pergunta..." 
                            className="flex-1 bg-slate-800 text-white p-2 rounded border-slate-600"
                          />
                          <Button className="bg-blue-600 hover:bg-blue-700">Enviar</Button>
                        </div>
                      </div>
                    )}
                    {item.id === 'podcast' && (
                      <div className="space-y-4">
                        <p className="text-gray-300">Áudio do capítulo: {chapterTitle}</p>
                        <div className="bg-slate-800 p-4 rounded-lg">
                          <div className="flex items-center gap-4">
                            <Button className="bg-green-600 hover:bg-green-700">
                              <Headphones className="h-4 w-4 mr-2" />
                              Play
                            </Button>
                            <div className="flex-1 bg-slate-700 h-2 rounded-full">
                              <div className="bg-green-500 h-2 rounded-full w-1/3"></div>
                            </div>
                            <span className="text-sm text-gray-400">05:32</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {item.id === 'resumo' && (
                      <div className="space-y-4">
                        <p className="text-gray-300">Resumo: {chapterTitle}</p>
                        <div className="bg-slate-800 p-4 rounded-lg max-h-64 overflow-y-auto">
                          <p className="text-white text-sm leading-relaxed">
                            Este é um resumo do conteúdo sobre {chapterTitle.toLowerCase()}. 
                            Aqui você encontrará os principais pontos abordados no capítulo, 
                            facilitando a revisão e compreensão dos conceitos mais importantes.
                          </p>
                        </div>
                      </div>
                    )}
                    {item.id === 'mapa' && (
                      <div className="space-y-4">
                        <p className="text-gray-300">Mapa Mental: {chapterTitle}</p>
                        <div className="bg-slate-700 p-8 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Network className="h-16 w-16 text-orange-500 mx-auto mb-2" />
                            <p className="text-gray-400">Mapa mental carregado</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FABMenu;
