import { type Meta, type StoryObj } from "@storybook/react";
import { PredicateGroupAddButton } from "../../components/admin-template/predicate-group-add-button";
import { FiltersProvider } from "@/apgu-filters";
import { mockPredicates, mockUsers } from "../mock";

const meta: Meta<typeof PredicateGroupAddButton> = {
  title: "Admin Template/Predicate Group Add Button",
  component: PredicateGroupAddButton,
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <FiltersProvider predicates={mockPredicates} values={mockUsers}>
        <Story />
      </FiltersProvider>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof PredicateGroupAddButton>;

export const Default: Story = {};

export const Full: Story = {};
