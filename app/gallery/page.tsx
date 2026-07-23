

import GalleryGrid from "@/components/GalleryGrid";
import Link from "next/link";

export const metadata = {
  title: "Gallery | Douglas Driveway Services",
  description: "Recent driveway sealing and pressure washing work in Regina & area.",
};

const IMAGES = [
  {
    src: "/images/driveway_pavers.jpeg",
    alt: "Herringbone paver driveway, before and after sealing",
  },
  {
    src: "/images/finished_driveway.jpg",
    alt: "Finished exposed aggregate driveway",
  },
  {
    src: "/images/stamped_patio.jpg",
    alt: "Stamped concrete patio with hot tub area",
  },

  {
    src: "/images/finished_stamped_ice_cream_shop.jpeg",
    alt: "Stamped concrete patio at Gillybeans Cafe",
  },
  {
    src: "/images/partially_finished_concrete.jpg",
    alt: "Exposed aggregate driveway and garage",
  },
  {
    src: "/images/snow_cleared.jpeg",
    alt: "Driveway cleared of snow in winter",
  },
  {
    src: "/images/stamped_path.jpg",
    alt: "Stamped concrete walkway",
  },
  {
    src: "/images/pool_skirt_sealing.jpg",
    alt: "Pool skirt sealing",
  },
  {
    src: "/images/imagefromprev2.jpg",
    alt: "Douglas Driveway Services completed job",
  },
  {
    src: "/images/imagefromprev3.jpg",
    alt: "Douglas Driveway Services completed job",
  },
  {
    src: "/images/partially_finished_agg_driveway.jpg",
    alt: "Partially finished exposed aggregate driveway",
  },
  {
    src: "/images/bulrush_way.jpg",
    alt: "Finished Driveway at Bulrush Way",
  },
  {
    src: "/images/finished_agg_driveway.jpg",
    alt: "Finished Aggregate Driveway",
  },
  {
    src: "/images/pavers_progress_1.jpg",
    alt: "Pavers Progress 1",
  },
  {
    src: "/images/pavers_progress_2.jpg",
    alt: "Pavers Progress 2",
  },
  {
    src: "/images/progress_agg.jpg",
    alt: "Aggregate Driveway Progress",
  },
  {
    src: "/images/riverblend_progress.jpg",
    alt: "Riverblend Driveway Progress",
  },
  
];

export default function GalleryPage() {
  return (
    <>
      <section className="section" style={{ marginTop: 78 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Recent work</span>
            <h2>See the finish for yourself.</h2>
            <p>
              Progress pictures on different driveway sealing finishes — pavers,
  concrete, stamped, aggregate — and what snow removal can look like.
            </p>
          </div>
          <GalleryGrid images={IMAGES} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0, textAlign: "center" }}>
        <div className="wrap">
          <Link href="/contact" className="btn btn-primary">
            Get your driveway looking like this
          </Link>
        </div>
      </section>
    </>
  );
}