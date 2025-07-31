interface Canvas {
    id: string;
    name: string;
    description?: string;
    user_id: string;
    company_id?: string;
    created_at: string;
    updated_at: string;
    is_archived: boolean;
}
export declare const useCanvas: () => {
    canvases: Canvas[];
    currentCanvas: Canvas | null;
    setCurrentCanvas: import('react').Dispatch<import('react').SetStateAction<Canvas | null>>;
    loadCanvases: (userId: string, includeArchived?: boolean) => Promise<Canvas[]>;
    createCanvas: (userId: string, name: string, description?: string, companyId?: string) => Promise<Canvas | null>;
    updateCanvas: (canvasId: string, updates: Partial<Canvas>) => Promise<boolean>;
    archiveCanvas: (canvasId: string) => Promise<boolean>;
    isLoading: boolean;
    error: Error | null;
};
export {};
//# sourceMappingURL=useCanvas.d.ts.map