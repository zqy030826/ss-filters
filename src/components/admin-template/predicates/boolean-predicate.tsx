import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Predicate } from "apgu-filters";
import { Equals, NotEquals } from "../comparators";

const BooleanPredicate = Predicate.create<boolean, boolean>()
  .id("boolean")
  .comparators(Equals.build(), NotEquals.build())
  .defaultComparatorId("equals")
  .defaultValue(true)
  .render(({ filterValue, onFilterValueChange }) => {
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
  });

export default BooleanPredicate;
