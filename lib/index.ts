import { scan } from "./core/scan.js";
import { visible } from "./core/visible.js";
import { Entry } from "./interfaces";

function sleeq(opts: Entry) {
  switch (opts.mode) {
    case "scan":
      return scan(opts.log, opts.cacheTime);

    case "visible":
      return visible(opts.log, opts.cacheTime);

    default:
      throw new Error("Invalid Mode Received");
  }
}

export { sleeq };
