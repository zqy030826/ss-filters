import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
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
    const { options } = meta;

    const handleChange = (value: string) => {
      if (filterValue.includes(value)) {
        onFilterValueChange(filterValue.filter((v) => v !== value));
      } else {
        onFilterValueChange([value]);
      }
    };

    const selectedValues = filterValue;
    const selectedLabels = selectedValues
      .map((val) => options.find((opt) => opt.value === val)?.label)
      .filter(Boolean);

    return (
      <Select
        value={selectedValues[0] || ""}
        onValueChange={(value) => {
          if (selectedValues.includes(value)) {
            onFilterValueChange(selectedValues.filter((v) => v !== value));
          } else {
            onFilterValueChange([value]);
          }
        }}
      >
        <SelectTrigger size="sm" className="w-32">
          <SelectValue placeholder="Select...">
            {selectedLabels.length > 0 ? selectedLabels[0] : "Select..."}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  });

export default SelectPredicate;
