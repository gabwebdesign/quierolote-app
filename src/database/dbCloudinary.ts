import { v2 as cloudinary } from 'cloudinary';
cloudinary.config(process.env.CLOUDINARY_URL || '');

export const cd = cloudinary;

export const deleteImage = async (
  publicId: string
): Promise<{ result: string }> => {
  const res = await cloudinary.uploader.destroy(publicId);
  return res;
};
