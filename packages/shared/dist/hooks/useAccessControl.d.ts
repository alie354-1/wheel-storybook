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
export declare function useAccessControl(): AccessControl;
export default useAccessControl;
//# sourceMappingURL=useAccessControl.d.ts.map