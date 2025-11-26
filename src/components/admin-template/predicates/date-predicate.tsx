import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Predicate } from "apgu-filters";
import {
  Equals,
  NotEquals,
  LessThan,
  GreaterThan,
  LessThanOrEqual,
  GreaterThanOrEqual
} from "../comparators";

export const DatePredicate = Predicate.create<
  Date,
  Date,
  {
    format: string;
  }
>()
  .id("date")
  .comparators(
    Equals.build(),
    NotEquals.build(),
    LessThan.build(),
    GreaterThan.build(),
    LessThanOrEqual.build(),
    GreaterThanOrEqual.build()
  )
  .defaultComparatorId("equals")
  .defaultValue(new Date())
  .meta({ format: "yyyy-MM-dd" })
  .render(({ filterValue, onFilterValueChange }) => {
    /**
     * TODO
     *
     * Implement a proper date picker UI component here.
     *
     * filterValue is a Date object
     * onFilterValueChange is a function to update the filter value called as:
     * - onFilterValueChange(new Date("2025-12-25"))
     * - onFilterValueChange(new Date())
     *
     * Possible implementations:
     * - via date picker with calendar popup
     * - via date input field
     * - with date formatting/display
     *
     * Look for suitable Shadcn components (Calendar + Popover components)
     * The imports at the top show what components are available.
     *
     * Story to test the component:
     * src/stories/admin-filters/predicates/date-predicate.stories.tsx
     */

    // YOUR PREVIOUS IMPLEMENTATION BELOW
    /*
     <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" id="date" size="sm">
          {filterValue ? filterValue.toLocaleDateString() : "Select date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={filterValue}
          captionLayout="dropdown"
          onSelect={(date) => {
            onFilterValueChange(date || new Date());
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
    */
    return null;
  });

export default DatePredicate;
