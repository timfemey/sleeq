import { removeFromCache } from "./cache.js";

export function schedule(url: string, time: number) {
  setTimeout(
    () => {
      removeFromCache(url);
    },
    0 > time ? 1 : time
  );
}
