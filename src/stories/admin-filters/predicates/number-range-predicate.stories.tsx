import { type Meta, type StoryObj } from "@storybook/react";
import { FiltersProvider, FilterRule, useFiltersContext } from "apgu-filters";
import { mockPredicates, mockUsers, type User } from "../../admin-mock";
import { AdminFilters } from "../../../components/admin-template/filters";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const meta: Meta<typeof AdminFilters> = {
  title: "Admin Template/Predicates/Number Range Predicate",
  component: AdminFilters,
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <FiltersProvider
        predicates={mockPredicates}
        values={mockUsers}
        defaultFilterExpression={[
          new FilterRule("orderCount", "number-range-in-range-inclusive", {
            min: 0,
            max: 100
          })
        ]}
      >
        <Story />
      </FiltersProvider>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof AdminFilters>;

// Component that displays filtered results in a table
const FilteredUsersTable = () => {
  const { filteredValues } = useFiltersContext<User>();

  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium mb-2">
        Filtered Results ({filteredValues.length} users)
      </h3>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Active</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Orders</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredValues.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground">
                  No results found
                </TableCell>
              </TableRow>
            ) : (
              filteredValues.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="capitalize">{user.role}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>
                    {user.isActive ? (
                      <span className="text-green-600">Yes</span>
                    ) : (
                      <span className="text-red-600">No</span>
                    )}
                  </TableCell>
                  <TableCell className="capitalize">{user.department}</TableCell>
                  <TableCell>{user.orderCount}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export const Default: Story = {};

export const WithFilteredTable: Story = {
  parameters: {
    layout: "padded"
  },
  render: () => (
    <FiltersProvider
      predicates={mockPredicates}
      values={mockUsers}
      defaultFilterExpression={[
        new FilterRule("orderCount", "number-range-in-range-inclusive", {
          min: 50,
          max: 200
        })
      ]}
    >
      <div className="w-full max-w-6xl">
        <AdminFilters />
        <FilteredUsersTable />
      </div>
    </FiltersProvider>
  )
};
