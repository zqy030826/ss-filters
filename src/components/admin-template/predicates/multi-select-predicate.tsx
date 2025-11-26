import { Predicate } from "apgu-filters";
import {
  IncludesAll,
  IncludesAny,
  NotIncludesAll,
  NotIncludesAny
} from "../comparators";

export const MultiSelectPredicate = Predicate.create<
  string[],
  string[],
  {
    options: { value: string; label: string }[];
  }
>()
  .id("multi-select")
  .comparators(
    IncludesAny.build(),
    IncludesAll.build(),
    NotIncludesAll.build(),
    NotIncludesAny.build()
  )
  .defaultComparatorId("includes-any")
  .defaultValue([])

  .render(({ filterValue, onFilterValueChange, meta }) => {
    /**
     * TODO
     *
     * Implement a proper multi-select dropdown UI component here.
     *
     * filterValue is an array of strings (string[]) - can contain multiple selected items
     * onFilterValueChange is a function to update the filter value called as:
     * - onFilterValueChange(["projectA", "projectB"]) - to select multiple
     * - onFilterValueChange([]) - to clear all selections
     *
     * meta.options is an array of { value: string, label: string } objects
     * - Use these to populate the dropdown options
     * - Display the label to the user, but use value for filterValue
     *
     * Possible implementations:
     * - via multi-select dropdown with checkboxes
     * - showing selected count badge
     * - with "Select All" / "Clear All" options
     *
     * Look for suitable Shadcn components (Checkbox + Popover or Command components)
     *
     * Helper functions provided above:
     * - isSelected(value) - checks if value is in filterValue
     * - handleToggle(value) - toggles a value in/out of filterValue
     *
     * Story to test the component:
     * src/stories/admin-filters/predicates/multi-select-predicate.stories.tsx
     */
    const { options } = meta;

    const isSelected = (value: string) => filterValue.includes(value);

    const handleToggle = (value: string) => {
      if (isSelected(value)) {
        onFilterValueChange(filterValue.filter((v) => v !== value));
      } else {
        onFilterValueChange([...filterValue, value]);
      }
    };

    // YOUR PREVIOUS IMPLEMENTATION BELOW
    /*
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline" className="h-8">
          {selectedCount > 0 ? `${selectedCount} selected` : "Select..."}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {options.map((option) => {
          const isSelected = filterValue.includes(option.value);

          return (
            <DropdownMenuItem
              key={option.value}
              className={
                isSelected ? "bg-secondary text-secondary-foreground" : ""
              }
              onClick={(e) => {
                e.preventDefault();
                if (isSelected) {
                  onFilterValueChange(
                    filterValue.filter((val) => val !== option.value)
                  );
                } else {
                  onFilterValueChange([...filterValue, option.value]);
                }
              }}
            >
              <div className="w-4 mr-2">
                {isSelected && <Check className="h-4 w-4" />}
              </div>
              {option.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
    */
    return null;
  });

export default MultiSelectPredicate;
