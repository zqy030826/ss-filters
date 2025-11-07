import { Input } from "@/components/ui/input";
import { NumberRangePredicate, type PredicateCompDef } from "@/apgu-filters";

const NumberRangePredicateInput: PredicateCompDef<
  typeof NumberRangePredicate
> = ({ filterValue, onFilterValueChange }) => {
  return (
    <div className="flex items-center gap-2">
      <Input
        className="h-8 w-20"
        type="number"
        value={filterValue.min}
        onChange={(e) =>
          onFilterValueChange({ ...filterValue, min: Number(e.target.value) })
        }
        placeholder="Min"
      />
      <span className="text-sm text-muted-foreground">-</span>
      <Input
        className="h-8 w-20"
        type="number"
        value={filterValue.max}
        onChange={(e) =>
          onFilterValueChange({ ...filterValue, max: Number(e.target.value) })
        }
        placeholder="Max"
      />
    </div>
  );
};

export default NumberRangePredicateInput;
