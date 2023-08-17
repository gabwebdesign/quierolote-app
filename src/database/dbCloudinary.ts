import { v2 as cloudinary } from 'cloudinary';
cloudinary.config(process.env.CLOUDINARY_URL || '');

export const cd = cloudinary;

export const deleteImage = async (
  publicId: string
): Promise<{ result: string }> => {
  const res = await cloudinary.uploader.destroy(publicId);
  return res;
};

export const checkImageInCloudinary = async (
  publicId: string
): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      await cd.api.resource(publicId);
      resolve(true);
    } catch (error) {
      resolve(false);
    }
  });
};

export const uploadImage = async (file: Buffer): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    await cd.uploader
      .upload_stream({ resource_type: 'image' }, function (error, result) {
        if (error) reject(error.message);

        resolve(result?.secure_url!);
      })
      .end(file);
  });
};
