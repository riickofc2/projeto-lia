

import { ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const AppSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar className="border-r border-slate-700">
      <SidebarContent className="bg-slate-900">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white text-lg font-semibold px-4 py-4">
            Sumário
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 px-2">
              {chapters.map((chapter) => (
                <div key={chapter.id} className="space-y-1">
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => handleNavigation(chapter.path)}
                      className={`w-full justify-between p-3 rounded-lg h-auto min-h-[60px] ${
                        isActive(chapter.path)
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <span className="font-medium text-left break-words leading-tight flex-1 pr-2">
                        {chapter.title}
                      </span>
                      <ChevronRight className="h-4 w-4 flex-shrink-0" />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {chapter.sections && (
                    <div className="ml-4 space-y-1">
                      {chapter.sections.map((section) => (
                        <SidebarMenuItem key={section.id}>
                          <SidebarMenuButton
                            onClick={() => handleNavigation(section.path)}
                            className={`w-full justify-start text-sm p-3 rounded h-auto min-h-[50px] ${
                              isActive(section.path)
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-400 hover:bg-slate-800 hover:text-gray-300'
                            }`}
                          >
                            <span className="text-left break-words leading-tight flex-1 whitespace-normal">
                              <span className="font-medium">{section.id}</span> {section.title}
                            </span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;

