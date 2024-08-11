import { LayoutDashboard ,Layers,PackageOpen} from "lucide-react";

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
];
