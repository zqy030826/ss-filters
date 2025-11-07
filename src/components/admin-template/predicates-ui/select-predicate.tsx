import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { SelectPredicate, type PredicateCompDef } from "@/apgu-filters";

const SelectPredicateInput: PredicateCompDef<typeof SelectPredicate> = ({
  filterValue,
  onFilterValueChange,
  options
}) => {
  const selectedValues = filterValue || [];
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
        <SelectValue
          placeholder="Select..."
        >
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
};

export default SelectPredicateInput;
