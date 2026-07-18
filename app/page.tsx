

import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ServiceAreaMapWrapper from "@/components/ServiceAreaMapWrapper";

// Swap for the real Google Business Profile share link once you have it
// (Google Maps listing → Share → Copy link)
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Douglas+Driveway+Services+Regina+SK";

const HOME_REVIEWS = [
  {
    text: "Showed up exactly when they said they would and the driveway looks better than the day the house was built. Zero blotching.",
    who: "Regina",
  },
  {
    text: "Referred by our builder and glad we called. Fair price, no pressure, cleaned up completely after.",
    who: "White City",
  },
  {
    text: "Booked pressure washing for our patio and deck — didn't know it could look new again. Already booked sealing for spring.",
    who: "Emerald Park",
  },
  {
    text: "Professional from the first call. They walked the driveway with us before quoting and didn't oversell anything.",
    who: "Pilot Butte",
  },
  {
    text: "Communication was excellent the whole way through — text updates on timing, no surprises on the invoice.",
    who: "Regina",
  },
  {
    text: "Our old driveway sealer job from another company peeled within a year. This one still looks brand new.",
    who: "Moose Jaw",
  },
  {
    text: "Snow clearing all winter has been a game changer, and no salt eating away at the concrete.",
    who: "Regina",
  },
  {
    text: "Quoted us without needing anyone home, showed up on time, and the crew was polite and tidy.",
    who: "Emerald Park",
  },
];

