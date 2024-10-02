import Image from "next/image";

//Custom Separator
const ImageSeparator = () => {
  return (
    <div className="relative bg-black w-full h-[100px]">
      <Image
        src="/separator.jpg"
        alt="Separator"
        fill
        quality={100}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default ImageSeparator;


