import { schedule } from "./schedule.js";

export async function addToCache(
  urls: string[],
  log: boolean,
  cacheTime: number
) {
  const cache = await caches.open(window.origin);
  for (let index = 0, n = urls.length; index < n; index++) {
    const urlToCache = urls[index];
    cache
      .add(urlToCache)
      .then(() => {
        schedule(urlToCache, cacheTime, log);
        log ? console.log(`Cached ${urlToCache}`) : "";
      })
      .catch((err) => {
        console.error(`Failed to Cache  ${urlToCache}\n Reason: ${err}`);
      });
  }
}

export async function removeFromCache(url: string | Request) {
  const cache = await caches.open(window.origin);
  cache.delete(url, { ignoreMethod: false, ignoreSearch: false });
}

export async function checkIfInCache(url: string) {
  const cache = await caches.open(window.origin);
  let check = await cache.match(url, {
    ignoreMethod: false,
    ignoreSearch: false,
    ignoreVary: false,
  });

  if (check == undefined) {
    return false;
  } else {
    return true;
  }
}

export async function getFromCache(url: string) {
  const cache = await caches.open(window.origin);
  let check = await cache.match(url, {
    ignoreMethod: false,
    ignoreSearch: false,
  });
  return check;
}

export async function purgeCache(loggerOn: boolean) {
  const cache = await caches.open(window.origin);
  const keys = await cache.keys();
  await Promise.all(keys.map((key) => removeFromCache(key)));
  loggerOn ? console.log("Cache has been Purged") : "";
}
