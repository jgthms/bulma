export function unslug(slug) {
  // Replace hyphens and underscores with spaces
  let result = slug.replace(/[-_]/g, " ");

  // Capitalize the first letter of each word
  return result.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}
