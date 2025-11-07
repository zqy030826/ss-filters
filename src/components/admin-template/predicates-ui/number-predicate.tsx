import { Input } from "@/components/ui/input";
import { NumberPredicate, type PredicateCompDef } from "@/apgu-filters";

const NumberPredicateInput: PredicateCompDef<typeof NumberPredicate> = ({
  filterValue,
  onFilterValueChange
}) => {
  return (
    <Input
      className="h-8 w-24"
      type="number"
      value={filterValue}
      onChange={(e) => onFilterValueChange(Number(e.target.value))}
      placeholder="0"
    />
  );
};

export default NumberPredicateInput;
