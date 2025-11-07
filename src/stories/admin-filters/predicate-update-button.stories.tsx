import { type Meta, type StoryObj } from "@storybook/react";
import { PredicateUpdateButton } from "../../components/admin-template/predicate-update-button";
import { mockPredicates, mockUsers } from "../mock";
import { FiltersProvider } from "@/apgu-filters/src";

const meta: Meta<typeof PredicateUpdateButton> = {
  title: "Admin Template/Predicate Update Button",
  component: PredicateUpdateButton,
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <FiltersProvider predicates={mockPredicates} values={mockUsers}>
        <Story />
      </FiltersProvider>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof PredicateUpdateButton>;

export const Default: Story = {
  args: {
    index: 0
  }
};

export const Full: Story = {
  args: {
    index: 0
  }
};
