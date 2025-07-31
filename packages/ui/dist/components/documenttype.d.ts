import { default as React } from 'react';
export type DocumentVariant = 'document' | 'spreadsheet' | 'presentation' | 'pdf' | 'image' | 'video' | 'other';
export interface DocumentTypeProps {
    type: DocumentVariant;
    className?: string;
}
/**
 * DocumentType component that displays an icon for a document type.
 */
export declare const DocumentType: React.FC<DocumentTypeProps>;
export default DocumentType;
//# sourceMappingURL=documenttype.d.ts.map