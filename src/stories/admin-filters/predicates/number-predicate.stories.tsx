import { type Meta, type StoryObj } from "@storybook/react";
import { FiltersProvider } from "apgu-filters";
import { mockPredicates, mockUsers } from "../../mock";
import NumberPredicateInput from "../../../components/admin-template/predicates-ui/number-predicate";
import { PredicateRoot } from "../../../components/admin-template/predicate-root";

const meta: Meta<typeof NumberPredicateInput> = {
  title: "Admin Template/Predicates/Number Predicate",
  component: NumberPredicateInput,
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

type Story = StoryObj<typeof NumberPredicateInput>;

export const Default: Story = {
  args: {
    filterValue: 0,
    onFilterValueChange: (value) => console.log("Value changed:", value)
  }
};

export const WithValue: Story = {
  args: {
    filterValue: 42,
    onFilterValueChange: (value) => console.log("Value changed:", value)
  }
};
