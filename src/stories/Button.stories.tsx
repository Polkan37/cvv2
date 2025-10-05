import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "../components/Button";

const meta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,
  argTypes: {
    $type: {
      options: ['primary', 'secondary', 'bordered'],
      control: { type: 'select' },
    },
    children: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    $type: 'primary',
    children: 'Button',
  },
};