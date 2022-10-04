import { addToCache, checkIfInCache, purgeCache } from "../utils/cache.js";
import { getLinks } from "../utils/dom.js";

async function scan(
  loggerOn: boolean,
  cacheTime: number,
  purgeCacheOnStartup: boolean
) {
  purgeCacheOnStartup ? await purgeCache(loggerOn) : "";
  loggerOn ? console.log("Scanning Current Page DOM for Links") : "";

  for (let index = 0, array = getLinks(); index < array.length; index++) {
    const element = String(array[index]);
    if (await checkIfInCache(element)) {
      loggerOn ? console.log(`${element} already in Cache`) : "";
    } else {
      addToCache([element], loggerOn, cacheTime);
    }
  }
}
export { scan };
