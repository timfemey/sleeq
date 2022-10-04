import { scan } from "./core/scan.js";
import { visible } from "./core/visible.js";
import { Entry } from "./interfaces";
import { purgeCache } from "./utils/cache.js";

function sleeq(opts: Entry) {
  switch (opts.mode) {
    case "scan":
      return scan(opts.log, opts.cacheTime, opts.purgeCacheOnStartup);

    case "visible":
      return visible(opts.log, opts.cacheTime, opts.purgeCacheOnStartup);

    default:
      throw new Error("Invalid Mode Received");
  }
}

export { sleeq, purgeCache };
