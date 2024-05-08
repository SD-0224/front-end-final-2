export const capitalizeSlug = (slug) => {
  if (!slug) return "";
  const words = slug.split("-");

  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

  return capitalizedWords.join(" ");
};

export function extractLastPathname(url) {
  const parts = url.split("/");
  return parts[parts.length - 1];
}
