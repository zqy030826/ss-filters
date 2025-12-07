import { ButtonGroup } from "@/components/ui/button-group";

interface PredicateRootProps {
  children: React.ReactNode;
}

export const PredicateRoot = ({ children }: PredicateRootProps) => {
  return <ButtonGroup>{children}</ButtonGroup>;
};
