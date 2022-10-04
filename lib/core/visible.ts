import { addToCache, checkIfInCache, purgeCache } from "../utils/cache.js";
import { getLinks } from "../utils/dom.js";
import { supportCacheStorage, supportIntersection } from "../utils/support.js";

async function visible(
  loggerOn: boolean,
  cacheTime: number,
  purgeCacheOnStartup: boolean
) {
  purgeCacheOnStartup ? await purgeCache(loggerOn) : "";
  loggerOn ? console.log("Visible Mode Cache Startup Successful") : "";
  supportIntersection();
  const io = new IntersectionObserver(
    async (entries, observer) => {
      loggerOn ? console.log("Observer in Progress") : "";
      for (let index = 0; index < entries.length; index++) {
        const entry = entries[index];
        const url = entry.target.getAttribute("href");
        if (url == null || url == "#") {
          return;
        }
        supportCacheStorage();
        if (await checkIfInCache(url)) {
          observer.unobserve(entry.target);
          loggerOn
            ? console.log(`${url} already in Cache, Status:Unobserved`)
            : "";
          return;
        }
        if (entry.isIntersecting) {
          addToCache([url], loggerOn, cacheTime);
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 1.0, root: null, rootMargin: "0px" }
  );

  const target = getLinks();
  target.forEach((node) => io.observe(node));
}

export { visible };
