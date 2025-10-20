export function extractPublicId(url: string): string | null {
  if (!url.includes("/image/upload/")) return null;

  let publicIdWithExt = url.split("/image/upload/")[1];

  publicIdWithExt = publicIdWithExt.replace(/^v\d+\//, "");

  return publicIdWithExt.replace(/\.[^/.]+$/, "");
}
