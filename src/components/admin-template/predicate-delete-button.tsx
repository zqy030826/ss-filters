import { Button } from "@/components/ui/button";
import { useFiltersContext } from "apgu-filters";
import { X } from "lucide-react";

/**
 * PredicateDeleteButton Component
 *
 * PURPOSE:
 * This button allows users to remove a filter from the filter expression.
 * When clicked, it removes the filter at the specified index.
 *
 * PROPS:
 * - index: number - The position of the filter to delete in the filterExpression array
 *
 * AVAILABLE UTILITY FUNCTIONS FROM useFiltersContext():
 *
 * 1. removeRuleByIndex(index: number) - Removes the filter rule at the specified index
 *    Example: removeRuleByIndex(2) - removes the 3rd filter (0-indexed)
 *    This will remove the rule from the filterExpression array
 *
 * REACT/TSX CONCEPTS USED HERE:
 *
 * 1. INLINE ARROW FUNCTIONS:
 *    - onClick={() => removeRuleByIndex(index)}
 *    - The arrow function delays execution until the button is clicked
 *    - The index value is captured from the component props
 *    - Without the arrow function: onClick={removeRuleByIndex(index)}
 *      would execute immediately on render (wrong!)
 *    - With arrow function: onClick={() => removeRuleByIndex(index)}
 *      executes only when clicked (correct!)
 *
 * 2. PROPS DESTRUCTURING:
 *    - ({ index }: PredicateDeleteButtonProps) - extracts index from props
 *    - Same as: (props: PredicateDeleteButtonProps) => { const index = props.index; }
 *    - Cleaner and more common in React
 *
 * TODO:
 * Implement a delete button that:
 * 1. Shows an "X" icon or delete icon
 * 2. When clicked, calls removeRuleByIndex(index)
 * 3. Should be small and unobtrusive
 * 4. Consider using a destructive variant (like "destructive" or "ghost")
 *
 * SUGGESTED COMPONENTS:
 * - Button (with an X icon from lucide-react)
 * - Look at Shadcn button component
 * - Consider size="icon-sm" or size="sm" for a compact button
 *
 * EXAMPLE STRUCTURE:
 * <Button
 *   size="icon-sm"
 *   variant="outline"
 *   onClick={() => removeRuleByIndex(index)}
 * >
 *   <X />
 * </Button>
 *
 * NOTE ON INLINE FUNCTIONS vs NAMED HANDLERS:
 * Both of these patterns work:
 *
 * Pattern 1 (Inline):
 * <Button onClick={() => removeRuleByIndex(index)}>Delete</Button>
 *
 * Pattern 2 (Named handler):
 * const handleDelete = () => {
 *   removeRuleByIndex(index);
 * };
 * <Button onClick={handleDelete}>Delete</Button>
 *
 * Use Pattern 1 for simple one-liners
 * Use Pattern 2 when you need multiple lines of logic
 */

interface PredicateDeleteButtonProps {
  index: number;
}

export const PredicateDeleteButton = ({
  index
}: PredicateDeleteButtonProps) => {
  const { removeRuleByIndex } = useFiltersContext();

  return (
    <Button
      size="icon-sm"
      variant="outline"
      onClick={() => removeRuleByIndex(index)}
      className="rounded-full"
    >
      <X />
    </Button>
  );
};
