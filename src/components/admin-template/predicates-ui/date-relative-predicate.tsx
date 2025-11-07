import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { DateRelativePredicate, type PredicateCompDef } from "@/apgu-filters";
import { useState } from "react";

const DateRelativePredicateInput: PredicateCompDef<
  typeof DateRelativePredicate
> = ({ filterValue, onFilterValueChange }) => {
  const [unit, setUnit] = useState<"days" | "weeks" | "months" | "years">(
    "days"
  );
  const [amount, setAmount] = useState(1);

  const calculateDate = (amount: number, unit: string) => {
    const date = new Date();
    switch (unit) {
      case "days":
        date.setDate(date.getDate() + amount);
        break;
      case "weeks":
        date.setDate(date.getDate() + amount * 7);
        break;
      case "months":
        date.setMonth(date.getMonth() + amount);
        break;
      case "years":
        date.setFullYear(date.getFullYear() + amount);
        break;
    }
    return date;
  };

  const handleAmountChange = (newAmount: number) => {
    setAmount(newAmount);
    onFilterValueChange(calculateDate(newAmount, unit));
  };

  const handleUnitChange = (newUnit: "days" | "weeks" | "months" | "years") => {
    setUnit(newUnit);
    onFilterValueChange(calculateDate(amount, newUnit));
  };

  return (
    <div className="flex items-center gap-2">
      <Input
        className="h-8 w-16"
        type="number"
        value={amount}
        onChange={(e) => handleAmountChange(Number(e.target.value))}
        placeholder="1"
        min="0"
      />
      <Select value={unit} onValueChange={handleUnitChange}>
        <SelectTrigger size="sm" className="w-24">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="days">Days</SelectItem>
          <SelectItem value="weeks">Weeks</SelectItem>
          <SelectItem value="months">Months</SelectItem>
          <SelectItem value="years">Years</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DateRelativePredicateInput;
