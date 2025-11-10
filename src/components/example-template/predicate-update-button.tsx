import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { useFiltersContext } from "apgu-filters";

interface PredicateUpdateButtonProps {
  index: number;
}

export const PredicateUpdateButton = ({
  index
}: PredicateUpdateButtonProps) => {
  const { predicates, getRuleByIndex, getPredicateByRule, setRuleField } =
    useFiltersContext();

  const rule = getRuleByIndex(index);

  if (!rule) {
    return null;
  }

  const selectedPredicate = getPredicateByRule(rule);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          aria-label="Select field"
          className="rounded-full"
        >
          <span>{selectedPredicate?.meta.label || "Select an option"}</span>
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
