


// import GalleryGrid from "@/components/GalleryGrid";
// import Link from "next/link";
// export const metadata = {
//   title: "Gallery | Douglas Driveway Services",
//   description: "Recent driveway sealing and pressure washing work in Regina & area.",
// };


// const BASE_IMAGES = [
//   {
//     src: "https://img1.wsimg.com/isteam/ip/3561343d-78a0-43bb-8e14-660c94a9b6af/1d0e24e3-3fc0-4cb2-9533-5b418689a08c.jpg",
//     alt: "Sealed driveway close up",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
//     alt: "Freshly sealed driveway of home",
//   },
//   {
//     src: "https://img1.wsimg.com/isteam/ip/3561343d-78a0-43bb-8e14-660c94a9b6af/0000754b-b972-42e3-b4a7-235a468b08ef.jpg",
//     alt: "Pressure washed patio",
//   },
//   {
//     src: "https://img1.wsimg.com/isteam/ip/3561343d-78a0-43bb-8e14-660c94a9b6af/14095e17-333c-481a-85f6-9e82c290a8a7.jpg",
//     alt: "Clean garage floor",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop",
//     alt: "Suburban driveway and garage",
//   },
// ];


// const IMAGES = [...BASE_IMAGES, ...BASE_IMAGES, ...BASE_IMAGES];

// export default function GalleryPage() {
//   return (
//     <>
//       <section className="section" style={{ marginTop: 78 }}>
//         <div className="wrap">
//           <div className="section-head">
//             <span className="kicker">Recent work</span>
//             <h2>See the finish for yourself.</h2>
//             <p>
//               A look at recent driveway sealing and pressure washing jobs
//               around Regina and area.{" "}
              
//             </p>
//           </div>
//           <GalleryGrid images={IMAGES} />
//         </div>
//       </section>

//       <section className="section" style={{ paddingTop: 0, textAlign: "center" }}>
//   <div className="wrap">
//     <Link href="/contact" className="btn btn-primary">
//       Get your driveway looking like this
//     </Link>
//   </div>
// </section>
//     </>
//   );
// }

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
  // Renamed from "finsihed stamped ice cream shop.jpeg" — remove the
  // spaces from the actual filename in /public/images to match this path.
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
    src: "/images/imagefromprev2.webp",
    alt: "Douglas Driveway Services completed job",
  },
  {
    src: "/images/imagefromprev3.webp",
    alt: "Douglas Driveway Services completed job",
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
              A look at recent driveway sealing, stamped concrete, and
              pressure washing jobs around Regina and area.
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