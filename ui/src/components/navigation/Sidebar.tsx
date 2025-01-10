import { DashboardLogo } from "@/assets";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const sidebarLinks = [
  {
    name: "Dashboard",
    path: "/",
    iconName: "home",
  },
  {
    name: "Transactions",
    path: "/transactions",
    iconName: "transfer",
  },
  {
    name: "Accounts",
    path: "/accounts",
    iconName: "user",
  },
  {
    name: "Investments",
    path: "/investments",
    iconName: "investment",
  },
  {
    name: "Credit Cards",
    path: "/credit-cards",
    iconName: "card",
  },
  {
    name: "Loans",
    path: "/loans",
    iconName: "loan",
  },
  {
    name: "Services",
    path: "/services",
    iconName: "service",
  },
  {
    name: "My Privileges",
    path: "/my-privileges",
    iconName: "econometrics",
  },
  {
    name: "Settings",
    path: "/settings",
    iconName: "settings",
  },
];

const navLinkClasses = ({ isActive }: { isActive: boolean }) => `
  flex items-center py-3 lg:py-[17.5px] gap-[26px]
  ${isActive ? "text-active-link" : "text-grey-text hover:text-hover-blue"}
  duration-300 transition-all
  before:content-[''] 
  before:absolute 
  before:left-0 
  before:top-0 
  before:h-full 
  before:w-[8px]
  before:bg-black
  before:transition-all
  before:duration-200
  before:rounded-r-[10px]
  ${isActive ? "before:opacity-100" : "before:opacity-0"}
`;

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full w-[250px] bg-white border-r border-gray-200 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } chromebook:translate-x-0 chromebook:w-[250px]`}
      >
        <div className="flex items-center justify-center h-[101px]">
          <NavLink to="/">
            <img src={DashboardLogo} alt="dashboard-logo" />
          </NavLink>
        </div>
        <div className="px-0 pt-[15px] pb-8 relative overflow-y-auto hide-scrollbar h-[calc(100%-101px)]">
          <nav className="space-y-2">
            {sidebarLinks.map((link) => (
              <div key={link.name} className="relative px-[38px]">
                <NavLink
                  to={link.path}
                  className={navLinkClasses}
                  onClick={onClose}
                >
                  <Icon icon={link.iconName} size={25} />
                  <h3>{link.name}</h3>
                </NavLink>
              </div>
            ))}
          </nav>
        </div>
      </aside>
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 chromebook:hidden ${
          isOpen ? "opacity-100 z-30" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
    </>
  );
};

export default Sidebar;
