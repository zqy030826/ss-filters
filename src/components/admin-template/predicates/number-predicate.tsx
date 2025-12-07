import { Input } from "@/components/ui/input";
import { Predicate } from "apgu-filters";
import {
    Equals,
    GreaterThan,
    GreaterThanOrEqual,
    LessThan,
    LessThanOrEqual,
    NotEquals
} from "../comparators";

export const NumberPredicate = Predicate.create<number, number>()
  .id("number")
  .comparators(
    Equals.build(),
    NotEquals.build(),
    GreaterThan.build(),
    GreaterThanOrEqual.build(),
    LessThan.build(),
    LessThanOrEqual.build()
  )
  .defaultComparatorId("equals")
  .defaultValue(0)
  .render(({ filterValue, onFilterValueChange }) => {
    return (
      <Input
        className="h-8 w-24"
        type="number"
        value={filterValue}
        onChange={(e) => onFilterValueChange(Number(e.target.value))}
        placeholder="0"
      />
    );
  });

export default NumberPredicate;
