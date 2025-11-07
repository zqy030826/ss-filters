import type { FunctionComponent } from "react";

interface PredicateModule {
  default: FunctionComponent<Record<string, unknown>>;
}

const predicateModules = import.meta.glob("./*-predicate.tsx", { eager: true });

export const predicateMap: Record<
  string,
  FunctionComponent<Record<string, unknown>>
> = Object.entries(predicateModules).reduce<
  Record<string, FunctionComponent<Record<string, unknown>>>
>((acc, [path, mod]) => {
  const id = path.split("/").pop()?.replace("-predicate.tsx", "") || "";
  acc[id] = (mod as PredicateModule).default;
  return acc;
}, {});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderPredicate = (id: string, props: any) => {
  const PredicateComponent = predicateMap[id];
  if (!PredicateComponent) {
    return <div>Predicate "{id}" not found.</div>;
  }
  return <PredicateComponent {...props} />;
};
