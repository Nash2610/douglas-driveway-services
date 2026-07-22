import Link from "next/link";

export const metadata = {
  title: "Services | Douglas Driveway Services",
  description:
    "Driveway sealing, pressure washing, and snow clearing in Regina, White City, Emerald Park, Pilot Butte & Moose Jaw. Free estimates, 1,000+ driveways sealed.",
};

//   {
//     id: "sealing",
//     index: "01",
//     title: "Driveway Sealing",
//     img: "https://img1.wsimg.com/isteam/ip/3561343d-78a0-43bb-8e14-660c94a9b6af/1d0e24e3-3fc0-4cb2-9533-5b418689a08c.jpg",
//     alt: "Sealed driveway",
//     desc: "Sealer is applied by hand roller — never sprayed — so coverage is even across the entire driveway with no blotchy patches. Cracks, control joints, and edges are addressed before the sealer goes down so the finished surface holds up through freeze-thaw cycles.",
//     chips: [
//       "Hand-rolled, blotch-free",
//       "Taped off until cured",
//     ],
//   },
//   {
//     id: "pressure-washing",
//     index: "02",
//     title: "Pressure Washing",
//     img: "https://img1.wsimg.com/isteam/ip/3561343d-78a0-43bb-8e14-660c94a9b6af/0000754b-b972-42e3-b4a7-235a468b08ef.jpg",
//     alt: "Pressure washing patio",
//     desc: "A high-powered gas pressure washer handles driveways, garage floors, patios, decks, fences and pool surrounds. It's the first step of every sealing job, and it's also booked on its own by a lot of clients who just want their concrete looking new again.",
//     chips: [
//       "Driveways & garage floors",
//       "Patios, decks & walkways",
//       "Fences & pool surrounds",
//       "Available standalone",
//     ],
//   },
//   {
//     id: "snow-clearing",
//     index: "03",
//     title: "Snow Clearing",
//     img: "https://img1.wsimg.com/isteam/ip/3561343d-78a0-43bb-8e14-660c94a9b6af/14095e17-333c-481a-85f6-9e82c290a8a7.jpg",
//     alt: "Winter driveway",
//     desc: "The same crew that seals your driveway in summer keeps it clear all winter, so it's one relationship and one call for every season.",
//     chips: [
//       "Residential routes",
//       "Priority for sealing clients",
//       "Sand treatment, no salt",
//     ],
//   },
// ];
const SERVICES = [
  {
    id: "sealing",
    index: "01",
    title: "Driveway Sealing",
    img: "/images/partially_finished_agg_driveway.jpg",
    alt: "Sealed driveway",
    desc: "Sealer is applied by hand roller — never sprayed — so coverage is even across the entire driveway with no blotchy patches. Cracks and control joints get extra attention, with sealer applied thicker on those areas first.",
    chips: ["Hand-rolled, blotch-free", "Taped off until cured"],
  },
  {
    id: "pressure-washing",
    index: "02",
    title: "Pressure Washing",
    img: "/images/imagefromprev2.jpg",
    alt: "Pressure washing patio",
    desc: "A high-powered gas pressure washer handles driveways, garage floors, patios, decks, fences and pool surrounds. It's the first step of every sealing job, and it's also booked on its own by a lot of clients who just want their concrete looking new again.",
    chips: [
      "Driveways & garage floors",
      "Patios, decks & walkways",
      "Fences & pool surrounds",
      "Available standalone",
    ],
  },
  {
    id: "snow-clearing",
    index: "03",
    title: "Snow Clearing",
    img: "/images/snow_cleared.jpeg",
    alt: "Winter driveway",
    desc: "The same crew that seals your driveway in summer keeps it clear all winter, so it's one relationship and one call for every season.",
    chips: [
      "Residential routes",
      "Priority for sealing clients",
      "Sand treatment, no salt",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section
        className="hero page-hero"
        style={
          {
            "--hero-img": "url('/images/finished_driveway.jpg')",
          } as React.CSSProperties
        }
      >
        <div className="wrap hero-inner">
          <span className="eyebrow-tag">What we offer</span>
          <h1>Every job, done the same careful way, every time.</h1>
          <p className="lead">
            Driveway sealing, pressure washing, and snow clearing — one crew,
            one standard, all year round. Free estimates on everything.
          </p>
          <div className="cta-row">
            <a href="tel:3065408311" className="btn btn-primary">
              Call (306) 540-8311
            </a>
            <Link href="/contact" className="btn btn-outline">
              Get a free estimate
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <b>5.0</b>
              <span>Google rating</span>
            </div>
            <div className="stat">
              <b>1,000+</b>
              <span>Driveways sealed</span>
            </div>
            <div className="stat">
              <b>3</b>
              <span>Services, one crew</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="kicker">What we work on</span>
            <h2>Every surface, sealed properly.</h2>
          </div>
          <div className="feature-chips" style={{ marginBottom: 20 }}>
            <span>Aggregate driveways &amp; patios</span>
            <span>Pool areas</span>
            <span>Stamped concrete</span>
            <span>Pavers</span>
            <span>New pour driveways</span>
            <span>Broom finish driveways</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="service-cards">
            {SERVICES.map((s) => (
              <div className="service-card" id={s.id} key={s.id}>
                <div className="service-card-img">
                  <div className="service-card-badge">{s.index}</div>
                  <img src={s.img} alt={s.alt} loading="lazy" />
                </div>
                <div className="service-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="feature-chips">
                    {s.chips.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section-ink"
        style={{
          paddingTop: "clamp(40px, 8vw, 60px)",
          paddingBottom: "clamp(48px, 9vw, 70px)",
        }}
      >
        <div className="wrap">
          <div className="section-head">
            <span className="kicker" style={{ color: "var(--yellow)" }}>
              Quality you can trust
            </span>
            <h2>The products we use.</h2>
            <p>
              We use a high-quality concrete sealer from a trusted local
              supplier — the same product professional concrete contractors
              across Saskatchewan rely on — rather than cheaper big-box sealers
              that fade or peel after one winter.
            </p>
          </div>
          <a
            href="https://www.wallace.sk.ca/products/allied-concrete-sealers"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginTop: 8 }}
          >
            See the product
          </a>
        </div>
      </section>

      <section
        className="section"
        style={{ paddingTop: "clamp(44px, 9vw, 70px)", textAlign: "center" }}
      >
        <div className="wrap">
          <div className="cta-block" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h2>Not sure which service you need?</h2>
              <p style={{ margin: "0 auto" }}>
                Free estimates, no obligation — in person or without anyone
                needing to be home.
              </p>
              <div className="cta-row" style={{ justifyContent: "center" }}>
                <a href="tel:3065408311" className="btn btn-primary">
                  Call (306) 540-8311
                </a>
                <a
                  href="https://wa.me/13065408311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
