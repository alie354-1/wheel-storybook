import { MultiPersonaProfileService } from './profile.service';
import { ProfilePersona, UserProfile } from './types';

const mockUserCoreProfile = {
  id: 'test-user-id',
  email: 'test@example.com',
  full_name: 'Test User',
  display_name: 'Test',
  avatar_url: 'https://example.com/avatar.png',
  active_persona_id: 'test-persona-id',
  bio: 'A test bio',
  last_updated: new Date().toISOString(),
  account_created_at: new Date().toISOString(),
};

const mockUserPersonas = [
  {
    id: 'test-persona-id',
    user_id: 'test-user-id',
    name: 'Test Persona',
    description: 'Test Description',
    type: 'custom',
    is_active: true,
    is_public: false,
    avatar_url: 'https://example.com/avatar.png',
    professional: {
      title: 'Developer',
      industry: 'Technology',
      expertise_areas: ['JavaScript', 'React'],
    },
    network: {
      social_links: [{ platform: 'linkedin', url: 'https://linkedin.com/test' }],
    },
    created_at: new Date().toISOString(),
    last_used_at: new Date().toISOString(),
  },
];

const mockProfileSections = [
  {
    id: 'test-section-id',
    user_id: 'test-user-id',
    persona_id: 'test-persona-id',
    section_type: 'bio',
    title: 'About Me',
    content: 'Test content',
    order: 1,
    is_visible: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

jest.mock('../../supabase', () => ({
  supabase: {
    from: jest.fn((tableName) => ({
      select: jest.fn().mockReturnThis(),
      insert: jest.fn().mockReturnThis(),
      update: jest.fn().mockReturnThis(),
      delete: jest.fn().mockReturnThis(),
      upsert: jest.fn().mockReturnThis(),
      eq: jest.fn((column, value) => {
        if (tableName === 'user_core_profiles' && column === 'id' && value === 'test-user-id') {
          return {
            single: jest.fn().mockResolvedValue({ data: mockUserCoreProfile, error: null }),
          };
        }
        if (tableName === 'user_personas' && column === 'user_id' && value === 'test-user-id') {
          return Promise.resolve({ data: mockUserPersonas, error: null });
        }
        if (tableName === 'user_personas' && column === 'id' && value === 'test-persona-id') {
            return {
                single: jest.fn().mockResolvedValue({ data: mockUserPersonas[0], error: null }),
            };
        }
        if (tableName === 'profile_sections' && column === 'user_id' && value === 'test-user-id') {
            return {
                order: jest.fn().mockResolvedValue({ data: mockProfileSections, error: null }),
            };
        }
        return Promise.resolve({ data: [], error: null });
      }),
      single: jest.fn().mockResolvedValue({ data: {}, error: null }),
    })),
    auth: {
      getUser: jest.fn().mockResolvedValue({
        data: {
          user: {
            id: 'test-user-id',
            email: 'test@example.com',
          },
        },
        error: null,
      }),
    },
  },
}));

describe('MultiPersonaProfileService', () => {
  let profileService: MultiPersonaProfileService;

  beforeEach(() => {
    jest.clearAllMocks();
    profileService = new MultiPersonaProfileService();
  });

  it('should retrieve a user profile', async () => {
    const profile = await profileService.getProfile('test-user-id');
    expect(profile).not.toBeNull();
    expect(profile?.id).toBe('test-user-id');
    expect(profile?.displayName).toBe('Test');
    expect(profile?.personas?.length).toBe(1);
  });

  it('should retrieve user personas', async () => {
    const personas = await profileService.getPersonas('test-user-id');
    expect(personas.length).toBeGreaterThan(0);
    expect(personas[0].id).toBe('test-persona-id');
  });

  it('should retrieve the active persona', async () => {
    const persona = await profileService.getActivePersona('test-user-id');
    expect(persona).not.toBeNull();
    expect(persona?.id).toBe('test-persona-id');
  });

  it('should retrieve profile sections', async () => {
    const sections = await profileService.getProfileSections('test-user-id');
    expect(sections.length).toBeGreaterThan(0);
    expect(sections[0].title).toBe('About Me');
  });

  it('should update a profile without throwing', async () => {
    const testProfile: Partial<UserProfile> = { displayName: 'Updated Name' };
    await expect(
      profileService.updateProfile('test-user-id', testProfile)
    ).resolves.not.toThrow();
  });

  it('should create a persona without throwing', async () => {
    const testPersona: Omit<ProfilePersona, 'id'> = {
      name: 'New Persona',
      description: 'New Description',
      role: 'Designer',
      area: 'UX/UI',
      expertise: ['UI Design', 'Figma'],
      avatarUrl: 'https://example.com/avatar2.png',
      isActive: false,
    };
    await expect(
      profileService.createPersona('test-user-id', testPersona)
    ).resolves.not.toThrow();
  });
});
