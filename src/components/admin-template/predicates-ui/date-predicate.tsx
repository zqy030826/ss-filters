import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { DatePredicate, type PredicateCompDef } from "@/apgu-filters";


const DatePredicateInput: PredicateCompDef<typeof DatePredicate> = ({
  filterValue,
  onFilterValueChange
}) => {
  const [open, setOpen] = useState(false);

  return (
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
  );
};

export default DatePredicateInput;
