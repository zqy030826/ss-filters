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
    /**
     * TODO
     *
     * Implement a proper string input UI component here.
     *
     * filterValue is a string
     * onFilterValueChange is a function to update the filter value called as:
     * - onFilterValueChange("new text value")
     * - onFilterValueChange(prev => prev + "more text") where prev is the previous string value
     *
     * Possible implementations:
     * - via text input field
     * - via textarea for longer strings
     * - with debouncing for better performance
     *
     * Look for suitable Shadcn components (Input component)
     *
     * Story to test the component:
     * src/stories/admin-filters/predicates/string-predicate.stories.tsx
     */
    return null;
  });

export default StringPredicate;
