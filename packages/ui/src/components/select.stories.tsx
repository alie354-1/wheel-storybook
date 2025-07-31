import type { Meta, StoryObj } from "@storybook/react-vite";
import { EnhancedSelect, GroupedOption, SelectOption } from './select';

const meta: Meta<typeof EnhancedSelect> = {
  title: 'Components/Form/Select',
  component: EnhancedSelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An advanced select component with support for search, groups, and multi-select.',
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'toolCreator', 'founder', 'neutral'],
    },
    validationState: {
      control: 'select',
      options: ['none', 'error', 'warning', 'success'],
    },
    selectSize: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    isMulti: { control: 'boolean' },
    isSearchable: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof EnhancedSelect>;

const defaultOptions: SelectOption[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'caramel', label: 'Caramel', disabled: true },
  { value: 'mint', label: 'Mint' },
];

const groupedOptions: GroupedOption[] = [
  {
    label: 'Fruits',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
    ],
  },
  {
    label: 'Vegetables',
    options: [
      { value: 'carrot', label: 'Carrot' },
      { value: 'broccoli', label: 'Broccoli' },
    ],
  },
];

export const Default: Story = {
  args: {
    label: 'Favorite Flavor',
    options: defaultOptions,
    helperText: 'Select your favorite ice cream flavor.',
  },
};

export const Searchable: Story = {
  args: {
    ...Default.args,
    label: 'Search for a Flavor',
    isSearchable: true,
  },
};

export const MultiSelect: Story = {
  args: {
    ...Default.args,
    label: 'Select Multiple Flavors',
    isMulti: true,
  },
};

export const Grouped: Story = {
  args: {
    label: 'Select a Food',
    options: groupedOptions,
  },
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <EnhancedSelect
        label="Error State"
        options={defaultOptions}
        validationState="error"
        errorMessage="This field is required."
      />
      <EnhancedSelect
        label="Warning State"
        options={defaultOptions}
        validationState="warning"
        warningMessage="Are you sure about this choice?"
      />
      <EnhancedSelect
        label="Success State"
        options={defaultOptions}
        validationState="success"
        successMessage="Great choice!"
      />
    </div>
  ),
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
      <EnhancedSelect label="Consultant Context" context="consultant" options={defaultOptions} />
      <EnhancedSelect label="Client Context" context="client" options={defaultOptions} />
      <EnhancedSelect label="Admin Context" context="admin" options={defaultOptions} />
      <EnhancedSelect label="Expert Context" context="expert" options={defaultOptions} />
      <EnhancedSelect label="Tool Creator Context" context="toolCreator" options={defaultOptions} />
      <EnhancedSelect label="Founder Context" context="founder" options={defaultOptions} />
    </div>
  ),
};
