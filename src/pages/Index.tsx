
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Menu } from 'lucide-react';
import AppSidebar from '@/components/AppSidebar';
import SearchBar from '@/components/SearchBar';

const Index = () => {
  const navigate = useNavigate();

  return (
    <SidebarProvider collapsible="icon">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex w-full">
        <AppSidebar />
        
        <div className="flex flex-col flex-1">
          {/* Header */}
          <header className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm border-b border-slate-700">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-white">
                <Menu className="h-6 w-6" />
              </SidebarTrigger>
              <h1 className="text-white text-lg font-semibold">Direitos Humanos e Relações Sociais</h1>
            </div>
          </header>

          {/* Search Bar */}
          <div className="p-4 bg-slate-800/50 border-b border-slate-700">
            <SearchBar />
          </div>

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
      </div>
    </SidebarProvider>
  );
};

export default Index;
