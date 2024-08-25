import { LayoutDashboard ,Layers,PackageOpen, CircleHelp, Settings} from "lucide-react";

export const SidebarList = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    name: "Products",
    link: "/dashboard/products",
    icon: <PackageOpen />,
  },
  {
    name: "Categories",
    link: "/dashboard/categories",
    icon: <Layers  />,
  },
  {
    name: "Faqs",
    link: "/dashboard/faqs",
    icon: <CircleHelp   />,
  },
  {
    name: "Setting",
    link: "/dashboard/setting",
    icon: <Settings    />,
  },
];
