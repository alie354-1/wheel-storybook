export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'marketplace';
export interface WorkspaceContextProps {
    context?: WorkspaceContext;
}
export interface WorkspaceTheme {
    primaryColor: string;
    secondaryColor: string;
    logoUrl?: string;
    customCSS?: string;
}
export interface WorkspaceConfig {
    context: WorkspaceContext;
    theme?: WorkspaceTheme;
    permissions?: string[];
    features?: string[];
}
export interface MultiTenantWorkspaceContext extends WorkspaceContextProps {
    tenantId?: string;
    companyId?: string;
    userId?: string;
    permissions?: string[];
    features?: string[];
}
export declare const contextStyles: {
    readonly consultant: {
        readonly primary: "bg-blue-500 text-white";
        readonly secondary: "bg-blue-100 text-blue-900";
        readonly accent: "border-blue-500";
    };
    readonly client: {
        readonly primary: "bg-green-500 text-white";
        readonly secondary: "bg-green-100 text-green-900";
        readonly accent: "border-green-500";
    };
    readonly admin: {
        readonly primary: "bg-gray-500 text-white";
        readonly secondary: "bg-gray-100 text-gray-900";
        readonly accent: "border-gray-500";
    };
    readonly marketplace: {
        readonly primary: "bg-purple-500 text-white";
        readonly secondary: "bg-purple-100 text-purple-900";
        readonly accent: "border-purple-500";
    };
};
export declare const getContextStyles: (context?: WorkspaceContext) => {
    readonly primary: "bg-blue-500 text-white";
    readonly secondary: "bg-blue-100 text-blue-900";
    readonly accent: "border-blue-500";
} | {
    readonly primary: "bg-green-500 text-white";
    readonly secondary: "bg-green-100 text-green-900";
    readonly accent: "border-green-500";
} | {
    readonly primary: "bg-gray-500 text-white";
    readonly secondary: "bg-gray-100 text-gray-900";
    readonly accent: "border-gray-500";
} | {
    readonly primary: "bg-purple-500 text-white";
    readonly secondary: "bg-purple-100 text-purple-900";
    readonly accent: "border-purple-500";
};
export declare const hasPermission: (userPermissions: string[] | undefined, requiredPermission: string) => boolean;
export declare const hasFeature: (enabledFeatures: string[] | undefined, requiredFeature: string) => boolean;
//# sourceMappingURL=workspace.d.ts.map