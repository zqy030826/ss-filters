import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useFiltersContext } from "apgu-filters";

/**
 * PredicateUpdateButton Component
 *
 * PURPOSE:
 * This button allows users to change which field a filter is applied to.
 * For example, switching from filtering by "Name" to filtering by "Email".
 *
 * PROPS:
 * - index: number - The position of this filter in the filterExpression array
 *
 * AVAILABLE UTILITY FUNCTIONS FROM useFiltersContext():
 *
 * 1. predicates - Array of all available predicate definitions
 *    Example: [{ field: "name", meta: { label: "Name" }, ... }, ...]
 *
 * 2. getRuleByIndex(index: number) - Gets the filter rule at the specified index
 *    Returns: FilterRule object or null
 *    Example: { field: "name", comparator: "contains", value: "John" }
 *
 * 3. getPredicateByRule(rule: FilterRule) - Gets the predicate definition for a rule
 *    Returns: Predicate object or null
 *    Example: { field: "name", meta: { label: "Name" }, comparators: [...] }
 *
 * 4. setRuleField(rule: FilterRule, field: string) - Changes which field the rule filters
 *    Example: setRuleField(rule, "email") - changes from name filter to email filter
 *
 * REACT/TSX CONCEPTS USED HERE:
 *
 * 1. INLINE FUNCTIONS:
 *    - Functions defined directly in JSX attributes
 *    - Example: onClick={() => doSomething()}
 *    - The () => creates an arrow function that runs when clicked
 *    - Useful for passing parameters: onClick={() => handleSelect(value)}
 *
 * 2. ARRAY ITERATION (.map()):
 *    - Used to render a list of items in TSX
 *    - Syntax: array.map((item) => <Component key={item.id}>{item.name}</Component>)
 *    - IMPORTANT: Always provide a unique "key" prop when mapping
 *    - Example:
 *      {predicates.map((predicate) => (
 *        <option key={predicate.field} value={predicate.field}>
 *          {predicate.meta.label}
 *        </option>
 *      ))}
 *
 * 3. EARLY RETURNS:
 *    - if (!rule) return null; - Exits component early if no data
 *    - Prevents errors from trying to use undefined/null data
 *
 * TODO:
 * Implement a dropdown/select button that:
 * 1. Shows the current field's label (from selectedPredicate.meta.label)
 * 2. When clicked, displays a dropdown menu
 * 3. Lists all available predicates (use predicates.map())
 * 4. When a predicate is selected, call setRuleField(rule, predicate.field)
 *
 */

interface PredicateUpdateButtonProps {
  index: number;
}

export const PredicateUpdateButton = ({
  index
}: PredicateUpdateButtonProps) => {
  const { predicates, getRuleByIndex, getPredicateByRule, setRuleField } =
    useFiltersContext();

  const rule = getRuleByIndex(index);
  if (!rule) return null;

  const selectedPredicate = getPredicateByRule(rule);
  if (!selectedPredicate) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          aria-label="Select field"
          className="rounded-full"
        >
          <span>
            {selectedPredicate.meta.label || "Select an option"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)">
        {predicates.map((predicate) => {
          return (
            <DropdownMenuItem
              key={predicate.field}
              onClick={() => setRuleField(rule, predicate.field)}
            >
              {predicate.meta.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
