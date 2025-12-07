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
    const { min, max } = filterValue;
    const [open, setOpen] = useState(false);

    let minDate: Date;
    let maxDate: Date;
    
    try {
      if (min instanceof Date) {
        minDate = min;
      } else if (typeof min === 'string' || typeof min === 'number') {
        minDate = new Date(min);
      } else {
        minDate = new Date();
      }
      
      if (max instanceof Date) {
        maxDate = max;
      } else if (typeof max === 'string' || typeof max === 'number') {
        maxDate = new Date(max);
      } else {
        maxDate = new Date();
      }
    } catch {
      minDate = new Date();
      maxDate = new Date();
    }

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="justify-start">
            {min && max
              ? `${minDate.toLocaleDateString()} - ${maxDate.toLocaleDateString()}`
              : "Select date range"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex flex-col gap-2 p-3">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">
                Start Date
              </label>
              <Calendar
                mode="single"
                selected={minDate}
                captionLayout="dropdown"
                onSelect={(date) => {
                  if (date) {
                    onFilterValueChange({ min: date, max: maxDate });
                  }
                }}
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">
                End Date
              </label>
              <Calendar
                mode="single"
                selected={maxDate}
                captionLayout="dropdown"
                onSelect={(date) => {
                  if (date) {
                    onFilterValueChange({ min: minDate, max: date });
                    setOpen(false);
                  }
                }}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  });

export default DateRangePredicate;
