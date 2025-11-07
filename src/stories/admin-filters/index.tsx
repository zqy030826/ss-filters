import React from "react";

import { useFiltersContext } from "@/apgu-filters";
import { FiltersRoot } from "@/components/admin-template/filters-root";
import { PredicateRoot } from "@/components/admin-template/predicate-root";
import { PredicateUpdateButton } from "@/components/admin-template/predicate-update-button";
import { PredicateComparatorSelect } from "@/components/admin-template/predicate-comparator-select";
import { PredicateDeleteButton } from "@/components/admin-template/predicate-delete-button";
import { PredicateAddButton } from "@/components/admin-template/predicate-add-button";
import { renderPredicate } from "../../components/admin-template/predicates-ui";

export const AdminFilters = () => {
  const { filterExpression, predicates, setRuleValue } = useFiltersContext();

  return (
    <FiltersRoot>
      {filterExpression.map((filterRule, predicateIndex) => {
        return (
          <PredicateRoot key={`predicate-${predicateIndex}`}>
            <PredicateUpdateButton index={predicateIndex} />

            <PredicateComparatorSelect index={predicateIndex} />
            {renderPredicate(
              predicates.find((p) => p.field === filterRule.field)?.def.id,

              {
                filterValue: filterRule.value,
                onFilterValueChange: (value) => {
                  setRuleValue({
                    index: predicateIndex,
                    value
                  });
                },
                ...predicates.find((p) => p.field === filterRule.field)?.payload
              }
            )}
            <PredicateDeleteButton index={predicateIndex} />
          </PredicateRoot>
        );
      })}

      <PredicateAddButton />
    </FiltersRoot>
  );
};
