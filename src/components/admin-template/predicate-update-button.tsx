import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { useFiltersContext } from "@/apgu-filters";

interface PredicateUpdateButtonProps {
  index: number;
}

export const PredicateUpdateButton = ({
  index
}: PredicateUpdateButtonProps) => {
  const { getRuleTarget, setRuleTarget, predicates } = useFiltersContext();

  const value = getRuleTarget({ index });

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
            {predicates.find((opt) => opt.field === value)?.payload.label ||
              "Select an option"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)">
        {predicates.map((predicate) => {
          return (
            <DropdownMenuItem
              key={predicate.field}
              onClick={() => setRuleTarget({ index, field: predicate.field })}
            >
              {predicate.payload.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
