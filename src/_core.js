export function isModLoaded(id) {
  let { modloader, versions } = window;
  if (modloader != null && modloader.loadedMods != null) {
    return modloader.loadedMods.has(id);
  } else if (versions != null) {
    return Object.prototype.hasOwnProperty.call(versions, id);
  } else {
    return false;
  }
}
