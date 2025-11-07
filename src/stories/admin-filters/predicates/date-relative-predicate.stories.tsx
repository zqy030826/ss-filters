import { type Meta, type StoryObj } from "@storybook/react";
import { FiltersProvider } from "apgu-filters";
import { mockPredicates, mockUsers } from "../../mock";
import DateRelativePredicateInput from "../../../components/admin-template/predicates-ui/date-relative-predicate";
import { PredicateRoot } from "../../../components/admin-template/predicate-root";

const meta: Meta<typeof DateRelativePredicateInput> = {
  title: "Admin Template/Predicates/Date Relative Predicate",
  component: DateRelativePredicateInput,
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

type Story = StoryObj<typeof DateRelativePredicateInput>;

export const Default: Story = {
  args: {
    filterValue: new Date(),
    onFilterValueChange: (value) => console.log("Value changed:", value)
  }
};

export const SevenDaysFromNow: Story = {
  args: {
    filterValue: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    onFilterValueChange: (value) => console.log("Value changed:", value)
  }
};
