import {
    LogOut,
    Car,
    UsersRound,
    CircleUser,
    MessageCircle,
    Star,
    LayoutGrid,
  } from "lucide-react";
  import { Link, useLocation } from "react-router-dom";
  import logo from "@/assets/logo.svg";
  import logoDark from "@/assets/logo-dark.svg";
  import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar";
  
  // Define the type for items
  interface SidebarItem {
    title: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>;
  }
  
  // Menu items
  const items: SidebarItem[] = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutGrid,
    },
    {
      title: "Your Cars",
      url: "/cars",
      icon: Car,
    },
    {
      title: "Customers",
      url: "/customers",
      icon: UsersRound,
    },
    {
      title: "Reviews",
      url: "/reviews",
      icon: Star,
    },
    {
      title: "Messages",
      url: "/messages",
      icon: MessageCircle,
    },
    {
      title: "My Profile",
      url: "/my-profile",
      icon: CircleUser,
    },
  ];
  
  export function AppSidebar() {
    const location = useLocation();
  
    return (
      <Sidebar className="dark:bg-bg_dark  bg-bg_light border-r border-gray-200 dark:border-gray-900">
        <SidebarContent className="flex flex-col font-inter h-full">
          <div className="flex-1">
            <SidebarGroup>
              <SidebarGroupLabel className="ml-4">
                <img src={logo} className="w-24 dark:hidden block" alt="Logo" />
                <img src={logoDark} className="w-24 dark:block hidden" alt="Dark Logo" />
              </SidebarGroupLabel>
              <br />
              <SidebarGroupContent>
                <SidebarMenu className="">
                  {items.map((item) => {
                    const isActive = location.pathname === item.url;
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <Link
                            to={item.url}
                            className={`flex items-center gap-2  p-5 rounded-md ${
                              isActive
                                ? "bg-tw_primary text-white"
                                : "hover:bg-tw_primary/30 dark:hover:bg-tw_primary/30 text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            <item.icon className="w-5 h-5" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                console.log("User logged out");
              }}
              className="flex items-center text-sm gap-2 w-full text-left p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </SidebarContent>
      </Sidebar>
    );
  }