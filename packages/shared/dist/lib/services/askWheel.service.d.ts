/**
 * Ask The Wheel Service
 * - Handles submission and management of user questions to The Wheel experts
 * - Provides methods for submitting questions, retrieving responses, and managing requests
 * - Used by the Journey Map module for the "Ask The Wheel" feature
 */
export interface AskWheelRequest {
    id?: string;
    company_id: string;
    user_id: string;
    step_id: string;
    question_text: string;
    status?: string;
    response_text?: string;
    responded_by?: string;
    responded_at?: string;
    created_at?: string;
    updated_at?: string;
}
export declare const askWheelService: {
    /**
     * Submit a question to The Wheel experts
     * @param companyId The ID of the company
     * @param stepId The ID of the journey step
     * @param userId The ID of the user submitting the question
     * @param questionText The text of the question
     * @returns The created request record
     */
    submitQuestion(companyId: string, stepId: string, userId: string, questionText: string): Promise<any>;
    /**
     * Get all questions submitted by a user
     * @param userId The ID of the user
     * @returns An array of request records
     */
    getUserQuestions(userId: string): Promise<any[]>;
    /**
     * Get all questions for a company
     * @param companyId The ID of the company
     * @returns An array of request records
     */
    getCompanyQuestions(companyId: string): Promise<any[]>;
    /**
     * Get all questions for a specific journey step
     * @param stepId The ID of the journey step
     * @returns An array of request records
     */
    getStepQuestions(stepId: string): Promise<any[]>;
    /**
     * Get a specific question by ID
     * @param requestId The ID of the request
     * @returns The request record
     */
    getQuestion(requestId: string): Promise<any>;
    /**
     * Update the status of a question
     * @param requestId The ID of the request
     * @param status The new status
     * @returns The updated request record
     */
    updateStatus(requestId: string, status: string): Promise<any>;
    /**
     * Respond to a question
     * @param requestId The ID of the request
     * @param responseText The response text
     * @param respondedBy The ID of the user responding
     * @returns The updated request record
     */
    respondToQuestion(requestId: string, responseText: string, respondedBy: string): Promise<any>;
};
//# sourceMappingURL=askWheel.service.d.ts.map