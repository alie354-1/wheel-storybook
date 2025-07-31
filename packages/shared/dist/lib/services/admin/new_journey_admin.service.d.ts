import { NewJourneyPhase, NewJourneyDomain, NewJourneyStep } from '../../types/new_journey.types';
export declare const newJourneyAdminService: {
    getPhases(): Promise<NewJourneyPhase[]>;
    upsertPhase(phase: Partial<NewJourneyPhase>): Promise<NewJourneyPhase[]>;
    deletePhase(id: string): Promise<void>;
    getDomains(): Promise<NewJourneyDomain[]>;
    upsertDomain(domain: Partial<NewJourneyDomain>): Promise<NewJourneyDomain[]>;
    deleteDomain(id: string): Promise<void>;
    getStepTemplates(): Promise<NewJourneyStep[]>;
    upsertStepTemplate(step: Partial<NewJourneyStep>): Promise<NewJourneyStep[]>;
    deleteStepTemplate(id: string): Promise<void>;
};
//# sourceMappingURL=new_journey_admin.service.d.ts.map