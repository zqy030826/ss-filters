import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useFiltersContext } from "apgu-filters";
import { Check } from "lucide-react";

/**
 * PredicateComparatorSelect Component
 *
 * PURPOSE:
 * This dropdown allows users to change the comparison operator for a filter.
 * For example, switching from "contains" to "starts with" for a text filter,
 * or from "equals" to "greater than" for a number filter.
 *
 * PROPS:
 * - index: number - The position of this filter in the filterExpression array
 *
 * AVAILABLE UTILITY FUNCTIONS FROM useFiltersContext():
 *
 * 1. getRuleByIndex(index: number) - Gets the filter rule at the specified index
 *    Returns: FilterRule object or null
 *    Example: { field: "age", comparator: "greater-than", value: 18 }
 *
 * 2. getComparatorByRule(rule: FilterRule) - Gets the active comparator for a rule
 *    Returns: Comparator object or null
 *    Example: { id: "greater-than", meta: { label: "Greater Than" }, ... }
 *
 * 3. getPredicateByRule(rule: FilterRule) - Gets the predicate definition for a rule
 *    Returns: Predicate object with available comparators
 *    Example: { field: "age", comparators: [...array of comparator objects...] }
 *
 * 4. setComparatorByRule(rule: FilterRule, comparatorId: string) - Changes the comparator
 *    Example: setComparatorByRule(rule, "less-than") - switches to "less than" comparison
 *
 * REACT/TSX CONCEPTS USED HERE:
 *
 * 1. EARLY RETURNS FOR SAFETY:
 *    - if (!rule) return null; - Exits if no rule found
 *    - if (!predicate) return null; - Exits if no predicate found
 *    - Prevents errors from accessing properties on undefined/null
 *    - Always check data exists before using it!
 *
 * 2. ARRAY ITERATION with .map():
 *    - predicate.comparators.map((comparator) => ...)
 *    - Creates a menu item for each available comparator
 *    - Each predicate type has different comparators:
 *      * String: "contains", "starts with", "ends with", "equals"
 *      * Number: "equals", "greater than", "less than"
 *      * Boolean: "equals", "not equals"
 *
 * 3. CONDITIONAL RENDERING:
 *    - isSelected = selectedComparator?.id === comparator.id
 *    - Use this to highlight the currently selected option
 *    - The ?. is optional chaining - prevents errors if selectedComparator is null
 *
 * 4. INLINE FUNCTION CAPTURING VARIABLES:
 *    - onClick={() => setComparatorByRule(rule, comparator.id)}
 *    - The arrow function "captures" both rule and comparator.id
 *    - Each menu item gets its own comparator.id value
 *    - This is called a "closure" in JavaScript
 *
 * DATA STRUCTURE EXAMPLE:
 *
 * For a number filter, predicate.comparators might look like:
 * [
 *   { id: "equals", meta: { label: "Equals" }, evaluate: ... },
 *   { id: "not-equals", meta: { label: "Not Equals" }, evaluate: ... },
 *   { id: "greater-than", meta: { label: "Greater Than" }, evaluate: ... },
 *   { id: "less-than", meta: { label: "Less Than" }, evaluate: ... }
 * ]
 *
 * TODO:
 * Implement a dropdown that:
 * 1. Shows the current comparator's label (from selectedComparator.meta.label)
 * 2. When clicked, displays a dropdown menu
 * 3. Lists all available comparators using predicate.comparators.map()
 * 4. Shows comparator.meta.label for each option
 * 5. Highlights the currently selected comparator
 * 6. When an option is clicked, calls setComparatorByRule(rule, comparator.id)
 */

interface PredicateComparatorSelectProps {
  index: number;
}

export const PredicateComparatorSelect = ({
  index
}: PredicateComparatorSelectProps) => {
  const {
    getRuleByIndex,
    getComparatorByRule,
    getPredicateByRule,
    setComparatorByRule
  } = useFiltersContext();

  const rule = getRuleByIndex(index);
  if (!rule) return null;

  const selectedComparator = getComparatorByRule(rule);
  const predicate = getPredicateByRule(rule);
  if (!predicate) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          <span>
            {selectedComparator?.meta.label || "Select an option"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        {predicate.comparators.map((comparator) => {
          const isSelected = selectedComparator?.id === comparator.id;

          return (
            <DropdownMenuItem
              key={comparator.id}
              className={
                isSelected ? "bg-secondary text-secondary-foreground" : ""
              }
              onClick={() => setComparatorByRule(rule, comparator.id)}
            >
              <div className="w-4">{isSelected && <Check />}</div>
              {comparator.meta.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
