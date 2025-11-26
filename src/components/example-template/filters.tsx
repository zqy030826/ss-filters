import { useFiltersContext } from "apgu-filters";
import { FiltersRoot } from "@/components/example-template/filters-root";
import { PredicateRoot } from "@/components/example-template/predicate-root";
import { PredicateUpdateButton } from "@/components/example-template/predicate-update-button";
import { PredicateComparatorSelect } from "@/components/example-template/predicate-comparator-select";
import { PredicateDeleteButton } from "@/components/example-template/predicate-delete-button";
import { PredicateAddButton } from "@/components/example-template/predicate-add-button";

export const ExampleFilters = () => {
  const { filterExpression, setRuleValue, getPredicateByRule } =
    useFiltersContext();

  return (
    <FiltersRoot>
      {filterExpression.map((filterRule, predicateIndex) => {
        return (
          <PredicateRoot key={`predicate-${predicateIndex}`}>
            <PredicateUpdateButton index={predicateIndex} />

            <PredicateComparatorSelect index={predicateIndex} />
            {getPredicateByRule(filterRule)?.renderInput({
              filterValue: filterRule.value,
              onFilterValueChange: (value) => {
                setRuleValue(filterRule, value);
              },
            })}
            <PredicateDeleteButton index={predicateIndex} />
          </PredicateRoot>
        );
      })}

      <PredicateAddButton />
    </FiltersRoot>
  );
};
