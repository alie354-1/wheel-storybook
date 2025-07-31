/**
 * Mock Supabase client for Storybook and testing environments
 * This prevents the "Missing Supabase URL" error in component development
 */
export declare const supabase: {
    from: () => {
        select: () => /*elided*/ any;
        insert: () => /*elided*/ any;
        update: () => /*elided*/ any;
        delete: () => /*elided*/ any;
        upsert: () => /*elided*/ any;
        eq: () => /*elided*/ any;
        neq: () => /*elided*/ any;
        gt: () => /*elided*/ any;
        gte: () => /*elided*/ any;
        lt: () => /*elided*/ any;
        lte: () => /*elided*/ any;
        like: () => /*elided*/ any;
        ilike: () => /*elided*/ any;
        is: () => /*elided*/ any;
        in: () => /*elided*/ any;
        contains: () => /*elided*/ any;
        containedBy: () => /*elided*/ any;
        rangeGt: () => /*elided*/ any;
        rangeGte: () => /*elided*/ any;
        rangeLt: () => /*elided*/ any;
        rangeLte: () => /*elided*/ any;
        rangeAdjacent: () => /*elided*/ any;
        overlaps: () => /*elided*/ any;
        textSearch: () => /*elided*/ any;
        match: () => /*elided*/ any;
        not: () => /*elided*/ any;
        or: () => /*elided*/ any;
        filter: () => /*elided*/ any;
        order: () => /*elided*/ any;
        limit: () => /*elided*/ any;
        range: () => /*elided*/ any;
        abortSignal: () => /*elided*/ any;
        single: () => Promise<{
            data: null;
            error: null;
            count: null;
            status: number;
            statusText: string;
        }>;
        maybeSingle: () => Promise<{
            data: null;
            error: null;
            count: null;
            status: number;
            statusText: string;
        }>;
        csv: () => Promise<{
            data: null;
            error: null;
            count: null;
            status: number;
            statusText: string;
        }>;
        geojson: () => Promise<{
            data: null;
            error: null;
            count: null;
            status: number;
            statusText: string;
        }>;
        explain: () => Promise<{
            data: null;
            error: null;
            count: null;
            status: number;
            statusText: string;
        }>;
        rollback: () => Promise<{
            data: null;
            error: null;
            count: null;
            status: number;
            statusText: string;
        }>;
        returns: () => /*elided*/ any;
        then: (resolve: any) => any;
    };
    rpc: () => Promise<{
        data: null;
        error: null;
        count: null;
        status: number;
        statusText: string;
    }>;
    auth: {
        getUser: () => Promise<{
            data: {
                user: null;
            };
            error: null;
        }>;
        getSession: () => Promise<{
            data: {
                session: null;
            };
            error: null;
        }>;
        signIn: () => Promise<{
            data: null;
            error: null;
            count: null;
            status: number;
            statusText: string;
        }>;
        signUp: () => Promise<{
            data: null;
            error: null;
            count: null;
            status: number;
            statusText: string;
        }>;
        signOut: () => Promise<{
            data: null;
            error: null;
            count: null;
            status: number;
            statusText: string;
        }>;
        resetPasswordForEmail: () => Promise<{
            data: null;
            error: null;
            count: null;
            status: number;
            statusText: string;
        }>;
        updateUser: () => Promise<{
            data: null;
            error: null;
            count: null;
            status: number;
            statusText: string;
        }>;
        setSession: () => Promise<{
            data: null;
            error: null;
            count: null;
            status: number;
            statusText: string;
        }>;
        refreshSession: () => Promise<{
            data: null;
            error: null;
            count: null;
            status: number;
            statusText: string;
        }>;
        onAuthStateChange: () => {
            data: {
                subscription: {
                    unsubscribe: () => void;
                };
            };
        };
    };
    storage: {
        from: () => {
            upload: () => Promise<{
                data: null;
                error: null;
                count: null;
                status: number;
                statusText: string;
            }>;
            download: () => Promise<{
                data: null;
                error: null;
                count: null;
                status: number;
                statusText: string;
            }>;
            list: () => Promise<{
                data: null;
                error: null;
                count: null;
                status: number;
                statusText: string;
            }>;
            update: () => Promise<{
                data: null;
                error: null;
                count: null;
                status: number;
                statusText: string;
            }>;
            move: () => Promise<{
                data: null;
                error: null;
                count: null;
                status: number;
                statusText: string;
            }>;
            copy: () => Promise<{
                data: null;
                error: null;
                count: null;
                status: number;
                statusText: string;
            }>;
            remove: () => Promise<{
                data: null;
                error: null;
                count: null;
                status: number;
                statusText: string;
            }>;
            createSignedUrl: () => Promise<{
                data: null;
                error: null;
                count: null;
                status: number;
                statusText: string;
            }>;
            createSignedUrls: () => Promise<{
                data: null;
                error: null;
                count: null;
                status: number;
                statusText: string;
            }>;
            getPublicUrl: () => {
                data: {
                    publicUrl: string;
                };
            };
        };
    };
    realtime: {
        channel: () => {
            on: () => {};
            subscribe: () => Promise<string>;
            unsubscribe: () => Promise<string>;
        };
    };
};
//# sourceMappingURL=supabase-mock.d.ts.map