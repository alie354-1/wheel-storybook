import { useState, useEffect } from 'react';

// Mock data for development until backend is ready
const MOCK_METRICS = {
  'company-1': {
    mrr: '$12.3K',
    activeUsers: '1,247',
    runway: '6.2 months',
  },
  'default': {
    mrr: '$10.0K',
    activeUsers: '1,000',
    runway: '8 months',
  }
};

/**
 * A hook to fetch key financial and user metrics for a given company.
 * @param companyId The ID of the company to fetch metrics for.
 */
export const useCompanyMetrics = (companyId: string | undefined) => {
  const [metrics, setMetrics] = useState({
    mrr: '--',
    activeUsers: '--',
    runway: '--',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!companyId) {
      setLoading(false);
      return;
    }

    const fetchMetrics = async () => {
      setLoading(true);
      setError(null);
      try {
        // In a real implementation, this would be an API call:
        // const response = await fetch(`/api/companies/${companyId}/metrics`);
        // const data = await response.json();
        
        // For now, we use mock data with a simulated delay.
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const data = (MOCK_METRICS as any)[companyId] || MOCK_METRICS.default;
        setMetrics(data);

      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch company metrics.'));
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, [companyId]);

  return { metrics, loading, error };
};
