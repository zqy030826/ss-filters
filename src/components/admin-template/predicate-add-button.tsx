import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useFiltersContext } from "apgu-filters";
import { Plus } from "lucide-react";

/**
 * PredicateAddButton Component
 *
 * PURPOSE:
 * This button allows users to add a new filter to the filter expression.
 * When clicked, it shows a menu of all available fields to filter by.
 *
 * PROPS:
 * None - this component doesn't receive any props
 *
 * AVAILABLE UTILITY FUNCTIONS FROM useFiltersContext():
 *
 * 1. predicates - Array of all available predicate definitions
 *    Example: [
 *      { field: "name", meta: { label: "Name" }, ... },
 *      { field: "email", meta: { label: "Email" }, ... },
 *      { field: "age", meta: { label: "Age" }, ... }
 *    ]
 *
 * 2. addRuleByField(field: string) - Adds a new filter rule for the specified field
 *    Example: addRuleByField("name") - adds a new name filter with default values
 *    This will add a new rule to the filterExpression array
 *
 * REACT/TSX CONCEPTS USED HERE:
 *
 * 1. ARRAY ITERATION with .map():
 *    - Transforms an array into JSX elements
 *    - Each predicate becomes a menu item
 *    - Syntax: predicates.map((predicate) => <MenuItem key={predicate.field}>...)
 *
 * 2. INLINE ARROW FUNCTIONS:
 *    - onClick={() => addRuleByField(predicate.field)}
 *    - The arrow function captures the predicate.field value
 *    - Without the arrow function, it would call immediately instead of on click
 *
 * 3. KEY PROP:
 *    - React needs unique keys when rendering lists
 *    - Use predicate.field as the key (it's unique for each predicate)
 *    - Helps React track which items changed/added/removed
 *
 * TODO:
 * Implement a button with dropdown that:
 * 1. Shows a "+" icon or "Add Filter" text
 * 2. When clicked, displays a dropdown menu
 * 3. Lists all available predicates using predicates.map()
 * 4. When an option is clicked, calls addRuleByField(predicate.field)
 *
 */

export const PredicateAddButton = () => {
  const { predicates, addRuleByField } = useFiltersContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon-sm" className="rounded-full">
          <Plus />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)">
        {predicates.map((predicate) => {
          return (
            <DropdownMenuItem
              key={predicate.field}
              onClick={() => addRuleByField(predicate.field)}
            >
              {predicate.meta.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
