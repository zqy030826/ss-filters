import { Predicate } from "apgu-filters";
import {
  InRangeExclusive,
  InRangeInclusive,
  NotInRangeInclusive
} from "../comparators";

const DateRangePredicate = Predicate.create<
  Date,
  {
    min: Date;
    max: Date;
  }
>()
  .id("date-range")
  .comparators(
    InRangeInclusive.build(),
    InRangeExclusive.build(),
    NotInRangeInclusive.build()
  )
  .defaultComparatorId("in-range-inclusive")
  .defaultValue({
    min: new Date(),
    max: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
  })
  .render(({ filterValue, onFilterValueChange }) => {
    /**
     * TODO
     *
     * Implement a proper date range picker UI component here.
     *
     * filterValue is an object { min: Date, max: Date }
     * onFilterValueChange is a function to update the filter value called as:
     * - onFilterValueChange({ min: new Date("2025-01-01"), max: new Date("2025-12-31") })
     *
     * Possible implementations:
     * - via two date pickers (start date and end date)
     * - via calendar with range selection mode
     * - with validation to ensure min date <= max date
     * - showing date range in a readable format
     *
     * Look for suitable Shadcn components (Calendar + Popover components)
     * Tip: Check if Calendar component supports range selection mode.
     *
     * Helper functions provided below:
     * - onChange({ newMin, newMax }) - updates both min and max dates
     * - onMinChange(newMin) - updates only min date
     * - onMaxChange(newMax) - updates only max date
     *
     * Story to test the component:
     * src/stories/admin-filters/predicates/date-range-predicate.stories.tsx
     */
    const { min, max } = filterValue;

    const onChange = ({ newMin, newMax }: { newMin: Date; newMax: Date }) => {
      onFilterValueChange({ min: newMin, max: newMax });
    };

    const onMinChange = (newMin: Date) => {
      onFilterValueChange({ min: newMin, max });
    };

    const onMaxChange = (newMax: Date) => {
      onFilterValueChange({ min, max: newMax });
    };

    return null;
  });

export default DateRangePredicate;
