
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  type: 'chapter' | 'section';
  path: string;
  excerpt?: string;
}

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  // Dados de conteúdo para busca
  const searchableContent: SearchResult[] = [
    { id: 'apresentacao', title: 'Apresentação do Curso', type: 'chapter', path: '/apresentacao', excerpt: 'Direitos humanos e relações sociais, ONU, legislações' },
    { id: 'capitulo1', title: 'Bases históricas dos direitos humanos', type: 'chapter', path: '/capitulo/1', excerpt: 'Origens filosóficas, jurídicas e políticas dos direitos humanos' },
    { id: 'secao1.1', title: 'Origens filosóficas dos direitos humanos', type: 'section', path: '/capitulo/1/secao/1', excerpt: 'Filosofia, igualdade, direitos individuais' },
    { id: 'secao1.2', title: 'Origens jurídicas dos direitos humanos', type: 'section', path: '/capitulo/1/secao/2', excerpt: 'Legislações, tratados, direito internacional' },
    { id: 'secao1.3', title: 'Origens políticas dos direitos humanos', type: 'section', path: '/capitulo/1/secao/3', excerpt: 'Política, Estado, garantias constitucionais' },
    { id: 'secao1.4', title: 'Direitos humanos: contextualização histórica', type: 'section', path: '/capitulo/1/secao/4', excerpt: 'História, evolução, marcos históricos' },
    { id: 'secao1.5', title: 'Direitos humanos no Brasil', type: 'section', path: '/capitulo/1/secao/5', excerpt: 'Brasil, legislação nacional, constituição' },
  ];

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = searchableContent.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.excerpt && item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    setResults(filtered);
  };

  const handleResultClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="text-white hover:bg-slate-800"
      >
        <Search className="h-5 w-5" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-white">Buscar Conteúdo</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Digite para buscar conteúdos..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                autoFocus
              />
              {query && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setQuery('');
                    setResults([]);
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {results.length > 0 && (
              <div className="max-h-96 overflow-y-auto space-y-2">
                {results.map((result) => (
                  <div
                    key={result.id}
                    onClick={() => handleResultClick(result.path)}
                    className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-white mb-1">
                          {result.title}
                        </h4>
                        {result.excerpt && (
                          <p className="text-sm text-gray-400">
                            {result.excerpt}
                          </p>
                        )}
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        result.type === 'chapter' 
                          ? 'bg-blue-600 text-blue-100' 
                          : 'bg-green-600 text-green-100'
                      }`}>
                        {result.type === 'chapter' ? 'Capítulo' : 'Seção'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {query && results.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Nenhum conteúdo encontrado para "{query}"</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchBar;
