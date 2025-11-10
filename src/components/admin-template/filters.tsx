import { useFiltersContext } from "apgu-filters";
import { FiltersRoot } from "@/components/admin-template/filters-root";
import { PredicateRoot } from "@/components/admin-template/predicate-root";
import { PredicateUpdateButton } from "@/components/admin-template/predicate-update-button";
import { PredicateComparatorSelect } from "@/components/admin-template/predicate-comparator-select";
import { PredicateDeleteButton } from "@/components/admin-template/predicate-delete-button";
import { PredicateAddButton } from "@/components/admin-template/predicate-add-button";

export const AdminFilters = () => {
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
              }
            })}
            <PredicateDeleteButton index={predicateIndex} />
          </PredicateRoot>
        );
      })}

      <PredicateAddButton />
    </FiltersRoot>
  );
};
