export function supportIntersection() {
  if ("IntersectionObserver" in window == false) {
    throw new Error(
      "This Environment does not have the Browser Intersection Observer API"
    );
  }
}

export function supportCacheStorage() {
  if ("caches" in self == false) {
    throw new Error("This Environment Does not have Browser Cachestorage API ");
  }
}
