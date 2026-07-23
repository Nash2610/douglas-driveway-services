"use client";

import { useState } from "react";

type GalleryImage = { src: string; alt: string };

const PAGE_SIZE = 8;

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = images.slice(0, visible);
  const hasMore = visible < images.length;

  return (
    <>
      <div className="gallery-grid">
        {shown.map((img, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <div
            key={`${img.src}-${i}`}
            className={`gallery-tile${i % 7 === 0 ? " featured" : ""}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-caption">
              <span>{img.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="load-more-wrap">
          <button
            className="btn btn-dark"
            onClick={() => setVisible((v) => Math.min(v + PAGE_SIZE, images.length))}
          >
            See more photos ({images.length - visible} more)
          </button>
        </div>
      )}
    </>
  );
}