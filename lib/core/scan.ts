import { addToCache, checkIfInCache } from "../utils/cache.js";
import { getLinks } from "../utils/dom.js";

async function scan(loggerOn: boolean, cacheTime: number) {
  loggerOn ? console.log("Scanning Current Page DOM for Links") : "";

  for (let index = 0, array = getLinks(); index < array.length; index++) {
    const element = String(array[index]);
    if (checkIfInCache(element)) {
      loggerOn ? console.log(`${element} already in Cache`) : "";
    } else {
      await addToCache([element], loggerOn, cacheTime);
    }
  }
}
export { scan };
