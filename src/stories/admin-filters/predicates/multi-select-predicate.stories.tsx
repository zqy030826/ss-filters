import { type Meta, type StoryObj } from "@storybook/react";
import { FiltersProvider } from "apgu-filters";
import { mockPredicates, mockUsers } from "../../mock";
import MultiSelectPredicateInput from "../../../components/admin-template/predicates-ui/multi-select-predicate";
import { PredicateRoot } from "../../../components/admin-template/predicate-root";

const meta: Meta<typeof MultiSelectPredicateInput> = {
  title: "Admin Template/Predicates/Multi Select Predicate",
  component: MultiSelectPredicateInput,
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

type Story = StoryObj<typeof MultiSelectPredicateInput>;

const sampleOptions = [
  { label: "Project Alpha", value: "projectA" },
  { label: "Project Beta", value: "projectB" },
  { label: "Project Gamma", value: "projectC" },
  { label: "Project Delta", value: "projectD" }
];

export const Default: Story = {
  args: {
    filterValue: [],
    onFilterValueChange: (value) => console.log("Value changed:", value),
    options: sampleOptions
  }
};

export const WithSelectedValues: Story = {
  args: {
    filterValue: ["projectA", "projectC"],
    onFilterValueChange: (value) => console.log("Value changed:", value),
    options: sampleOptions
  }
};
