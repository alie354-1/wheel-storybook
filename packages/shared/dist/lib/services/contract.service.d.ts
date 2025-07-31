/**
 * Interface for contract templates
 */
export interface ContractTemplate {
    id: string;
    expert_id: string;
    title: string;
    content: string;
    is_default: boolean;
    created_at: string;
    updated_at: string;
}
/**
 * Interface for contracts
 */
export interface Contract {
    id: string;
    expert_id: string;
    user_id: string;
    connect_request_id?: string;
    template_id?: string;
    title: string;
    content: string;
    status: 'draft' | 'sent' | 'accepted' | 'rejected' | 'expired' | 'terminated';
    expert_signed: boolean;
    user_signed: boolean;
    expert_signed_at?: string;
    user_signed_at?: string;
    valid_from?: string;
    valid_until?: string;
    hourly_rate?: number;
    terms_and_conditions?: string;
    created_at: string;
    updated_at: string;
}
/**
 * Interface for payments
 */
export interface Payment {
    id: string;
    expert_id: string;
    user_id: string;
    session_id?: string;
    contract_id?: string;
    amount: number;
    currency: string;
    payment_method?: string;
    payment_reference?: string;
    status: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded' | 'disputed';
    notes?: string;
    payment_date?: string;
    created_at: string;
    updated_at: string;
}
/**
 * Service for managing expert contracts and payments
 */
export declare const contractService: {
    /**
     * Create a new contract template
     * @param data The template data
     * @returns The created template
     */
    createContractTemplate(data: Omit<ContractTemplate, "id" | "created_at" | "updated_at">): Promise<ContractTemplate | null>;
    /**
     * Get contract templates for an expert
     * @param expertId The expert's ID
     * @returns Array of templates
     */
    getContractTemplates(expertId: string): Promise<ContractTemplate[]>;
    /**
     * Get a specific contract template by ID
     * @param templateId The template ID
     * @returns The template
     */
    getContractTemplateById(templateId: string): Promise<ContractTemplate | null>;
    /**
     * Update a contract template
     * @param templateId The template ID
     * @param updates The updates to apply
     * @returns The updated template
     */
    updateContractTemplate(templateId: string, updates: Partial<Omit<ContractTemplate, "id" | "expert_id" | "created_at" | "updated_at">>): Promise<ContractTemplate | null>;
    /**
     * Delete a contract template
     * @param templateId The template ID
     * @returns Whether the deletion was successful
     */
    deleteContractTemplate(templateId: string): Promise<boolean>;
    /**
     * Create a new contract
     * @param data The contract data
     * @returns The created contract
     */
    createContract(data: Omit<Contract, "id" | "created_at" | "updated_at">): Promise<Contract | null>;
    /**
     * Get contracts for an expert
     * @param expertId The expert's ID
     * @param status Optional status filter
     * @returns Array of contracts
     */
    getContractsByExpert(expertId: string, status?: string): Promise<Contract[]>;
    /**
     * Get contracts for a user
     * @param userId The user's ID
     * @param status Optional status filter
     * @returns Array of contracts
     */
    getContractsByUser(userId: string, status?: string): Promise<Contract[]>;
    /**
     * Get a specific contract by ID
     * @param contractId The contract ID
     * @returns The contract
     */
    getContractById(contractId: string): Promise<Contract | null>;
    /**
     * Update a contract
     * @param contractId The contract ID
     * @param updates The updates to apply
     * @returns The updated contract
     */
    updateContract(contractId: string, updates: Partial<Omit<Contract, "id" | "created_at" | "updated_at">>): Promise<Contract | null>;
    /**
     * Sign a contract as an expert
     * @param contractId The contract ID
     * @returns The updated contract
     */
    signContractAsExpert(contractId: string): Promise<Contract | null>;
    /**
     * Sign a contract as a user
     * @param contractId The contract ID
     * @returns The updated contract
     */
    signContractAsUser(contractId: string): Promise<Contract | null>;
    /**
     * Reject a contract
     * @param contractId The contract ID
     * @param reason Optional reason for rejection
     * @returns The updated contract
     */
    rejectContract(contractId: string, reason?: string): Promise<Contract | null>;
    /**
     * Create a new payment
     * @param data The payment data
     * @returns The created payment
     */
    createPayment(data: Omit<Payment, "id" | "created_at" | "updated_at">): Promise<Payment | null>;
    /**
     * Get payments for an expert
     * @param expertId The expert's ID
     * @param status Optional status filter
     * @returns Array of payments
     */
    getPaymentsByExpert(expertId: string, status?: string): Promise<Payment[]>;
    /**
     * Get payments for a user
     * @param userId The user's ID
     * @param status Optional status filter
     * @returns Array of payments
     */
    getPaymentsByUser(userId: string, status?: string): Promise<Payment[]>;
    /**
     * Get a specific payment by ID
     * @param paymentId The payment ID
     * @returns The payment
     */
    getPaymentById(paymentId: string): Promise<Payment | null>;
    /**
     * Update a payment
     * @param paymentId The payment ID
     * @param updates The updates to apply
     * @returns The updated payment
     */
    updatePayment(paymentId: string, updates: Partial<Omit<Payment, "id" | "created_at" | "updated_at">>): Promise<Payment | null>;
    /**
     * Update a payment status
     * @param paymentId The payment ID
     * @param status The new status
     * @returns The updated payment
     */
    updatePaymentStatus(paymentId: string, status: "pending" | "processing" | "completed" | "failed" | "refunded" | "disputed"): Promise<Payment | null>;
};
//# sourceMappingURL=contract.service.d.ts.map