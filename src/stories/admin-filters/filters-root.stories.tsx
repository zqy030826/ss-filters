import { type Meta, type StoryObj } from "@storybook/react";
import { FiltersRoot } from "../../components/admin-template/filters-root";
import { FiltersProvider } from "apgu-filters";
import { mockPredicates, mockUsers } from "../mock";

const meta: Meta<typeof FiltersRoot> = {
  title: "Admin Template/Filters Root",
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
    children: <div>Filter content goes here</div>
  }
};

export const Full: Story = {
  args: {
    children: (
      <>
        <div>Filter Item 1</div>
        <div>Filter Item 2</div>
        <div>Filter Item 3</div>
      </>
    )
  }
};
