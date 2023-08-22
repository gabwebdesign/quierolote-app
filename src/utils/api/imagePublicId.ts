export const getImagePublicId = (imageUrl: string): string => {
  return imageUrl.split('/').slice(-1)[0].split('.')[0];
};
