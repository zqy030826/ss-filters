import { Input } from "@/components/ui/input";
import { StringPredicate, type PredicateCompDef } from "@/apgu-filters";

const StringPredicateInput: PredicateCompDef<typeof StringPredicate> = ({
  filterValue,
  onFilterValueChange
}) => {
  return (
    <Input
      className="h-8 w-24"
      value={filterValue}
      onChange={(e) => onFilterValueChange(e.target.value)}
      placeholder="Filter..."
    />
  );
};

export default StringPredicateInput;
