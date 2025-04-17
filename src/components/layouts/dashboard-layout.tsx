import React, { ReactNode } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { Topbar } from '../ui/topbar';

interface LayoutProps {
  children: ReactNode;
}

export const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider className='bg-bg_light w-full dark:bg-bg_dark min-h-screen'>
      <div className="flex w-full">
        <AppSidebar />
        <main className="   w-full">
            <Topbar />
         
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};