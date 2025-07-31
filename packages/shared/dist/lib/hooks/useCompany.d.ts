type Company = {
    id: string;
    name: string;
    slug?: string;
    organization_id?: string | null;
    status?: string;
};
type Team = {
    id: string;
    name: string;
    company_id: string;
};
export declare const useCompany: () => {
    currentCompany: Company | null;
    currentTeam: Team | null;
    userCompanies: Company[];
    userTeams: Team[];
    loading: boolean;
    error: Error | null;
    switchCompany: (companyId: string) => Promise<void>;
    switchTeam: (teamId: string) => Promise<void>;
};
export {};
//# sourceMappingURL=useCompany.d.ts.map