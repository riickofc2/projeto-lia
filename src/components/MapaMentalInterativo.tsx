import { useState, useEffect } from 'react';

interface MapaOption {
  title: string;
  content: string;
  options?: MapaOption[];
}

interface MapaMentalNode {
  title: string;
  content: string;
  options: MapaOption[];
}

const MapaMentalInterativo = () => {
  const [branchStack, setBranchStack] = useState<number[]>([]);

  // Estrutura do mapa mental: Breve história da escrita
  const mindMap: MapaMentalNode = {
    title: "Breve história da escrita",
    content: "A escrita representa um dos maiores avanços culturais da humanidade, permitindo o registro, a comunicação e a transmissão de conhecimentos por gerações.",
    options: [
      {
        title: "Por que a escrita surgiu?",
        content: `<ul>
          <li>Registrar atividades comerciais e produtivas.</li>
          <li>Relacionada ao avanço da agricultura e pecuária.</li>
          <li>Abandono do nomadismo e surgimento das primeiras cidades.</li>
        </ul>`,
        options: [
          {
            title: "Registro econômico",
            content: "A necessidade de controlar estoques, animais e colheitas foi um dos principais motores para o surgimento dos primeiros sistemas de escrita."
          },
          {
            title: "Administração e sociedade",
            content: "Com a complexidade das sociedades, tornou-se fundamental registrar leis, acordos, impostos e obrigações religiosas."
          }
        ]
      },
      {
        title: "Evolução dos sistemas",
        content: "O desenvolvimento da escrita se deu em várias fases, cada uma contribuindo para tornar o sistema mais funcional e flexível.",
        options: [
          {
            title: "Fase Descritiva",
            content: "Desenhos e pinturas representavam a realidade de modo visual, sem ligação direta com o idioma falado."
          },
          {
            title: "Fase Mnemônica",
            content: "Símbolos criados para representar de modo fixo objetos, pessoas ou ideias. Exemplo: um desenho que sempre representa 'boi'."
          },
          {
            title: "Fase Logográfica",
            content: "O mesmo desenho/símbolo pode ter vários significados, por associação. Exemplo: o desenho do sol pode significar dia, brilho ou branco."
          },
          {
            title: "Sumérios e a Escrita Cuneiforme",
            content: `Os sumérios, na Mesopotâmia (~4000 a.C.), evoluíram de pictogramas para logogramas, tornando os signos cada vez mais abstratos.<br>
            Posteriormente, a escrita cuneiforme passou a ter valor fonético, representando sons e não apenas ideias.`
          }
        ]
      },
      {
        title: "Exemplo prático",
        content: `<b>Veja como um símbolo pode ter múltiplos sentidos:</b>
        <ul>
          <li><b>O desenho de um pé:</b> pode significar pé, caminhar, estar em pé.</li>
          <li>Se associado a outro sinal, pode significar: apressar-se, carregar, alicerce.</li>
          <li><b>Desenho do sol:</b> pode representar brilho, branco, dia.</li>
          <li><b>Pictograma de água:</b> pode significar líquido, rio ou chuva, dependendo do contexto.</li>
        </ul>`
      },
      {
        title: "Escrita Egípcia e Semítica",
        content: "Outros povos também criaram sistemas complexos, como os hieróglifos no Egito e os alfabetos semíticos no Oriente Médio.",
        options: [
          {
            title: "Hieróglifos egípcios",
            content: "Sistema com 24 sinais principais (consoantes), utilizado em monumentos, papiros e inscrições religiosas."
          },
          {
            title: "Alfabeto semítico",
            content: "Cada sinal representa uma consoante, o som das vogais era indicado pelo contexto. Base para o alfabeto fenício."
          },
          {
            title: "Princípio acrofônico",
            content: "O símbolo representa o som inicial da palavra (ex: desenho de boi = som 'A', origem do 'alef' hebraico)."
          }
        ]
      },
      {
        title: "Alfabeto Grego e seus desdobramentos",
        content: "Os gregos acrescentaram vogais ao alfabeto fenício, criando um sistema ainda mais prático, base para o alfabeto latino.",
        options: [
          {
            title: "Alfabeto Grego",
            content: "Desenvolvido por volta de 900 a.C., serviu de modelo para muitos outros alfabetos."
          },
          {
            title: "Alfabeto Romano/Latino",
            content: "Utilizado até hoje nas línguas ocidentais, influenciou o desenvolvimento da escrita em todo o mundo."
          }
        ]
      },
      {
        title: "Três grandes invenções",
        content: `<ul>
          <li>Escrita pictográfica: baseada em desenhos.</li>
          <li>Escrita silábica: baseada em sílabas.</li>
          <li>Escrita alfabética: baseada em consoantes e vogais.</li>
        </ul>`,
        options: [
          {
            title: "Escrita pictográfica",
            content: "Uso de imagens para representar palavras, ideias ou objetos. Exemplo: pictogramas sumérios e egípcios."
          },
          {
            title: "Escrita silábica",
            content: "Cada símbolo representa uma sílaba (junção de consoante + vogal, por exemplo). Exemplo: escrita japonesa kana."
          },
          {
            title: "Escrita alfabética",
            content: "Sistema mais flexível, no qual cada letra representa um som básico da fala."
          }
        ]
      }
    ]
  };

  // Distribui as opções em linhas conforme a regra definida
  const getOptionRows = (options: MapaOption[]) => {
    const n = options.length;
    if (n <= 3) return [options];
    if (n === 4) return [options.slice(0,2), options.slice(2)];
    if (n === 5) return [options.slice(0,3), options.slice(3)];
    if (n === 6) return [options.slice(0,3), options.slice(3,6)];
    // fallback para mais de 6 (raro), divide em linhas de 3
    const rows = [];
    for(let i=0; i<n; i+=3) rows.push(options.slice(i,i+3));
    return rows;
  };

  const goBack = (level: number) => {
    setBranchStack(prev => prev.slice(0, level - 1));
  };

  const selectOption = (level: number, optionIndex: number) => {
    setBranchStack(prev => {
      const newStack = prev.slice(0, level);
      newStack[level] = optionIndex;
      return newStack;
    });
  };

  const renderCard = (node: MapaMentalNode | MapaOption, level: number, showConnector: boolean) => {
    return (
      <div key={level} className="relative mb-9 flex flex-col items-center">
        {showConnector && (
          <div 
            className="absolute -top-9 left-1/2 w-0.5 h-9 bg-gray-400 z-0"
            style={{ transform: 'translateX(-50%)' }}
          />
        )}
        
        <div className="bg-white rounded-xl shadow-lg min-h-20 w-full max-w-full p-4 relative z-10 overflow-hidden">
          {level > 0 && (
            <button
              onClick={() => goBack(level)}
              className="inline-flex items-center bg-none border-none text-blue-600 text-base font-bold cursor-pointer mb-1 -ml-1 gap-2 p-1"
            >
              ⬅ Voltar
            </button>
          )}

          <div className="text-xl font-bold mb-3 text-left text-blue-600 break-words">
            {node.title}
          </div>

          {node.content && (
            <div 
              className="mt-3 text-base text-left leading-6 text-gray-800 break-words overflow-wrap-break-word pr-px"
              dangerouslySetInnerHTML={{ __html: node.content }}
            />
          )}

          {node.options && (
            <div className="flex flex-col gap-2 mt-3 items-center">
              {getOptionRows(node.options).map((row, rowIdx) => (
                <div key={rowIdx} className="flex flex-row gap-2 w-full justify-center mb-1">
                  {row.map((opt, idx) => {
                    const globalIdx = rowIdx * 3 + idx;
                    const isSelected = branchStack[level] === globalIdx;
                    return (
                      <button
                        key={idx}
                        onClick={() => selectOption(level, globalIdx)}
                        className={`bg-blue-600 text-white text-base border-none rounded-xl py-2 px-4 my-1 cursor-pointer shadow-sm min-w-24 max-w-1/3 flex-1 font-bold transition-none whitespace-normal break-words ${
                          isSelected ? 'bg-blue-700 outline outline-2 outline-blue-800' : 'hover:bg-blue-700 focus:bg-blue-700 focus:outline focus:outline-2 focus:outline-blue-800'
                        }`}
                      >
                        {opt.title}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderStack = () => {
    const cards = [];
    let currentNode: MapaMentalNode | MapaOption = mindMap;
    
    for (let level = 0; level <= branchStack.length; level++) {
      const showConnector = level > 0;
      cards.push(renderCard(currentNode, level, showConnector));
      
      if (branchStack[level] != null && currentNode.options) {
        currentNode = currentNode.options[branchStack[level]];
      } else {
        break;
      }
    }
    
    return cards;
  };

  return (
    <div className="w-full h-screen bg-gray-50 overflow-y-auto">
      <div className="max-w-lg mx-auto p-5 pb-8 min-h-full">
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 450px) {
              .max-w-lg { padding: 1rem 0.25rem 2rem; }
              .text-base { font-size: 0.99rem; }
              button { font-size: 0.98rem; }
            }
          `
        }} />
        {renderStack()}
      </div>
    </div>
  );
};

export default MapaMentalInterativo;