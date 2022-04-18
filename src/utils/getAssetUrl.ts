export const getAssetUrl = (): string => {
  if (window.document.querySelector("#root")) {
    return window.document.querySelector<HTMLDivElement>("#root")?.dataset.assetUrl ?? ".";
  }

  return ".";
};
