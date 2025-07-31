export interface AppSettings {
    theme: 'light' | 'dark' | 'system';
    notifications: {
        email: boolean;
        push: boolean;
        inApp: boolean;
        digest: boolean;
    };
    display: {
        compactView: boolean;
        showTips: boolean;
        cardSize: 'small' | 'medium' | 'large';
    };
    features: {
        [key: string]: boolean;
    };
    huggingface?: {
        api_key: string;
        spaces: {
            base: {
                url: string;
                model_id: string;
            };
            company: {
                url: string;
                model_id: string;
            };
            abstraction: {
                url: string;
                model_id: string;
            };
        };
        default_tier: 'base' | 'company' | 'abstraction';
        enabled: boolean;
    };
}
declare class AppSettingsService {
    getGlobalSettings(key: string): Promise<any>;
    updateGlobalSettings(key: string, value: any): Promise<any>;
    getUserSettings(userId: string): Promise<AppSettings>;
    updateUserSettings(userId: string, settings: Partial<AppSettings>): Promise<AppSettings | null>;
    private createDefaultSettings;
    private deepMerge;
}
export declare const appSettingsService: AppSettingsService;
export {};
//# sourceMappingURL=app-settings.service.d.ts.map