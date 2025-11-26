import { Predicate } from "apgu-filters";
import { Equals, NotEquals } from "../comparators";

const BooleanPredicate = Predicate.create<boolean, boolean>()
  .id("boolean")
  .comparators(Equals.build(), NotEquals.build())
  .defaultComparatorId("equals")
  .defaultValue(true)
  .render(({ filterValue, onFilterValueChange }) => {
    /**
     * TODO
     * 
     * Implement a proper boolean selector UI component here.
     * 
     * filterValue is a boolean (true/false)
     * onFilterValueChange is a function to update the filter value called as either:
     * - onFilterValueChange(true)
     * - onFilterValueChange(prev => !prev) where prev is the previous boolean value
     * 
     * Possible implemntations:
     * - via button toggle
     * - via dropdown with options "True" and "False"
     * - via checkbox
     * 
     * Look for sutable Shadcn components
     * 
     * Story to test the component: 
     * src/stories/admin-template/predicates/boolean-predicate.stories.tsx
     */

    // YOUR PREVIOUS IMPLEMENTATION BELOW
    /*
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
    */
    return null;
  });

export default BooleanPredicate;
