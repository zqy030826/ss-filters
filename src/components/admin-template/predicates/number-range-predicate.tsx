import { Input } from "@/components/ui/input";
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

    return (
      <div className="flex items-center gap-2">
        <Input
          className="h-8 w-20"
          type="number"
          value={filterValue.min}
          onChange={(e) =>
            onFilterValueChange({ ...filterValue, min: Number(e.target.value) })
          }
          placeholder="Min"
        />
        <span className="text-sm text-muted-foreground">-</span>
        <Input
          className="h-8 w-20"
          type="number"
          value={filterValue.max}
          onChange={(e) =>
            onFilterValueChange({ ...filterValue, max: Number(e.target.value) })
          }
          placeholder="Max"
        />
      </div>
    );
  });

export default NumberRangePredicate;
