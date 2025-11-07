import { type Meta, type StoryObj } from "@storybook/react";
import { FiltersRoot } from "../../components/admin-template/filters-root";
import { FiltersProvider } from "@/apgu-filters";
import { mockPredicates, mockUsers } from "../mock";
import { AdminFilters } from ".";

const meta: Meta<typeof FiltersRoot> = {
  title: "Admin Template/Filters",
  component: FiltersRoot,
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

type Story = StoryObj<typeof FiltersRoot>;

export const Default: Story = {
  args: {
    children: <AdminFilters />
  }
};
