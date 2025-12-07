import { type Meta, type StoryObj } from "@storybook/react";
import { FiltersProvider, FilterRule } from "apgu-filters";
import { mockPredicates, mockUsers } from "../../mock";
import { ExampleFilters } from "../../../components/example-template/filters";

const meta: Meta<typeof ExampleFilters> = {
  title: "Example Template/Predicates/Date Range Predicate",
  component: ExampleFilters,
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <FiltersProvider
        predicates={mockPredicates}
        values={mockUsers}
        defaultFilterExpression={[
          new FilterRule("lastLogin", "date-range-in-range-inclusive", {
            min: new Date(),
            max: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
          })
        ]}
      >
        <Story />
      </FiltersProvider>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof ExampleFilters>;

export const Default: Story = {};
