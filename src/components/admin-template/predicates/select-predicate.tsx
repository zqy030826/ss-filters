import { Predicate } from "apgu-filters";
import { Includes, NotIncludes } from "../comparators";

export const SelectPredicate = Predicate.create<
  string,
  string[],
  {
    options: { value: string; label: string }[];
  }
>()
  .id("select")
  .comparators(Includes.build(), NotIncludes.build())
  .defaultComparatorId("includes")
  .defaultValue([])
  .render(({ filterValue, onFilterValueChange, meta }) => {
    /**
     * TODO
     *
     * Implement a proper single-select dropdown UI component here.
     *
     * filterValue is an array of strings (string[]) - typically containing 0 or 1 item for single select
     * onFilterValueChange is a function to update the filter value called as:
     * - onFilterValueChange(["admin"]) - to select "admin"
     * - onFilterValueChange([]) - to clear selection
     *
     * meta.options is an array of { value: string, label: string } objects
     * - Use these to populate the dropdown options
     * - Display the label to the user, but use value for filterValue
     *
     * Possible implementations:
     * - via dropdown/select component
     * - with search/filter functionality
     * - showing the selected option label
     *
     * Look for suitable Shadcn components (Select component)
     *
     * A handleChange helper function is provided above for reference.
     *
     * Story to test the component:
     * src/stories/admin-filters/predicates/select-predicate.stories.tsx
     */
    const { options } = meta;

    const handleChange = (value: string) => {
      if (filterValue.includes(value)) {
        onFilterValueChange(filterValue.filter((v) => v !== value));
      } else {
        onFilterValueChange([value]);
      }
    };

    return null;
  });

export default SelectPredicate;
