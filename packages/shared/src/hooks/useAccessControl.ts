import { useEffect, useState } from 'react';
import { useAuth } from '../lib/hooks/useAuth';
import { supabase } from '../lib/supabase';

interface Company {
  id: string;
  name: string;
  customer_type: string;
  feature_flags?: Record<string, any>;
}

interface AccessControl {
  customerType: string | null;
  isAuthenticated: boolean;
  company: Company | null;
  isLoading: boolean;
}

export function useAccessControl(): AccessControl {
  const { user, isAuthenticated } = useAuth();
  const [company, setCompany] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCompany = async () => {
      if (!user?.id) {
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('company_members')
        .select('company_id, companies (id, name, customer_type, feature_flags)')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) {
        console.error('Error fetching company:', error);
        setIsLoading(false);
        return;
      }

      if (data?.companies) {
        setCompany(data.companies as unknown as Company);
      }

      setIsLoading(false);
    };

    fetchCompany();
  }, [user]);

  return {
    customerType: company?.customer_type || null,
    isAuthenticated,
    company,
    isLoading,
  };
}

export default useAccessControl;
