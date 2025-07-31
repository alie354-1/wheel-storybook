/**
 * RichTextEditor Component
 *
 * A foundational rich text editor with basic formatting options.
 */

import { forwardRef, useMemo } from 'react';
import { createEditor, Descendant } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';

export interface RichTextEditorProps {
  /** Workspace context for styling */
  context?: WorkspaceContext;
  /** The initial value of the editor */
  initialValue?: Descendant[];
  /** Callback when the value changes */
  onChange?: (value: Descendant[]) => void;
  /** Label for the editor */
  label?: string;
  /** Whether the editor is disabled */
  disabled?: boolean;
  /** Name attribute */
  name?: string;
  /** ID attribute */
  id?: string;
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'This is editable rich text, much better than a <textarea>!' }],
  },
];

export const RichTextEditor = forwardRef<HTMLDivElement, RichTextEditorProps>((
  {
    context = 'neutral',
    initialValue: value = initialValue,
    onChange,
    label,
    disabled = false,
    name,
    id,
  },
  ref
) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const getContextClasses = () => {
    switch (context) {
      case 'consultant': return 'border-blue-400 focus-within:ring-blue-500';
      case 'client': return 'border-green-400 focus-within:ring-green-500';
      case 'admin': return 'border-gray-400 focus-within:ring-gray-500';
      case 'expert': return 'border-purple-400 focus-within:ring-purple-500';
      case 'toolCreator': return 'border-indigo-400 focus-within:ring-indigo-500';
      case 'founder': return 'border-orange-400 focus-within:ring-orange-500';
      default: return 'border-slate-300 focus-within:ring-slate-500';
    }
  };

  const containerClasses = [
    'p-2 border rounded-lg shadow-sm',
    'disabled:cursor-not-allowed disabled:opacity-50',
    getContextClasses(),
  ].filter(Boolean).join(' ');

  const editorId = id || `richtexteditor-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div ref={ref}>
      {label && (
        <label htmlFor={editorId} className="block text-sm font-medium text-slate-700 mb-1">
          {label}
        </label>
      )}
      <div className={containerClasses}>
        <Slate editor={editor} initialValue={value} onChange={onChange}>
          <Editable
            id={editorId}
            readOnly={disabled}
            className="min-h-[150px] p-2 focus:outline-none"
            name={name}
          />
        </Slate>
      </div>
    </div>
  );
});

RichTextEditor.displayName = 'RichTextEditor';
