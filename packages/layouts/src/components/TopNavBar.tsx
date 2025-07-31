import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, Bell, Settings, ChevronDown, User, LogOut } from 'lucide-react';
import { Logo } from '../ui/Logo';

interface TopNavBarProps {
  profile: {
    name: string;
    role: string;
  } | null;
  handleSignOut: () => void;
  onMobileMenuClick: () => void;
}

export function TopNavBar({ profile, handleSignOut, onMobileMenuClick }: TopNavBarProps) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-bg-primary border-b border-border-default p-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Left: Mobile Menu */}
        <div className="flex items-center gap-4">
          <button onClick={onMobileMenuClick} className="lg:hidden text-text-secondary hover:text-text-primary">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Center: Search (optional) */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-border-default rounded-lg focus:ring-2 focus:ring-border-focus focus:border-transparent"
            />
          </div>
        </div>

        {/* Right: Profile & Settings */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 text-text-secondary hover:text-text-primary hover:bg-bg-hover rounded-lg transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-danger rounded-full"></span>
          </button>
          <Link to="/settings" className="p-2 text-text-secondary hover:text-text-primary hover:bg-bg-hover rounded-lg transition-colors">
            <Settings className="w-6 h-6" />
          </Link>
          <div className="relative">
            <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className="flex items-center gap-2 p-2 hover:bg-bg-hover rounded-lg transition-colors">
              <div className="w-8 h-8 bg-bg-tertiary rounded-full"></div>
              <div className="text-left hidden lg:block">
                <p className="text-sm font-medium text-text-primary">{profile?.name}</p>
                <p className="text-xs text-text-tertiary">{profile?.role}</p>
              </div>
              <ChevronDown className="w-4 h-4 text-text-tertiary" />
            </button>
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-border-default z-50">
                <div className="p-4 border-b border-border-default">
                  <p className="font-medium text-text-primary">{profile?.name}</p>
                </div>
                <div className="py-2">
                  <Link to="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-text-secondary hover:bg-bg-hover">
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </Link>
                  <button onClick={handleSignOut} className="flex items-center gap-3 px-4 py-2 text-sm text-text-secondary hover:bg-bg-hover w-full">
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
