/* Use it instead of .includes method for IE support */
export function arrayIncludes<T>(array: T[] | readonly T[], itemOrItems: T | T[]) {
  return Array.isArray(itemOrItems)
    ? itemOrItems.every((item) => array.indexOf(item) !== -1)
    : array.indexOf(itemOrItems) !== -1;
}
