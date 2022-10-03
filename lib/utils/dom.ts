export function getLinks() {
  //Code Inspire From Fireship Flamethrower-router
  return Array.from(document.links).filter(
    async (node) =>
      node.href.includes(document.location.origin) && // on origin url
      !node.href.includes("#") && // not an id anchor
      node.href !== (document.location.href || document.location.href + "/") // not current page
  );
}
