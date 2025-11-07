import { X } from "lucide-react";
import { Button } from "../ui/button";
import { useFiltersContext } from "@/apgu-filters";

interface PredicateDeleteButtonProps {
  index: number;
}

export const PredicateDeleteButton = ({ index }: PredicateDeleteButtonProps) => {
  const { removeRule } = useFiltersContext();

  return (
    <Button
      size="icon-sm"
      variant="outline"
      onClick={() => removeRule({ index })}
      className="rounded-full"
    >
      <X />
    </Button>
  );
};
