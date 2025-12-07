/**
 * FiltersRoot Component
 *
 * PURPOSE:
 * This is the top-level container component that wraps all filters.
 * It provides the overall layout structure for the entire filter system.
 *
 * PROPS:
 * - children: React.ReactNode - All the predicate filters and add button
 *
 * HOW IT'S USED:
 * In the AdminFilters component (filters.tsx), it's used like this:
 *
 * <FiltersRoot>
 *   <PredicateRoot>filter 1</PredicateRoot>
 *   <PredicateRoot>filter 2</PredicateRoot>
 *   <PredicateRoot>filter 3</PredicateRoot>
 *   <PredicateAddButton />
 * </FiltersRoot>
 *
 * All those components get passed as "children" to FiltersRoot.
 *
 * REACT CONCEPTS:
 *
 * 1. INLINE PROPS WITH TYPES:
 *    - ({ children }: { children: React.ReactNode })
 *    - This combines the function parameter with its type definition
 *    - Same as defining PredicateRootProps separately, but more concise
 *    - Use this for simple components with few props
 *
 * 2. WRAPPER/CONTAINER PATTERN:
 *    - This component doesn't have any logic, just layout
 *    - Its job is purely presentational
 *    - It defines how child components are arranged
 *
 * TODO:
 * Implement a container that arranges all filters vertically or horizontally.
 */

export const FiltersRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-xl border bg-background/60 p-4 shadow-sm items-stretch justify-between">
      {children}
    </div>
  );
};
