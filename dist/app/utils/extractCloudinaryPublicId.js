"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPublicId = extractPublicId;
function extractPublicId(url) {
    if (!url.includes("/image/upload/"))
        return null;
    let publicIdWithExt = url.split("/image/upload/")[1];
    publicIdWithExt = publicIdWithExt.replace(/^v\d+\//, "");
    return publicIdWithExt.replace(/\.[^/.]+$/, "");
}
