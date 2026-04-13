import Image from "next/image";

export const DevImage = ({ containerStyles, imgSrc, imgHeight, imgWidth }) => {
  return (
    <section>
      <div className={`${containerStyles} backdrop-blur-md`}>
        <Image
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          priority={true}
          style={{ marginLeft: "11%", paddingTop: "7%", width: "auto", height: "auto", maxWidth: "66.67%", maxHeight: "66.67%" }}
          alt="Developer Image"
        />
      </div>
    </section>
  );
};
