import { Descendant } from 'slate';
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
export declare const RichTextEditor: import('react').ForwardRefExoticComponent<RichTextEditorProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=richtexteditor.d.ts.map