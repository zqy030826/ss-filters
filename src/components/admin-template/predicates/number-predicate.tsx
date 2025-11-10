import { Predicate } from "apgu-filters";
import {
  Equals,
  NotEquals,
  GreaterThan,
  GreaterThanOrEqual,
  LessThan,
  LessThanOrEqual
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
    /**
     * TODO
     *
     * Implement a proper number input UI component here.
     *
     * filterValue is a number
     * onFilterValueChange is a function to update the filter value called as:
     * - onFilterValueChange(42)
     * - onFilterValueChange(prev => prev + 1) where prev is the previous number value
     *
     * Possible implementations:
     * - via number input field with type="number"
     * - with step controls (+/- buttons)
     * - with min/max validation
     *
     * Look for suitable Shadcn components (Input component with type="number")
     *
     * Story to test the component:
     * src/stories/admin-filters/predicates/number-predicate.stories.tsx
     */
    return null;
  });

export default NumberPredicate;
