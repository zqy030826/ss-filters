import { Check } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { useFiltersContext, type ComparatorInstance } from "@/apgu-filters";

interface PredicateComparatorSelectProps {
  index: number;
}

export const PredicateComparatorSelect = ({
  index
}: PredicateComparatorSelectProps) => {
  const { getRuleTarget, getRuleComparator, setRuleComparator, predicates } =
    useFiltersContext();

  const field = getRuleTarget({ index });
  const comparator = getRuleComparator({ index });
  const predicate = predicates.find((p) => p.field === field);
  const options = predicate?.def.comparators;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          <span>
            {options.find(
              (opt: ComparatorInstance) => opt.def.id === comparator
            )?.label || "Select an option"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        {options.map((option: ComparatorInstance) => {
          const isSelected = comparator === option.def.id;

          return (
            <DropdownMenuItem
              key={option.def.id}
              className={
                isSelected ? "bg-secondary text-secondary-foreground" : ""
              }
              onClick={() =>
                setRuleComparator({ index, comparator: option.def.id })
              }
            >
              <div className="w-4">{isSelected && <Check />}</div>
              {option.payload.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
