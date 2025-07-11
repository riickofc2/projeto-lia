
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, MessageCircle, Headphones, FileText, Network, X, Send } from 'lucide-react';
import MapaMentalInterativo from './MapaMentalInterativo';

interface FABMenuProps {
  context?: string;
  chapterTitle?: string;
}

const FABMenu = ({ context = "geral", chapterTitle = "Conteúdo" }: FABMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDialog, setActiveDialog] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<Array<{role: string, content: string}>>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // API Key integrada diretamente no código
  const API_KEY = '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';

  // Função para obter a imagem do mapa mental baseada no contexto
  const getMapaImage = () => {
    switch (context) {
      case 'apresentacao':
        return '/lovable-uploads/f4dde4b7-6d75-4f80-a65e-cb16dd801bc0.png';
      case 'capitulo1':
        return '/lovable-uploads/3080c897-7042-421a-8b89-4c9a37293c16.png';
      case 'secao-1-1':
        return '/lovable-uploads/8c853cbc-fb74-49d2-bb0a-35bba21d176f.png';
      case 'secao-1-2':
        return '/lovable-uploads/ea25ad3b-d72c-4a70-9d8b-4da7fae80254.png';
      case 'secao-1-3':
        return '/lovable-uploads/e0c08e18-49e3-4d12-82e0-97be3fd6b24f.png';
      case 'secao-1-4':
        return '/lovable-uploads/7d561d87-5ee3-4e72-a332-6d64c5b5ac73.png';
      case 'secao-1-5':
        return '/lovable-uploads/ddbd70c2-36ec-46f5-bb7f-a362d99f2eb5.png';
      default:
        return '/lovable-uploads/f4dde4b7-6d75-4f80-a65e-cb16dd801bc0.png';
    }
  };

  // Textos específicos para cada seção
  const getResumoContent = () => {
    switch (context) {
      case 'apresentacao':
        return 'Introdução do Capítulo 1 – Bases históricas dos direitos humanos\n\nOs direitos humanos, embora garantidos em teoria por leis e tratados, ainda são negados a grandes parcelas da população. A introdução aponta a distância entre o ideal e a prática, e propõe uma análise histórica e filosófica das origens e desafios dessa luta.';
      
      case 'capitulo1':
        return 'Introdução do Capítulo 1 – Bases históricas dos direitos humanos\n\nOs direitos humanos, embora garantidos em teoria por leis e tratados, ainda são negados a grandes parcelas da população. A introdução aponta a distância entre o ideal e a prática, e propõe uma análise histórica e filosófica das origens e desafios dessa luta.';
      
      case 'secao-1-1':
        return '1.1 Origens filosóficas dos direitos humanos\n\nA filosofia clássica, com Platão e Aristóteles, lançou as bases do direito natural, conceito retomado por pensadores cristãos como Tomás de Aquino. A ideia de justiça universal e inata sustenta os direitos humanos como valores que precedem e fundamentam as leis humanas.';
      
      case 'secao-1-2':
        return '1.2 Origens jurídicas dos direitos humanos\n\nAs constituições americana (1787) e francesa (1791) formalizaram direitos humanos nas legislações, influenciando o mundo ocidental. A abolição da escravidão e os direitos sociais surgem como desdobramentos históricos da tentativa de tornar esses direitos efetivos.';
      
      case 'secao-1-3':
        return '1.3 Origens políticas dos direitos humanos\n\nA política entra como ferramenta essencial para a garantia dos direitos humanos. Após a Segunda Guerra Mundial, a criação da ONU e a Declaração Universal de 1948 consolidam os direitos humanos como pauta internacional, mesmo com divergências ideológicas e culturais.';
      
      case 'secao-1-4':
        return '1.4 Direitos humanos: contextualização histórica\n\nOs direitos humanos evoluíram em quatro gerações: civis/políticos, sociais, coletivos e intergeracionais. Com o tempo, os documentos internacionais passaram a contemplar a diversidade dos grupos humanos e novas demandas como meio ambiente e proteção de dados.';
      
      case 'secao-1-5':
        return '1.5 Direitos humanos no Brasil\n\nApesar de avanços como a Constituição de 1988 e programas como o PNDH, o Brasil ainda enfrenta sérias desigualdades e dificuldades para garantir os direitos humanos a toda a população, especialmente minorias étnicas, sociais e de gênero.';
      
      default:
        return `Resumo do conteúdo sobre ${chapterTitle.toLowerCase()}. Aqui você encontrará os principais pontos abordados no capítulo, facilitando a revisão e compreensão dos conceitos mais importantes.`;
    }
  };

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessage = { role: 'user', content: userInput };
    const updatedMessages = [...chatMessages, newMessage];
    setChatMessages(updatedMessages);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `Você é um mentor digital especializado em Direitos Humanos e Relações Sociais. O usuário está estudando sobre: ${chapterTitle}. Responda de forma educativa e contextualizada ao conteúdo do livro "Direitos Humanos e Relações Sociais" de Fabiano Caxito. Seja didático, claro e sempre relacione suas respostas ao contexto dos direitos humanos no Brasil e no mundo.`
            },
            ...updatedMessages
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro na API');
      }

      const data = await response.json();
      const botResponse = { role: 'assistant', content: data.choices[0].message.content };
      setChatMessages([...updatedMessages, botResponse]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      const errorMessage = { role: 'assistant', content: 'Desculpe, ocorreu um erro na comunicação. Tente novamente em alguns instantes.' };
      setChatMessages([...updatedMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

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
          className={`group w-20 h-20 rounded-full shadow-lg transition-all duration-300 ${
            isOpen 
              ? 'bg-black hover:bg-gray-300 rotate-45' 
              : 'bg-black hover:bg-gray-300'
          }`}
        >
          {isOpen ? <X className="h-8 w-8 text-white group-hover:text-black" /> : <Plus className="h-8 w-8 text-white group-hover:text-black" />}
        </Button>

        {/* Menu Items */}
        {isOpen && (
          <div className="absolute bottom-24 right-0 space-y-3 animate-fade-in">
            {menuItems.map((item, index) => (
              <Dialog key={item.id} open={activeDialog === item.id} onOpenChange={(open) => setActiveDialog(open ? item.id : null)}>
                <DialogTrigger asChild>
                  <div className="flex items-center justify-end gap-3 group">
                    <span className="text-white text-sm font-medium bg-slate-800 px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {item.label}
                    </span>
                    <Button
                      className={`w-12 h-12 rounded-full shadow-lg ${item.color} transition-all duration-300 transform hover:scale-110`}
                      style={{ 
                        animationDelay: `${index * 50}ms`,
                        animation: 'slide-in-right 0.3s ease-out forwards'
                      }}
                    >
                      <item.icon className="h-5 w-5" />
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent className={`${item.id === 'mapa' && context === 'secao-1-5' ? 'sm:max-w-2xl' : 'sm:max-w-md'} bg-slate-900 border-slate-700 max-h-[80vh] overflow-y-auto`}>
                  <DialogHeader>
                    <DialogTitle className="text-white flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="p-4">
                    {item.id === 'mentor' && (
                      <div className="space-y-4">
                        <p className="text-gray-300 text-sm break-words">
                          Converse com o mentor digital sobre: <strong>{chapterTitle}</strong>
                        </p>

                        <div className="bg-slate-800 p-3 rounded-lg max-h-64 overflow-y-auto space-y-2">
                          {chatMessages.length === 0 ? (
                            <div>
                              <p className="text-sm text-gray-400 mb-2">Mentor Digital:</p>
                              <p className="text-white text-sm break-words leading-relaxed">
                                Olá! Sou seu mentor digital especializado em Direitos Humanos. Posso ajudar com dúvidas sobre {chapterTitle.toLowerCase()}. 
                                O que gostaria de saber?
                              </p>
                            </div>
                          ) : (
                            chatMessages.map((message, index) => (
                              <div key={index} className={`p-2 rounded ${message.role === 'user' ? 'bg-blue-600 ml-4' : 'bg-slate-700 mr-4'}`}>
                                <p className={`text-sm break-words leading-relaxed ${message.role === 'user' ? 'text-white' : 'text-gray-200'}`}>
                                  <strong>{message.role === 'user' ? 'Você' : 'Mentor'}:</strong> {message.content}
                                </p>
                              </div>
                            ))
                          )}
                          {isLoading && (
                            <div className="bg-slate-700 mr-4 p-2 rounded">
                              <p className="text-sm text-gray-200">Mentor está digitando...</p>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            placeholder="Digite sua pergunta..." 
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                            className="flex-1 bg-slate-800 text-white p-2 rounded border-slate-600 text-sm"
                          />
                          <Button 
                            onClick={sendMessage} 
                            className="bg-blue-600 hover:bg-blue-700 px-3"
                            disabled={isLoading}
                          >
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                    {item.id === 'podcast' && (
                      <div className="space-y-4">
                        <p className="text-gray-300 break-words">Áudio do capítulo: {chapterTitle}</p>
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
                        <p className="text-gray-300 break-words">Resumo: {chapterTitle}</p>
                        <div className="bg-slate-800 p-4 rounded-lg max-h-64 overflow-y-auto">
                          <p className="text-white text-sm leading-relaxed break-words whitespace-pre-line">
                            {getResumoContent()}
                          </p>
                        </div>
                      </div>
                    )}
                    {item.id === 'mapa' && (
                      <div className="space-y-4">
                        <p className="text-gray-300 break-words">Mapa Mental: {chapterTitle}</p>
                        {context === 'secao-1-5' ? (
                          <div className="bg-white rounded-lg overflow-hidden max-h-96 overflow-y-auto">
                            <MapaMentalInterativo />
                          </div>
                        ) : (
                          <div className="bg-slate-800 p-4 rounded-lg">
                            <img 
                              src={getMapaImage()} 
                              alt={`Mapa Mental - ${chapterTitle}`}
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        )}
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
