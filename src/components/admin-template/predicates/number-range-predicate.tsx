import { Predicate } from "apgu-filters";
import {
  InRangeExclusive,
  InRangeInclusive,
  NotInRangeInclusive
} from "../comparators";

export const NumberRangePredicate = Predicate.create<
  number,
  { min: number; max: number }
>()
  .id("number-range")
  .comparators(
    InRangeInclusive.build(),
    InRangeExclusive.build(),
    NotInRangeInclusive.build()
  )
  .defaultComparatorId("in-range-inclusive")
  .defaultValue({ min: 0, max: 100 })
  .render(({ filterValue, onFilterValueChange }) => {
    /**
     * TODO
     *
     * Implement a proper number range input UI component here.
     *
     * filterValue is an object { min: number, max: number }
     * onFilterValueChange is a function to update the filter value called as:
     * - onFilterValueChange({ min: 0, max: 100 })
     *
     * Possible implementations:
     * - via two number input fields (min and max)
     * - via slider/range component
     * - with validation to ensure min <= max
     *
     * Look for suitable Shadcn components (Input component with type="number")
     *
     * Helper functions provided below:
     * - onChange({ newMin, newMax }) - updates both min and max
     * - onMinChange(newMin) - updates only min value
     * - onMaxChange(newMax) - updates only max value
     *
     * Story to test the component:
     * src/stories/admin-filters/predicates/number-range-predicate.stories.tsx
     */
    const { min, max } = filterValue;

    const onChange = ({
      newMin,
      newMax
    }: {
      newMin: number;
      newMax: number;
    }) => {
      onFilterValueChange({ min: newMin, max: newMax });
    };

    const onMinChange = (newMin: number) => {
      onFilterValueChange({ min: newMin, max });
    };

    const onMaxChange = (newMax: number) => {
      onFilterValueChange({ min, max: newMax });
    };

    return null;
  });

export default NumberRangePredicate;
