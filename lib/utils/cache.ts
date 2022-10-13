import { addPrefetchLinktoDOM, removePrefetchLinkfromDOM } from "./dom.js";
import { schedule } from "./schedule.js";
const store: Set<String> = new Set();
export async function addToCache(
  urls: string[],
  log: boolean,
  cacheTime: number
) {
  for (let index = 0, n = urls.length; index < n; index++) {
    const urlToCache = urls[index];
    addPrefetchLinktoDOM(urlToCache, log);
    schedule(urlToCache, cacheTime, log, store);
    store.add(urlToCache);
    log && console.log(`Cached ${urlToCache}`);
  }
}

export function removeFromCache(url: string) {
  store.delete(url);
  removePrefetchLinkfromDOM(url);
}

export function checkIfInCache(url: string) {
  let check = store.has(url);
  return check;
}
