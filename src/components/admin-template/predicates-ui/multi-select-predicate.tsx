import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MultiSelectPredicate, type PredicateCompDef } from "@/apgu-filters";

const MultiSelectPredicateInput: PredicateCompDef<
  typeof MultiSelectPredicate
> = ({ filterValue, onFilterValueChange, options }) => {
  const selectedCount = filterValue.length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline" className="h-8">
          {selectedCount > 0 ? `${selectedCount} selected` : "Select..."}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {options.map((option) => {
          const isSelected = filterValue.includes(option.value);

          return (
            <DropdownMenuItem
              key={option.value}
              className={
                isSelected ? "bg-secondary text-secondary-foreground" : ""
              }
              onClick={(e) => {
                e.preventDefault();
                if (isSelected) {
                  onFilterValueChange(
                    filterValue.filter((val) => val !== option.value)
                  );
                } else {
                  onFilterValueChange([...filterValue, option.value]);
                }
              }}
            >
              <div className="w-4 mr-2">
                {isSelected && <Check className="h-4 w-4" />}
              </div>
              {option.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MultiSelectPredicateInput;
