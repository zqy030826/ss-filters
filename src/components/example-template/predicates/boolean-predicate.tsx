import { Predicate } from "apgu-filters";
import { Equals, NotEquals } from "../comparators";
import { Switch } from "@/components/ui/switch";

const BooleanPredicate = Predicate.create<boolean, boolean>()
  .id("boolean")
  .comparators(Equals.build(), NotEquals.build())
  .defaultComparatorId("equals")
  .defaultValue(true)
  .render(({ filterValue, onFilterValueChange }) => {
    return (
      <div className="size-8 border flex items-center justify-center px-6">
        <Switch
          checked={filterValue}
          onCheckedChange={(checked) =>
            onFilterValueChange(!!checked)
          }
        />
      </div>
    );
  });

export default BooleanPredicate;
