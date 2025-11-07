import { type Meta, type StoryObj } from "@storybook/react";
import { FiltersProvider } from "apgu-filters";
import { mockPredicates, mockUsers } from "../../mock";
import BooleanPredicateInput from "../../../components/admin-template/predicates-ui/boolean-predicate";
import { PredicateRoot } from "../../../components/admin-template/predicate-root";

const meta: Meta<typeof BooleanPredicateInput> = {
  title: "Admin Template/Predicates/Boolean Predicate",
  component: BooleanPredicateInput,
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

type Story = StoryObj<typeof BooleanPredicateInput>;

export const True: Story = {
  args: {
    filterValue: true,
    onFilterValueChange: (value) => console.log("Value changed:", value)
  }
};

export const False: Story = {
  args: {
    filterValue: false,
    onFilterValueChange: (value) => console.log("Value changed:", value)
  }
};
