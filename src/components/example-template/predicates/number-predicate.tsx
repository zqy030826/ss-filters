import { Input } from "@/components/ui/input";
import { Predicate } from "apgu-filters";
import {
  Equals,
  NotEquals,
  GreaterThan,
  GreaterThanOrEqual,
  LessThan,
  LessThanOrEqual
} from "../comparators";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";


export const NumberPredicate = Predicate.create<number, number>()
  .id("number")
  .comparators(
    Equals.build(),
    NotEquals.build(),
    GreaterThan.build(),
    GreaterThanOrEqual.build(),
    LessThan.build(),
    LessThanOrEqual.build()
  )
  .defaultComparatorId("equals")
  .defaultValue(0)
  .render(({ filterValue, onFilterValueChange }) => {
    return (
      <NumberInput
        value={filterValue}
        onValueChange={onFilterValueChange}
        placeholder="0"
      />
    );
  });

export default NumberPredicate;

interface NumberInputProps {
  value: number;
  onValueChange: (newValue: number) => void;
  placeholder?: string;
  prefix?: React.ComponentType | string;
  postfix?: React.ComponentType | string;
}

const NumberInput = ({
  value,
  onValueChange,
  placeholder,
  prefix: Prefix,
  postfix: Postfix
}: NumberInputProps) => {
  const handleIncrement = () => {
    onValueChange(value + 1);
  };

  const handleDecrement = () => {
    onValueChange(value - 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue === "") {
      onValueChange(0);
    } else {
      const parsed = parseFloat(newValue);
      if (!isNaN(parsed)) {
        onValueChange(parsed);
      }
    }
  };

  return (
    <div className="flex items-center">
      <InputGroup className="rounded-none h-8">
        {Prefix && (
          <InputGroupAddon>
            {typeof Prefix === "string" ? (
              <InputGroupText>{Prefix}</InputGroupText>
            ) : (
              <Prefix />
            )}
          </InputGroupAddon>
        )}
        <InputGroupInput
          className="w-12"
          type="number"
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
        {
          Postfix && (
            <InputGroupAddon align="inline-end">
              {typeof Postfix === "string" ? (
                <InputGroupText>{Postfix}</InputGroupText>
              ) : (
                <Postfix />
              )}
            </InputGroupAddon>
          )
        }
      </InputGroup >

      <div className="flex items-center flex-col">
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          className="size-4 rounded-none"
          onClick={handleIncrement}
          tabIndex={-1}
        >
          <Plus className="size-3" />
        </Button>
        <Button
          size="icon-sm"
          type="button"
          className="size-4 rounded-none"
          variant="outline"
          onClick={handleDecrement}
          tabIndex={-1}
        >
          <Minus className="size-3" />
        </Button>
      </div>
    </div >
  );
};
