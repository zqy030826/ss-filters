import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { BooleanPredicate, type PredicateCompDef } from "@/apgu-filters";

const BooleanPredicateInput: PredicateCompDef<typeof BooleanPredicate> = ({
  filterValue,
  onFilterValueChange
}) => {
  return (
    <Select
      value={filterValue.toString()}
      onValueChange={(val) => onFilterValueChange(val === "true")}
    >
      <SelectTrigger size="sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="true">True</SelectItem>
        <SelectItem value="false">False</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default BooleanPredicateInput;
