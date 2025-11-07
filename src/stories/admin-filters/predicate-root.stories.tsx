import { type Meta, type StoryObj } from "@storybook/react";
import { PredicateRoot } from "../../components/admin-template/predicate-root";
import { mockPredicates, mockUsers } from "../mock";
import { Button } from "../../components/ui/button";
import { FiltersProvider } from "@/apgu-filters/src";

const meta: Meta<typeof PredicateRoot> = {
  title: "Admin Template/Predicate Root",
  component: PredicateRoot,
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

type Story = StoryObj<typeof PredicateRoot>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button variant="outline" size="sm">
          Field
        </Button>
        <Button variant="outline" size="sm">
          Comparator
        </Button>
        <Button variant="outline" size="sm">
          Value
        </Button>
      </>
    )
  }
};

export const Full: Story = {
  args: {
    children: (
      <>
        <Button variant="outline" size="sm">
          Name
        </Button>
        <Button variant="outline" size="sm">
          Contains
        </Button>
        <Button variant="outline" size="sm">
          John
        </Button>
        <Button variant="outline" size="icon-sm">
          X
        </Button>
      </>
    )
  }
};
