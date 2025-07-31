import { ExtendedUserProfile } from '../types/extended-profile.types';
export declare class MockProfileService {
    private mockProfile;
    constructor();
    getProfile(userId: string): Promise<ExtendedUserProfile | null>;
    updateProfile(userId: string, updates: Partial<ExtendedUserProfile>): Promise<ExtendedUserProfile | null>;
}
export declare const mockProfileService: MockProfileService;
//# sourceMappingURL=mock-profile.service.d.ts.map