export type CloudProvider = 'google';
export type CloudScope = 'drive' | 'slides' | 'docs' | 'sheets';
interface CloudCredentials {
    provider: CloudProvider;
    access_token: string;
    refresh_token: string;
    expires_at: number;
    scopes: CloudScope[];
}
export declare function getCloudCredentials(provider: CloudProvider): Promise<CloudCredentials | null>;
export declare function initializeGoogleDrive(): Promise<CloudCredentials | null>;
export declare function saveCloudCredentials(provider: CloudProvider, credentials: Omit<CloudCredentials, 'provider'>): Promise<void>;
export declare function handleOAuthCallback(provider: CloudProvider, code: string): Promise<CloudCredentials>;
export {};
//# sourceMappingURL=cloud-storage.d.ts.map