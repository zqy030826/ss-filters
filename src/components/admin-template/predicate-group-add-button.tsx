import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useFiltersContext } from "@/apgu-filters";

export const PredicateGroupAddButton = () => {
  const { predicates, addRule } = useFiltersContext();

  const handleAdd = () => {
    // Add the first predicate as default
    if (predicates.length > 0) {
      addRule({ field: predicates[0].field });
    }
  };

  return (
    <Button
      size="icon-sm"
      variant="outline"
      onClick={handleAdd}
      className="rounded-full"
    >
      <Plus />
    </Button>
  );
};
