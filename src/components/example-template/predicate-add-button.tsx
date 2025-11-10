import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { useFiltersContext } from "apgu-filters";

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
