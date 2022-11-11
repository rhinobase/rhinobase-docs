export type MixedArray = string | Array<string | string[]>;

export function toArray(slug: MixedArray) {
  const res = Array.isArray(slug) ? slug.flat() : [slug];
  return res.filter(Boolean);
}
