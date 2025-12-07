import { Check } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { useFiltersContext } from "apgu-filters";

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

  if (!rule) {
    return null;
  }

  const selectedComparator = getComparatorByRule(rule);
  const predicate = getPredicateByRule(rule);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          <span>{selectedComparator?.meta.label || "Select an option"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        {predicate?.comparators.map((comparator) => {
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
