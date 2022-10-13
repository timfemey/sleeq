export function getLinks() {
  //Code Inspire From Fireship Flamethrower-router
  return Array.from(document.links).filter(
    async (node) =>
      node.href.includes(document.location.origin) && // on origin url
      !node.href.includes("#") && // not an id anchor
      node.href !== (document.location.href || document.location.href + "/") // not current page
  );
}

export function addPrefetchLinktoDOM(urlToCache: string, log: boolean) {
  const linkEl = document.createElement("link");
  linkEl.rel = "prefetch";
  linkEl.href = urlToCache;
  linkEl.as = "document";

  linkEl.onload = () => log && console.log("🌩️ Prefetched", urlToCache);
  linkEl.onerror = (err) =>
    log && console.log("🤕 can't prefetch", urlToCache, err);

  document.head.appendChild(linkEl);
}

export function removePrefetchLinkfromDOM(url: string) {
  const linkEl = Array.from(document.head.getElementsByTagName("link")).filter(
    (elem) => elem.href.includes(url)
  );
  linkEl[0].remove();
}
