"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PhotoGallery({ images }) {
  const [imageAspectRatios, setImageAspectRatios] = useState({});
  const [sortedImages, setSortedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Get image dimensions and aspect ratios
  useEffect(() => {
    const loadImageDimensions = async () => {
      const ratios = {};

      for (const image of images) {
        try {
          const img = new (
            typeof window !== "undefined" ? window.Image : Image
          )();
          await new Promise((resolve) => {
            img.onload = () => {
              const aspectRatio = img.naturalWidth / img.naturalHeight;
              ratios[image.thumbnail] = {
                ratio: aspectRatio,
                width: img.naturalWidth,
                height: img.naturalHeight,
              };
              resolve();
            };
            img.onerror = resolve;
            img.src = image.thumbnail;
          });
        } catch (error) {
          console.error("Error loading image:", image.thumbnail, error);
        }
      }

      setImageAspectRatios(ratios);
    };

    loadImageDimensions();
  }, [images]);

  // Sort images for optimal masonry layout
  useEffect(() => {
    if (Object.keys(imageAspectRatios).length === 0) return;

    // Sort images: landscape first, then portrait, then square
    const sorted = [...images].sort((a, b) => {
      const ratioA = imageAspectRatios[a.thumbnail]?.ratio || 1;
      const ratioB = imageAspectRatios[b.thumbnail]?.ratio || 1;

      // Prioritize landscape images
      if (ratioA > 1.2 && ratioB <= 1.2) return -1;
      if (ratioA <= 1.2 && ratioB > 1.2) return 1;

      // Then by aspect ratio (wider first)
      return ratioB - ratioA;
    });

    setSortedImages(sorted);
  }, [imageAspectRatios, images]);

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      const currentIndex = sortedImages.findIndex(
        (img) => img.thumbnail === selectedImage,
      );

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIndex =
          (currentIndex - 1 + sortedImages.length) % sortedImages.length;
        setSelectedImage(sortedImages[prevIndex].thumbnail);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % sortedImages.length;
        setSelectedImage(sortedImages[nextIndex].thumbnail);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, sortedImages]);

  // Calculate grid column span based on aspect ratio
  const getColSpan = (image) => {
    const ratio = imageAspectRatios[image.thumbnail]?.ratio || 1;

    if (ratio > 1.5) {
      return "md:col-span-2"; // Wide landscape
    }
    if (ratio > 1.2) {
      return "md:col-span-1"; // Moderate landscape
    }
    return "md:col-span-1"; // Square or portrait
  };

  // Calculate grid row span based on aspect ratio
  const getRowSpan = (image) => {
    const ratio = imageAspectRatios[image.thumbnail]?.ratio || 1;

    if (ratio < 0.7) {
      return "md:row-span-2"; // Tall portrait
    }
    return "md:row-span-1";
  };

  return (
    <>
      <style jsx>{`
        .masonry-grid {
          column-count: 1;
          column-gap: 1rem;
        }

        @media (min-width: 768px) {
          .masonry-grid {
            column-count: 2;
          }
        }

        @media (min-width: 1024px) {
          .masonry-grid {
            column-count: 3;
          }
        }

        @media (min-width: 1280px) {
          .masonry-grid {
            column-count: 4;
          }
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1rem;
          display: inline-block;
          width: 100%;
        }
      `}</style>

      {/* Masonry Gallery Grid */}
      <div className="masonry-grid">
        {sortedImages.map((image, index) => {
          const ratio = imageAspectRatios[image.thumbnail]?.ratio || 1;
          const width = imageAspectRatios[image.thumbnail]?.width || 1000;
          const height = imageAspectRatios[image.thumbnail]?.height || 1000;

          return (
            <div key={index} className="masonry-item">
              <div
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl"
                style={{
                  aspectRatio: `${ratio}`,
                  width: "100%",
                }}
                onClick={() => setSelectedImage(image.thumbnail)}
              >
                <Image
                  src={image.thumbnail}
                  alt={`Gallery image ${index + 1}`}
                  width={width}
                  height={height}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                  <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <svg
                      className="h-12 w-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full size gallery image"
              width={1920}
              height={1080}
              className="h-auto max-h-[85vh] w-auto max-w-[85vw] rounded-lg object-contain"
            />

            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-900 transition-all hover:scale-110 hover:bg-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = sortedImages.findIndex(
                  (img) => img.thumbnail === selectedImage,
                );
                const prevIndex =
                  (currentIndex - 1 + sortedImages.length) %
                  sortedImages.length;
                setSelectedImage(sortedImages[prevIndex].thumbnail);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-900 transition-all hover:scale-110 hover:bg-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = sortedImages.findIndex(
                  (img) => img.thumbnail === selectedImage,
                );
                const nextIndex = (currentIndex + 1) % sortedImages.length;
                setSelectedImage(sortedImages[nextIndex].thumbnail);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-900 transition-all hover:scale-110 hover:bg-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