export default function Home() {
  return (
    <>
      <section
        className="hero"
        style={
          {
            "--hero-img":
              "url('/images/driveway_pavers.jpeg')",
          } as React.CSSProperties
        }
      >
        <div className="wrap hero-inner">
          <div className="hero-badge">
            <svg viewBox="0 0 150 150">
              <defs>
                <path
                  id="circlePath"
                  d="M 75,75 m -58,0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
                />
              </defs>
              <text
                fontSize="10.5"
                fontWeight="700"
                letterSpacing="2"
                fill="#1b1712"
              >
                <textPath href="#circlePath" startOffset="0%">
                  REGINA&apos;S TOP RATED · SINCE DAY ONE · ★★★★★ ·
                </textPath>
              </text>
            </svg>
            <div className="center">
              <span className="big">5.0</span>
              <span className="small">Google Reviews</span>
            </div>
          </div>
          <span className="eyebrow-tag">Regina, SK &amp; area</span>
          <h1>
            We seal it once.
            <br />
            You stop <i>thinking</i> about it.
          </h1>
          <p className="lead">
            Hand-rolled driveway sealing, pressure washing, and winter snow
            clearing for homeowners across Regina — no blotching, no shortcuts,
            no surprises.
          </p>
          <div className="cta-row">
            <a href="tel:3065408311" className="btn btn-primary">
              Call (306) 540-8311
            </a>
            <a
              href="https://wa.me/13065408311"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} style={{ display: "inline-flex" }}>
              <span>★ 5.0 Rated on Google</span>
              <span>1,000+ Driveways Sealed</span>
              <span>Regina</span>
              <span>White City</span>
              <span>Emerald Park</span>
              <span>Pilot Butte</span>
              <span>Moose Jaw</span>
            </span>
          ))}
        </div>
      </div>

      {/* <section className="section" id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">What we do</span>
            <h2>Three jobs. Same crew, all year.</h2>
            <p>
              Free, no-obligation estimates — in person or without you needing
              to be home.
            </p>
          </div>

          <div className="feature-chips" style={{ marginBottom: 50 }}>
            <span>Aggregate driveways &amp; patios</span>
            <span>Pool areas</span>
            <span>Stamped concrete</span>
            <span>Pavers</span>
            <span>New pour driveways</span>
            <span>Broom finish driveways</span>
          </div>

          

          <div className="svc-row">
            <div className="svc-photo">
              <Image
                src="https://img1.wsimg.com/isteam/ip/3561343d-78a0-43bb-8e14-660c94a9b6af/1d0e24e3-3fc0-4cb2-9533-5b418689a08c.jpg"
                alt="Sealed driveway"
                width={600}
                height={480}
              />
            </div>
            <div className="svc-text">
              <div className="svc-index">01</div>
              <h3>Driveway Sealing</h3>
              <p>
                Applied by hand roller, never sprayed, for even coverage that
                actually protects concrete and asphalt through Saskatchewan
                winters.
              </p>
              <ul className="svc-list">
                <li>Even, blotch-free finish</li>
                <li>Cracks &amp; control joints sealed first</li>
                <li>Taped off until fully cured</li>
              </ul>
            </div>
          </div>

          <div className="svc-row">
            <div className="svc-photo">
              <Image
                src="https://img1.wsimg.com/isteam/ip/3561343d-78a0-43bb-8e14-660c94a9b6af/0000754b-b972-42e3-b4a7-235a468b08ef.jpg"
                alt="Pressure washing patio"
                width={600}
                height={480}
              />
            </div>
            <div className="svc-text">
              <div className="svc-index">02</div>
              <h3>Pressure Washing</h3>
              <p>
                Gas-powered pressure washing for driveways, garage floors,
                patios, decks and fences — done the day before sealing, or on
                its own.
              </p>
              <ul className="svc-list">
                <li>Driveways &amp; garage floors</li>
                <li>Patios, decks &amp; walkways</li>
                <li>Fences &amp; pool surrounds</li>
              </ul>
            </div>
          </div>

          <div className="svc-row">
            <div className="svc-photo">
              <Image
                src="https://img1.wsimg.com/isteam/ip/3561343d-78a0-43bb-8e14-660c94a9b6af/14095e17-333c-481a-85f6-9e82c290a8a7.jpg"
                alt="Winter driveway"
                width={600}
                height={480}
              />
            </div>
            <div className="svc-text">
              <div className="svc-index">03</div>
              <h3>Snow Clearing</h3>
              <p>
                The same crew that seals your driveway in summer keeps it clear
                all winter — one call, one relationship, all year round.
              </p>
              <ul className="svc-list">
                <li>Residential routes</li>
                <li>Priority booking for sealing clients</li>
                <li>Sand treatment available on request (no salt)</li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 46 }}>
            <Link href="/services" className="btn btn-dark">
              See all services in detail
            </Link>
          </div>
        </div>
      </section> */}
      <section className="section" id="services">
  <div className="wrap">
    <div className="section-head">
      <span className="kicker">What we do</span>
      <h2>Three jobs. Same crew, all year.</h2>
      <p>
        Free, no-obligation estimates — in person or without you needing
        to be home.
      </p>
    </div>

    <div className="feature-chips" style={{ marginBottom: 50 }}>
      <span>Aggregate driveways &amp; patios</span>
      <span>Pool areas</span>
      <span>Stamped concrete</span>
      <span>Pavers</span>
      <span>New pour driveways</span>
      <span>Broom finish driveways</span>
    </div>

    <div className="svc-row">
      <div className="svc-photo">
        <Image
          src="/images/partially_finished_concrete.jpg"
          alt="Sealed driveway"
          width={600}
          height={480}
        />
      </div>
      <div className="svc-text">
        <div className="svc-index">01</div>
        <h3>Driveway Sealing</h3>
        <p>
          Applied by hand roller, never sprayed, for even coverage that
          actually protects concrete and asphalt through Saskatchewan
          winters.
        </p>
        <ul className="svc-list">
          <li>Even, blotch-free finish</li>
          <li>Cracks &amp; control joints sealed first</li>
          <li>Taped off until fully cured</li>
        </ul>
      </div>
    </div>

    <div className="svc-row">
      <div className="svc-photo">
        <Image
          src="/images/stamped_patio.jpg"
          alt="Pressure washing patio"
          width={600}
          height={480}
        />
      </div>
      <div className="svc-text">
        <div className="svc-index">02</div>
        <h3>Pressure Washing</h3>
        <p>
          Gas-powered pressure washing for driveways, garage floors,
          patios, decks and fences — done the day before sealing, or on
          its own.
        </p>
        <ul className="svc-list">
          <li>Driveways &amp; garage floors</li>
          <li>Patios, decks &amp; walkways</li>
          <li>Fences &amp; pool surrounds</li>
        </ul>
      </div>
    </div>

    <div className="svc-row">
      <div className="svc-photo">
        <Image
          src="/images/snow_cleared.jpeg"
          alt="Winter driveway"
          width={600}
          height={480}
        />
      </div>
      <div className="svc-text">
        <div className="svc-index">03</div>
        <h3>Snow Clearing</h3>
        <p>
          The same crew that seals your driveway in summer keeps it clear
          all winter — one call, one relationship, all year round.
        </p>
        <ul className="svc-list">
          <li>Residential routes</li>
          <li>Priority booking for sealing clients</li>
          <li>Sand treatment available on request (no salt)</li>
        </ul>
      </div>
    </div>

    <div style={{ textAlign: "center", marginTop: 46 }}>
      <Link href="/services" className="btn btn-dark">
        See all services in detail
      </Link>
    </div>
  </div>
