import Image from "next/image";

export const DevImage = ({ containerStyles, imgSrc, imgHeight, imgWidth }) => {
  return (
    <section>
      <div className={`${containerStyles} backdrop-blur-md`}>
        <Image
          src={imgSrc}
          //   fill={true}
          height={imgHeight / 1.5}
          width={imgWidth / 1.5}
          priority={true}
          style={{ marginLeft: "11%", paddingTop: "7%" }}
          alt="Developer Image"
        />
      </div>
    </section>
  );
};
