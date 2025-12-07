import { type Meta, type StoryObj } from "@storybook/react";
import { FiltersProvider, FilterRule, useFiltersContext } from "apgu-filters";
import { mockPredicates, mockUsers, type User } from "../mock";
import { ExampleFilters } from "@/components/example-template/filters";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const meta: Meta<typeof ExampleFilters> = {
  title: "Example Template/Example Filters",
  component: ExampleFilters,
  parameters: {
    layout: "padded"
  }
};

export default meta;

type Story = StoryObj<typeof ExampleFilters>;

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

// Basic: No filters
export const NoFilters: Story = {
  render: () => (
    <FiltersProvider predicates={mockPredicates} values={mockUsers}>
      <div className="w-full max-w-6xl">
        <ExampleFilters />
        <FilteredUsersTable />
      </div>
    </FiltersProvider>
  )
};

// Basic: Single string filter
export const SingleStringFilter: Story = {
  render: () => (
    <FiltersProvider
      predicates={mockPredicates}
      values={mockUsers}
      defaultFilterExpression={[
        new FilterRule("name", "string-contains", "")
      ]}
    >
      <div className="w-full max-w-6xl">
        <ExampleFilters />
        <FilteredUsersTable />
      </div>
    </FiltersProvider>
  )
};

// Basic: Single select filter
export const SingleSelectFilter: Story = {
  render: () => (
    <FiltersProvider
      predicates={mockPredicates}
      values={mockUsers}
      defaultFilterExpression={[
        new FilterRule("role", "select-includes", ["admin"])
      ]}
    >
      <div className="w-full max-w-6xl">
        <ExampleFilters />
        <FilteredUsersTable />
      </div>
    </FiltersProvider>
  )
};

// Intermediate: Multiple filters
export const MultipleFilters: Story = {
  render: () => (
    <FiltersProvider
      predicates={mockPredicates}
      values={mockUsers}
      defaultFilterExpression={[
        new FilterRule("department", "select-includes", ["engineering"]),
        new FilterRule("isActive", "boolean-equals", true)
      ]}
    >
      <div className="w-full max-w-6xl">
        <ExampleFilters />
        <FilteredUsersTable />
      </div>
    </FiltersProvider>
  )
};

// Intermediate: Number range filter
export const NumberRangeFilter: Story = {
  render: () => (
    <FiltersProvider
      predicates={mockPredicates}
      values={mockUsers}
      defaultFilterExpression={[
        new FilterRule("age", "number-greater-than-or-equal", 30),
        new FilterRule("orderCount", "number-range-in-range-inclusive", {
          min: 50,
          max: 200
        })
      ]}
    >
      <div className="w-full max-w-6xl">
        <ExampleFilters />
        <FilteredUsersTable />
      </div>
    </FiltersProvider>
  )
};

// Advanced: Date filters
export const DateFilters: Story = {
  render: () => (
    <FiltersProvider
      predicates={mockPredicates}
      values={mockUsers}
      defaultFilterExpression={[
        new FilterRule("createdAt", "date-less-than", new Date("2024-01-01")),
        new FilterRule("lastLogin", "date-range-in-range-inclusive", {
          min: new Date("2025-11-01"),
          max: new Date("2025-11-05")
        })
      ]}
    >
      <div className="w-full max-w-6xl">
        <ExampleFilters />
        <FilteredUsersTable />
      </div>
    </FiltersProvider>
  )
};

// Advanced: Multi-select with date relative
export const ComplexMultiFilter: Story = {
  render: () => (
    <FiltersProvider
      predicates={mockPredicates}
      values={mockUsers}
      defaultFilterExpression={[
        new FilterRule("projects", "multi-select-includes-any", ["projectA", "projectB"]),
        new FilterRule("accountExpiry", "date-relative-less-than", {
          value: 365,
          unit: "days"
        }),
        new FilterRule("isActive", "boolean-equals", true)
      ]}
    >
      <div className="w-full max-w-6xl">
        <ExampleFilters />
        <FilteredUsersTable />
      </div>
    </FiltersProvider>
  )
};

// Advanced: All filter types showcase
export const AllFilterTypes: Story = {
  render: () => (
    <FiltersProvider
      predicates={mockPredicates}
      values={mockUsers}
      defaultFilterExpression={[
        new FilterRule("name", "string-starts-with", "A"),
        new FilterRule("email", "string-contains", "company.com"),
        new FilterRule("role", "select-includes", ["admin"]),
        new FilterRule("age", "number-greater-than", 25),
        new FilterRule("isActive", "boolean-equals", true),
        new FilterRule("department", "select-includes", ["engineering"]),
        new FilterRule("projects", "multi-select-includes-any", ["projectA", "projectD"]),
        new FilterRule("orderCount", "number-range-in-range-inclusive", {
          min: 100,
          max: 400
        }),
        new FilterRule("createdAt", "date-less-than", new Date("2024-01-01")),
        new FilterRule("accountExpiry", "date-relative-greater-than", {
          value: 180,
          unit: "days"
        })
      ]}
    >
      <div className="w-full max-w-6xl">
        <ExampleFilters />
        <FilteredUsersTable />
      </div>
    </FiltersProvider>
  )
};
