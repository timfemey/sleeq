import { removeFromCache } from "./cache.js";

export function schedule(url: string, time: number, log: boolean) {
  if (time > 1) {
    setTimeout(() => {
      removeFromCache(url);
      log ? console.log("Removed from Cache") : "";
    }, time);
  }
}
