import images from "../assets/images.jpg";

const GetCroppedImageUrl = (url: string) => {
  if (!url) return images;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default GetCroppedImageUrl;
