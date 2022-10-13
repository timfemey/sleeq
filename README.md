# Sleeq

A highly performant library for prefetching and caching documents with a low memory overhead.
Sleeq prefetches and caches documents when link is within user visbility
or by scanning entire current page for links.

Sleeq reduces load time and results in better navigating and user experience for users.

Once cached switching between pages/documents is super quick, the HTTP request is performed only once and Sleeq ensures to not impact performance.

Best fit for Client Side Rendered Web Applications.

## Features

- Low Memory Consumption
- Fast
- Lightweight

## Installation

```bash
  pnpm install sleeq
```

## Usage/Examples

The example below tells sleeq to cache links that are visible
to user currently and each link tag with prefetch i.e. <link rel='prefetch'>
removal from DOM in 25s.

```javascript
import { sleeq } from "sleeq";

sleeq({
  mode: "visible",
  log: true,
  cacheTime: 25000,
});
```

## Settings

- mode:`"scan" or "visible"` - **scan** mode scans current page DOM, gets All Links,prefetches and caches it while **visible** gets link that are visible to user, prefetches it and caches it

- log:`boolean` - Log current processes happening in sleeq, Suited for use in Development Mode.

- cacheTime:`number` - How long prefetch link in head tag should stay in DOM. This helps
  in performance whereby a site prefetches 100+ unique documents which can cause too many prefetch tags in DOM. Having too many DOM elements can impact performance
