// @ts-ignore - Storybook types are provided by @storybook/react-vite
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SimpleTest } from './simple-test';

const meta = {
  title: 'Test/SimpleTest',
  component: SimpleTest,
} satisfies Meta<typeof SimpleTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
