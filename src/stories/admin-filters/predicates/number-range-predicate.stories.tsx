import { type Meta, type StoryObj } from "@storybook/react";
import { FiltersProvider } from "@/apgu-filters";
import { mockPredicates, mockUsers } from "../../mock";
import NumberRangePredicateInput from "../../../components/admin-template/predicates-ui/number-range-predicate";
import { PredicateRoot } from "../../../components/admin-template/predicate-root";

const meta: Meta<typeof NumberRangePredicateInput> = {
  title: "Admin Template/Predicates/Number Range Predicate",
  component: NumberRangePredicateInput,
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <FiltersProvider predicates={mockPredicates} values={mockUsers}>
        <PredicateRoot>
          <Story />
        </PredicateRoot>
      </FiltersProvider>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof NumberRangePredicateInput>;

export const Default: Story = {
  args: {
    filterValue: { min: 0, max: 100 },
    onFilterValueChange: (value) => console.log("Value changed:", value)
  }
};

export const WithCustomRange: Story = {
  args: {
    filterValue: { min: 25, max: 75 },
    onFilterValueChange: (value) => console.log("Value changed:", value)
  }
};
