import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../lib/cloudinary";
import { extractPublicId } from "../utils/extractCloudinaryPublicId";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "portfolio",
    format: file.mimetype.split("/")[1],
    public_id:
      Date.now().toString() + "-" + file.originalname.replace(/\.[^/.]+$/, ""),
  }),
});

export const destroyUpload = async (filePath?: string) => {
  if (!filePath) return;

  try {
    const publicId = extractPublicId(filePath);
    if (publicId) {
      await cloudinary.uploader.destroy(publicId);
      console.log("Uploaded file deleted successfully:", publicId);
    }
  } catch (error) {
    console.error("⚠️ Failed to delete file:", error);
  }
};

export const upload = multer({ storage });
