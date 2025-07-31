/**
 * Utility functions for parsing LLM responses
 */
export declare const responseParser: {
    /**
     * Extract JSON from a string that may contain markdown or other text
     * @param content String that may contain JSON
     * @returns Parsed JSON object or array
     */
    extractJSON(content: string): any;
    /**
     * Clean and normalize text from LLM response
     * @param text Text to clean
     * @returns Cleaned text
     */
    cleanText(text: string): string;
    /**
     * Extract a list from a string that may be comma-separated or have bullet points
     * @param text Text containing a list
     * @returns Array of list items
     */
    extractList(text: string): string[];
};
//# sourceMappingURL=response-parsing.d.ts.map