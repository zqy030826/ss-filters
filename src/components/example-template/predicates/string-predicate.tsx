import { Input } from "@/components/ui/input";
import { Predicate } from "apgu-filters";
import {
  ContainsCaseInsensitive,
  NotContainsCaseInsensitive,
  EndsWithCaseInsensitive,
  NotEndsWithCaseInsensitive,
  StartsWithCaseInsensitive,
  Equals,
  NotEquals
} from "../comparators";

export const StringPredicate = Predicate.create<string, string>()
  .id("string")
  .comparators(
    ContainsCaseInsensitive.build(),
    NotContainsCaseInsensitive.build(),
    EndsWithCaseInsensitive.build(),
    NotEndsWithCaseInsensitive.build(),
    StartsWithCaseInsensitive.build(),
    Equals.build(),
    NotEquals.build()
  )
  .defaultComparatorId("contains-case-insensitive")
  .defaultValue("")
  .render(({ filterValue, onFilterValueChange }) => {
    return (
      <Input
        className="h-8 w-24"
        value={filterValue}
        onChange={(e) => onFilterValueChange(e.target.value)}
        placeholder="Filter..."
      />
    );
  });

export default StringPredicate;
