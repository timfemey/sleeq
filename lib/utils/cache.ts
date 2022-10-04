import { schedule } from "./schedule.js";
const store: Set<String> = new Set();
export async function addToCache(
  urls: string[],
  log: boolean,
  cacheTime: number
) {
  const cache = await caches.open(window.origin);
  for (let index = 0, n = urls.length; index < n; index++) {
    const urlToCache = urls[index];
    await cache.add(urlToCache);
    schedule(urlToCache, cacheTime, log, store);
    log ? console.log(`Cached ${urlToCache}`) : "";
  }
}

export async function removeFromCache(url: string) {
  const cache = await caches.open(window.origin);
  store.delete(url);
  cache.delete(url, { ignoreMethod: false, ignoreSearch: false });
}

export function checkIfInCache(url: string) {
  let check = store.has(url);
  return check;
}

export async function purgeCache(loggerOn: boolean) {
  const cache = await caches.open(window.origin);
  const keys = await cache.keys();
  await Promise.all(keys.map((key) => removeFromCache(key.url)));
  loggerOn ? console.log("Cache has been Purged") : "";
}
