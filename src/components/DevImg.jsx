import Image from "next/image";

export const DevImg = ({ containerStyles, imgSrc, imhHeight, imgWidth }) => {
  return (
    <section>
      <div className={`${containerStyles}`}>
        <Image
          src={imgSrc}
          //   fill={true}
          height={imhHeight / 1.5}
          width={imgWidth / 1.5}
          priority={true}
          style={{ marginLeft: "11%", paddingTop: "7%" }}
          alt="Developer Image"
        />
      </div>
    </section>
  );
};
