import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { DateRangePredicate, type PredicateCompDef } from "@/apgu-filters";

const DateRangePredicateInput: PredicateCompDef<
  typeof DateRangePredicate
> = ({ filterValue, onFilterValueChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="justify-start">
          {filterValue.min && filterValue.max
            ? `${filterValue.min.toLocaleDateString()} - ${filterValue.max.toLocaleDateString()}`
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
              selected={filterValue.min}
              captionLayout="dropdown"
              onSelect={(date) => {
                if (date) {
                  onFilterValueChange({ ...filterValue, min: date });
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
              selected={filterValue.max}
              captionLayout="dropdown"
              onSelect={(date) => {
                if (date) {
                  onFilterValueChange({ ...filterValue, max: date });
                  setOpen(false);
                }
              }}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DateRangePredicateInput;
