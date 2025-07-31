export declare const createGoogleSlides: (title: string, content: any[]) => Promise<{
    presentationId: any;
    url: string;
}>;
export declare const updateGoogleSlides: (presentationId: string, updates: any[]) => Promise<void>;
export declare const getAuthUrl: () => any;
export declare const handleAuthCallback: (code: string) => Promise<any>;
//# sourceMappingURL=google.d.ts.map