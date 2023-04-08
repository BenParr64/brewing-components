import { ABVCalculator } from "./AbvCalculator";

import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Abv Calculator",
  component: ABVCalculator,
  tags: ["autodocs"],
  argTypes: {
    initialOriginalGravity: { control: "initialOriginalGravity" },
    initialFinalGravity: { control: "initialFinalGravity" },

  },
} satisfies Meta<typeof ABVCalculator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialOriginalGravity: 1.08,
    initialFinalGravity: 1.02,
  },
};

