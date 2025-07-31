import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, LogOut } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Tooltip as CustomTooltip } from '../ui/Tooltip';
import { Badge } from '../ui/badge';

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  isEnabled?: boolean;
  children?: NavItem[];
  mobileOnly?: boolean;
  desktopOnly?: boolean;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

interface SidebarNavProps {
  navigation: NavGroup[];
  profile: {
    name: string;
    email: string;
  } | null;
  handleSignOut: () => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

export function SidebarNav({ navigation, profile, handleSignOut, isMobileOpen, onMobileClose }: SidebarNavProps) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    navigate('/dashboard');
    if (isMobileOpen) {
      onMobileClose();
    }
  };

  const renderNavItem = (item: NavItem) => {
    if (!item.isEnabled) {
      return null;
    }

    if (item.badge === 'Coming Soon') {
      return (
        <CustomTooltip key={item.name} text="Coming Soon">
        <div
          className="flex items-center px-3 py-3 text-sm font-medium rounded-lg group opacity-50 cursor-not-allowed"
          tabIndex={0}
          aria-disabled="true"
        >
          <item.icon className="h-4 w-4 mr-3" />
          {item.name}
        </div>
      </CustomTooltip>
      );
    }

    return (
      <Link
        key={item.name}
        to={item.href}
        className={`nav-item flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all ${
          location.pathname === item.href
            ? 'bg-primary text-white shadow-lg'
            : 'text-text-secondary hover:bg-bg-hover'
        }`}
      >
        <item.icon className="w-4 icon" />
        <span>{item.name}</span>
        {item.badge && (
          <Badge variant="secondary" className="ml-auto">{item.badge}</Badge>
        )}
      </Link>
    );
  };

  const sidebarClasses = `
    bg-background-primary border-r border-border-default flex flex-col shadow-lg 
    fixed top-0 left-0 h-full w-64 z-50 
    transition-transform duration-300 ease-in-out
    lg:relative lg:translate-x-0 lg:z-auto
    ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
  `;

  return (
    <>
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onMobileClose}
          aria-hidden="true"
        ></div>
      )}
      <aside className={sidebarClasses}>
        <div className="px-4 py-6 border-b border-border-default flex items-center justify-between">
          <Logo 
            variant="primary" 
            size="custom" 
            width={320}
            height={80}
            onClick={handleLogoClick} 
            className="transition-transform hover:scale-105" 
          />
          <button onClick={onMobileClose} className="lg:hidden text-text-secondary hover:text-text-primary">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          {navigation.map((group) => (
            <div key={group.title} className="mb-6">
              <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">{group.title}</h3>
              {group.items.map((item) => renderNavItem(item))}
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-border-default">
          <div className="flex items-center gap-3 p-2">
            <div className="w-8 h-8 bg-bg-tertiary rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">{profile?.name}</p>
              <p className="text-xs text-text-secondary">{profile?.email}</p>
            </div>
            <button onClick={handleSignOut} className="text-text-tertiary hover:text-text-primary transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
