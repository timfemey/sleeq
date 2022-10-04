
# Sleeq

A highly performant library for prefetching and caching links with a low memory overhead.
Sleeq prefetches and caches data when link is within user visbility 
or by scanning entire current page for links.

Sleeq reduces load time and results in better navigating and user experience for users. 

Once cached switching between links is super quick, the HTTP request is performed only once and Sleeq ensures to prevent multiple
HTTP requests and unnecessary caching.

Best fit for Client Side Rendered Web Applications.

## Features

- Low Memory Consumption
- Fast
- Flexible
- Lightweight


## Installation


```bash
  pnpm install sleeq 
```


    
## Usage/Examples

The example below tells sleeq to cache links that are visible
to user currently and any other links with a expiration time of 25s
and should delete all previous cache on last user session / visit. 

```javascript
import {sleeq} from 'sleeq'

sleeq({
        mode: "visible",
        log: true,
        cacheTime: 25000, 
        purgeCacheOnStartup: true,
 });

```

## Settings

* mode:`"scan" or "visible"` - **scan** mode scans current page DOM, gets All Links,prefetches and caches it while **visible** gets link that are visible to user, prefetches it and caches it   

* log:`boolean` - Log current processes happening in sleeq, Suited for use in Development Mode. 

* cacheTime:`number` - How long data fetched from Link should stay in cache

* purgeCacheOnStartup:`boolean` - If Previous Cache on user last session should be deleted. Useful in cases were user exited website before cache could be cleared due to Longer CacheTime and short user session       