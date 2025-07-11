import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ChevronRight } from 'lucide-react';

interface MapaMentalNode {
  title: string;
  content: string;
  options?: MapaMentalNode[];
}

const mindMap: MapaMentalNode = {
  title: "Breve história da escrita",
  content: "A escrita representa um dos maiores avanços culturais da humanidade, permitindo o registro, a comunicação e a transmissão de conhecimentos por gerações.",
  options: [
    {
      title: "Exemplo de navegação",
      content: "Clique nas opções para ver ramificações de múltiplos níveis.",
      options: [
        {
          title: "Exemplo 1",
          content: "O exemplo 1 é tal e tal coisa.",
          options: [
            {
              title: "Mais detalhes sobre exemplo 1",
              content: "Aqui poderia haver um subtópico específico ou explicação extra.",
              options: [
                {
                  title: "Avançar mais um nível",
                  content: "E você pode ir ramificando infinitamente..."
                }
              ]
            }
          ]
        },
        {
          title: "Exemplo 2",
          content: "O exemplo 2 é outra ramificação possível.",
          options: [
            {
              title: "Detalhe do Exemplo 2",
              content: "Mais uma branch! Pode adicionar conteúdo à vontade."
            }
          ]
        },
        {
          title: "Exemplo 3",
          content: "O exemplo 3 está aqui para demonstrar múltiplas opções."
        }
      ]
    }
  ]
};

const MapaMentalInterativo: React.FC = () => {
  const [currentNode, setCurrentNode] = useState<MapaMentalNode>(mindMap);
  const [navigationHistory, setNavigationHistory] = useState<MapaMentalNode[]>([]);

  const navigateToNode = (node: MapaMentalNode) => {
    setNavigationHistory([...navigationHistory, currentNode]);
    setCurrentNode(node);
  };

  const goBack = () => {
    if (navigationHistory.length > 0) {
      const previousNode = navigationHistory[navigationHistory.length - 1];
      setCurrentNode(previousNode);
      setNavigationHistory(navigationHistory.slice(0, -1));
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-auto">
      <div className="min-h-full p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header com botão voltar */}
          {navigationHistory.length > 0 && (
            <div className="mb-6">
              <Button
                onClick={goBack}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            </div>
          )}

          {/* Conteúdo principal */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-center">
                {currentNode.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center leading-relaxed">
                {currentNode.content}
              </p>
            </CardContent>
          </Card>

          {/* Opções de navegação */}
          {currentNode.options && currentNode.options.length > 0 && (
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg font-semibold text-center mb-4">
                Explore os tópicos:
              </h3>
              <div className="flex flex-col gap-3">
                {currentNode.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => navigateToNode(option)}
                    variant="outline"
                    className="w-full p-4 h-auto text-left justify-between hover:bg-accent/50 transition-colors"
                  >
                    <span className="text-sm md:text-base font-medium">
                      {option.title}
                    </span>
                    <ChevronRight className="w-4 h-4 flex-shrink-0 ml-2" />
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapaMentalInterativo;