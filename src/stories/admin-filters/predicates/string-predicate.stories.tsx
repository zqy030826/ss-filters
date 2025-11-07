import { type Meta, type StoryObj } from "@storybook/react";
import { FiltersProvider } from "@/apgu-filters";
import { mockPredicates, mockUsers } from "../../mock";
import StringPredicateInput from "../../../components/admin-template/predicates-ui/string-predicate";
import { PredicateRoot } from "../../../components/admin-template/predicate-root";

const meta: Meta<typeof StringPredicateInput> = {
  title: "Admin Template/Predicates/String Predicate",
  component: StringPredicateInput,
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

type Story = StoryObj<typeof StringPredicateInput>;

export const Default: Story = {
  args: {
    filterValue: "",
    onFilterValueChange: (value) => console.log("Value changed:", value)
  }
};

export const WithValue: Story = {
  args: {
    filterValue: "John Doe",
    onFilterValueChange: (value) => console.log("Value changed:", value)
  }
};
