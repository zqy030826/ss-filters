import { type Meta, type StoryObj } from "@storybook/react";
import { FiltersProvider } from "apgu-filters";
import { mockPredicates, mockUsers } from "../../mock";
import DatePredicateInput from "../../../components/admin-template/predicates-ui/date-predicate";
import { PredicateRoot } from "../../../components/admin-template/predicate-root";

const meta: Meta<typeof DatePredicateInput> = {
  title: "Admin Template/Predicates/Date Predicate",
  component: DatePredicateInput,
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

type Story = StoryObj<typeof DatePredicateInput>;

export const Default: Story = {
  args: {
    filterValue: new Date(),
    onFilterValueChange: (value) => console.log("Value changed:", value)
  }
};

export const WithSpecificDate: Story = {
  args: {
    filterValue: new Date("2025-12-25"),
    onFilterValueChange: (value) => console.log("Value changed:", value)
  }
};
