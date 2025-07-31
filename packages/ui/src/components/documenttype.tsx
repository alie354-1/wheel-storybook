import React from 'react';
import { cn } from '@wheel/shared';

export type DocumentVariant = 'document' | 'spreadsheet' | 'presentation' | 'pdf' | 'image' | 'video' | 'other';

export interface DocumentTypeProps {
  type: DocumentVariant;
  className?: string;
}

/**
 * DocumentType component that displays an icon for a document type.
 */
export const DocumentType: React.FC<DocumentTypeProps> = ({
  type,
  className = '',
}) => {
  const getIcon = () => {
    switch (type) {
      case 'document':
        return '📄';
      case 'spreadsheet':
        return '📊';
      case 'presentation':
        return '📈';
      case 'pdf':
        return ' L';
      case 'image':
        return '🖼️';
      case 'video':
        return '📹';
      default:
        return '📁';
    }
  };

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700',
        className
      )}
    >
      <span className="text-lg">{getIcon()}</span>
    </div>
  );
};

export default DocumentType;
