import { type Meta, type StoryObj } from "@storybook/react";
import { PredicateDeleteButton } from "../../components/admin-template/predicate-delete-button";
import { FiltersProvider } from "@/apgu-filters";
import { mockPredicates, mockUsers } from "../mock";

const meta: Meta<typeof PredicateDeleteButton> = {
  title: "Admin Template/Predicate Delete Button",
  component: PredicateDeleteButton,
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

type Story = StoryObj<typeof PredicateDeleteButton>;

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
