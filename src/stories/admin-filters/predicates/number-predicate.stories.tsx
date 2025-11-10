import { type Meta, type StoryObj } from "@storybook/react";
import { FiltersProvider, FilterRule } from "apgu-filters";
import { mockPredicates, mockUsers } from "../../mock";
import { AdminFilters } from "../../../components/admin-template/filters";

const meta: Meta<typeof AdminFilters> = {
  title: "Admin Template/Predicates/Number Predicate",
  component: AdminFilters,
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <FiltersProvider
        predicates={mockPredicates}
        values={mockUsers}
        defaultFilterExpression={[
          new FilterRule("age", "number-equals", 0)
        ]}
      >
        <Story />
      </FiltersProvider>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof AdminFilters>;

export const Default: Story = {};
