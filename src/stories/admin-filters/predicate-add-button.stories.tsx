import { type Meta, type StoryObj } from "@storybook/react";
import { PredicateAddButton } from "../../components/admin-template/predicate-add-button";
import { FiltersProvider } from "apgu-filters";
import { mockPredicates, mockUsers } from "../mock";
import { AdminFilters } from ".";

const meta: Meta<typeof PredicateAddButton> = {
  title: "Admin Template/Predicate Add Button",
  component: PredicateAddButton,
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

type Story = StoryObj<typeof PredicateAddButton>;

export const Default: Story = {};

export const Full: Story = {
  render: () => <AdminFilters />
};
