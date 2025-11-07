import { type Meta, type StoryObj } from "@storybook/react";
import { PredicateComparatorSelect } from "../../components/admin-template/predicate-comparator-select";
import { FiltersProvider } from "apgu-filters";
import { mockPredicates, mockUsers } from "../mock";

const meta: Meta<typeof PredicateComparatorSelect> = {
  title: "Admin Template/Predicate Comparator Select",
  component: PredicateComparatorSelect,
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

type Story = StoryObj<typeof PredicateComparatorSelect>;

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
