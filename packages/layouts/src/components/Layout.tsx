import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SidebarNav } from './SidebarNav';
import { TopNavBar } from './TopNavBar';
import { useAuth } from '@wheel/shared/hooks/useAuth';
import { useFeatureFlags } from '@wheel/shared/hooks/useFeatureFlags';
import { companyService } from '@wheel/shared/services/company.service';
import { trackEvent } from '@wheel/shared/services/analytics.service';
import {
  LayoutDashboard,
  Building2,
  MessageSquare,
  Users,
  BookOpen,
  FileText,
  Wallet,
  Settings,
  Shield,
  Scale,
  Code2,
  Wrench,
  Lightbulb,
  PiggyBank,
  UserCircle,
  Construction,
  Map,
  BarChart3,
  Presentation,
} from 'lucide-react';

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

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();
  const { flags: featureFlags } = useFeatureFlags();
  const isAdmin = profile?.role === 'Platform Admin';
  const [hasCompany, setHasCompany] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [companyId, setCompanyId] = useState<string | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const previousPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    async function fetchCompany() {
      if (user?.id) {
        const companies = await companyService.getUserCompanies(user.id);
        if (companies && companies.length > 0) {
          setHasCompany(true);
          setCompanyId(companies[0].id);
        } else {
          setHasCompany(false);
          setCompanyId(null);
        }
      }
      setIsLoading(false);
    }
    fetchCompany();
  }, [user?.id]);

  useEffect(() => {
    if (location.pathname !== previousPathnameRef.current) {
      trackEvent('page_view', null, null, { path: location.pathname });
      previousPathnameRef.current = location.pathname;
    }
  }, [location.pathname]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const { isEnabled, isVisible } = useFeatureFlags();

  const navState = (key: string) => {
    if (!isVisible(key)) return 'hidden';
    if (!isEnabled(key)) return 'comingSoon';
    return 'normal';
  };

  const navigation: NavGroup[] = [
    {
      title: 'Dashboard',
      items: [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, isEnabled: navState('dashboard') !== 'hidden', badge: navState('dashboard') === 'comingSoon' ? 'Coming Soon' : undefined },
      ]
    },
    {
      title: 'My Company',
      items: [
        { name: 'Founder Command Center', href: '/founder', icon: LayoutDashboard, isEnabled: true }
      ]
    },
    {
      title: 'Messages',
      items: [
        { name: 'Messages', href: '/messages', icon: MessageSquare, isEnabled: navState('messages') !== 'hidden', badge: navState('messages') === 'comingSoon' ? 'Coming Soon' : undefined },
      ]
    },
    {
      title: 'Community',
      items: [
        { name: 'Community', href: '/community', icon: Users, isEnabled: navState('community') !== 'hidden', badge: navState('community') === 'comingSoon' ? 'Coming Soon' : undefined },
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Directory', href: '/directory', icon: BookOpen, isEnabled: navState('directory') !== 'hidden', badge: navState('directory') === 'comingSoon' ? 'Coming Soon' : undefined, desktopOnly: true },
        { name: 'Library', href: '#', icon: FileText, isEnabled: navState('library') !== 'hidden', badge: navState('library') === 'comingSoon' ? 'Coming Soon' : undefined, desktopOnly: true },
        { name: 'Marketplace', href: '/tools-marketplace', icon: Wallet, isEnabled: navState('marketplace') !== 'hidden', badge: navState('marketplace') === 'comingSoon' ? 'Coming Soon' : undefined, desktopOnly: true },
        { name: 'Legal Hub', href: '#', icon: Scale, isEnabled: navState('legalHub') !== 'hidden', badge: navState('legalHub') === 'comingSoon' ? 'Coming Soon' : undefined, desktopOnly: true },
        { name: 'Dev Hub', href: '#', icon: Code2, isEnabled: navState('devHub') !== 'hidden', badge: navState('devHub') === 'comingSoon' ? 'Coming Soon' : undefined, desktopOnly: true },
        { name: 'Utilities', href: '#', icon: Wrench, isEnabled: navState('utilities') !== 'hidden', badge: navState('utilities') === 'comingSoon' ? 'Coming Soon' : undefined, desktopOnly: true },
      ]
    },
    {
      title: 'Tools',
      items: [
        { name: 'Idea Hub', href: '/idea-hub', icon: Lightbulb, isEnabled: navState('ideaHub') !== 'hidden', badge: navState('ideaHub') === 'comingSoon' ? 'Coming Soon' : undefined },
        { name: 'Deck Builder', href: '/deck-builder', icon: Presentation, isEnabled: navState('deckBuilder') !== 'hidden', badge: navState('deckBuilder') === 'comingSoon' ? 'Coming Soon' : undefined, desktopOnly: true },
        { name: 'Finance Hub', href: '/financial-hub', icon: PiggyBank, isEnabled: navState('financeHub') !== 'hidden', badge: navState('financeHub') === 'comingSoon' ? 'Coming Soon' : undefined, desktopOnly: true },
      ]
    },
    {
      title: 'Dashboards',
      items: [
        { name: 'Service Dashboard', href: '/service-dashboard', icon: Users, isEnabled: true, desktopOnly: true },
        { name: 'Analytics', href: '/analytics', icon: BarChart3, isEnabled: navState('analytics') !== 'hidden', badge: navState('analytics') === 'comingSoon' ? 'Coming Soon' : undefined, desktopOnly: true },
      ]
    },
    {
      title: 'Settings',
      items: [
        { name: 'Settings', href: '/settings', icon: Settings, isEnabled: navState('settings') !== 'hidden', badge: navState('settings') === 'comingSoon' ? 'Coming Soon' : undefined },
        { name: 'Theme Editor', href: '/theme-editor', icon: Wrench, isEnabled: true },
        { name: 'Components Showcase', href: '/components-showcase', icon: Presentation, isEnabled: true },
        ...(isAdmin ? [
          { name: 'Admin Panel', href: '/admin', icon: Shield, isEnabled: navState('adminPanel') !== 'hidden', badge: navState('adminPanel') === 'comingSoon' ? 'Coming Soon' : undefined },
          { name: 'Journey Admin', href: '/admin-dashboard', icon: Shield, isEnabled: true },
          { name: 'Theme Admin', href: '/admin-dashboard/themes', icon: Wrench, isEnabled: true },
          { name: 'Prototyping Settings', href: '/settings/prototyping', icon: Wrench, isEnabled: true },
          { name: 'Microsoft Graph Settings', href: '/admin/microsoft-graph-settings', icon: FileText, isEnabled: true }
        ] : [])
      ]
    }
  ];


  const isDeckBuilderPage = location.pathname.startsWith("/deck-builder");
  const isJourneyPage = location.pathname.startsWith("/company/journey");
  const mainContentClasses = isDeckBuilderPage || isJourneyPage
    ? "flex-1 w-full h-full p-0 m-0"
    : "flex-1 overflow-y-auto p-4 sm:p-6 max-w-7xl mx-auto";
  const mainWrapperClasses = "flex-1 flex flex-col";
  const rootLayoutClasses = "flex min-h-screen bg-bg-secondary";

  return (
    <div className={rootLayoutClasses}>
      <SidebarNav 
        navigation={navigation} 
        profile={{ name: profile?.full_name || '', email: profile?.email || '' }} 
        handleSignOut={handleSignOut}
        isMobileOpen={isMobileNavOpen}
        onMobileClose={() => setIsMobileNavOpen(false)}
      />
      <div className={mainWrapperClasses}>
        <TopNavBar 
          profile={{ name: profile?.full_name || '', role: profile?.role || '' }} 
          handleSignOut={handleSignOut}
          onMobileMenuClick={() => setIsMobileNavOpen(true)}
        />
        <main className={mainContentClasses}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
