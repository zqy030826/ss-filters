import { type Meta, type StoryObj } from "@storybook/react";
import { FiltersProvider } from "@/apgu-filters";
import { mockPredicates, mockUsers } from "../../mock";
import SelectPredicateInput from "../../../components/admin-template/predicates-ui/select-predicate";
import { PredicateRoot } from "../../../components/admin-template/predicate-root";

const meta: Meta<typeof SelectPredicateInput> = {
  title: "Admin Template/Predicates/Select Predicate",
  component: SelectPredicateInput,
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

type Story = StoryObj<typeof SelectPredicateInput>;

const sampleOptions = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
  { label: "Manager", value: "manager" }
];

export const Default: Story = {
  args: {
    filterValue: [],
    onFilterValueChange: (value) => console.log("Value changed:", value),
    options: sampleOptions
  }
};

export const WithSelectedValue: Story = {
  args: {
    filterValue: ["admin"],
    onFilterValueChange: (value) => console.log("Value changed:", value),
    options: sampleOptions
  }
};
