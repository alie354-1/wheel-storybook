interface Slide {
    id: string;
    type: 'cover' | 'problem' | 'solution' | 'market' | 'business' | 'team' | 'custom';
    title: string;
    content: {
        text?: string;
        bullets?: string[];
        image?: string;
    };
}
export declare const createGoogleSlides: (title: string, slides: Slide[]) => Promise<string>;
export declare const updateGoogleSlides: (presentationId: string, updates: any[]) => Promise<void>;
export declare const getAuthUrl: () => string;
export declare const handleAuthCallback: (code: string) => Promise<{
    access_token: string;
}>;
export {};
//# sourceMappingURL=slides.d.ts.map