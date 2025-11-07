import { type Meta, type StoryObj } from "@storybook/react";
import { FiltersProvider } from "@/apgu-filters";
import { mockPredicates, mockUsers } from "../../mock";
import DateRangePredicateInput from "../../../components/admin-template/predicates-ui/date-range-predicate";
import { PredicateRoot } from "../../../components/admin-template/predicate-root";

const meta: Meta<typeof DateRangePredicateInput> = {
  title: "Admin Template/Predicates/Date Range Predicate",
  component: DateRangePredicateInput,
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

type Story = StoryObj<typeof DateRangePredicateInput>;

export const Default: Story = {
  args: {
    filterValue: {
      min: new Date(),
      max: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    },
    onFilterValueChange: (value) => console.log("Value changed:", value)
  }
};

export const WithCustomRange: Story = {
  args: {
    filterValue: {
      min: new Date("2025-01-01"),
      max: new Date("2025-12-31")
    },
    onFilterValueChange: (value) => console.log("Value changed:", value)
  }
};
