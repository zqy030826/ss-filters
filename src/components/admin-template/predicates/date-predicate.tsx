import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";
import { Predicate } from "apgu-filters";
import { useState } from "react";
import {
    Equals,
    GreaterThan,
    GreaterThanOrEqual,
    LessThan,
    LessThanOrEqual,
    NotEquals
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
    const [open, setOpen] = useState(false);
    
    let dateValue: Date;
    try {
      if (filterValue instanceof Date) {
        dateValue = filterValue;
      } else if (typeof filterValue === 'string' || typeof filterValue === 'number') {
        dateValue = new Date(filterValue);
      } else {
        dateValue = new Date();
      }
    } catch {
      dateValue = new Date();
    }

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" id="date" size="sm">
            {filterValue ? dateValue.toLocaleDateString() : "Select date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={dateValue}
            captionLayout="dropdown"
            onSelect={(date) => {
              onFilterValueChange(date || new Date());
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    );
  });

export default DatePredicate;