</section>

      <section className="section section-ink">
        <div className="wrap">
          <div
            className="cta-block"
            style={{
              background: "transparent",
              padding: 0,
              gridTemplateColumns: "1fr",
            }}
          >
            <div>
              <span className="kicker" style={{ color: "var(--yellow)" }}>
                How it works
              </span>
              <h2>Four steps. Two visits. Zero muddy footprints.</h2>
              <p>
                Built around drying time, not around rushing a truck off your
                street.
              </p>
              <div className="cta-row">
                <Link href="/about" className="btn btn-primary">
                  See the full process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Word around Regina</span>
            <h2>5.0 average on Google.</h2>
          </div>
          <div className="review-strip">
            {HOME_REVIEWS.map((r, i) => (
              <a
                key={i}
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="review"
              >
                <div className="pin" />
                <div className="stars">★★★★★</div>
                <p>&ldquo;{r.text}&rdquo;</p>
                <div className="who">Google Review — {r.who}</div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/reviews" className="btn btn-dark">
              Read more reviews
            </Link>
          </div>
        </div>
      </section> */}
      <section
        className="section"
        style={{ paddingTop: 90, paddingBottom: 90 }}
      >
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <span className="kicker">Word around Regina</span>
            <h2>5.0 average on Google.</h2>
          </div>
          <div className="review-strip">
            {HOME_REVIEWS.map((r, i) => (
              <a
                key={i}
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="review"
              >
                <div className="pin" />
                <div className="stars">★★★★★</div>
                <p>&ldquo;{r.text}&rdquo;</p>
                <div className="who">Google Review — {r.who}</div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <Link href="/reviews" className="btn btn-dark">
              Read more reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="contact" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Get in touch</span>
            <h2>Free estimates. No obligation.</h2>
            <p>
              Call, text, WhatsApp, or send the form below — it goes straight to
              our inbox. We can quote your driveway in person or without anyone
              needing to be home.
            </p>
          </div>

          <div className="contact-grid">
            <ContactForm />

            <div>
              <div
                style={{
                  background: "var(--ink)",
                  color: "var(--paper)",
                  borderRadius: 6,
                  padding: 34,
                  marginBottom: 26,
                }}
              >
                <h3 style={{ fontSize: 22, marginBottom: 18 }}>
                  Douglas Driveway Services
                </h3>
                <p style={{ marginBottom: 14, color: "#c9c2b0" }}>
                  Serving Regina, White City, Emerald Park, Pilot Butte, Moose
                  Jaw &amp; surrounding areas.
                </p>
                <p style={{ marginBottom: 18 }}>
                  <a
                    href="tel:3065408311"
                    style={{ fontWeight: 700, fontSize: 18 }}
                  >
                    (306) 540-8311
                  </a>
                </p>
                <table className="hours">
                  <tbody>
                    <tr>
                      <td>Mon – Sun</td>
                      <td>6:00 AM – 7:00 PM</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cta-row" style={{ marginTop: 22 }}>
                  <a
                    href="https://wa.me/13065408311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
              </div>

              <h4 style={{ fontSize: 16, marginBottom: 10 }}>
                Our service area
              </h4>
              <div className="map-card">
                <ServiceAreaMapWrapper />
              </div>
              <p className="map-disclaimer">
                This shows the general zone we serve — not an exact address.
                Give us a call to confirm we cover your street.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
