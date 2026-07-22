import Link from "next/link";

export const metadata = {
  title: "About Us & Our Process | Douglas Driveway Services",
  description:
    "1000+ driveways sealed across Regina & area. Our story, why homeowners trust us, and exactly how a sealing job runs from start to finish.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section" style={{ marginTop: 78 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">About us</span>
            <h2>Quality product, excellent service, competitive pricing.</h2>
            <p>
              Douglas Driveway Services started with a simple habit: keeping
              driveways looking as good as — or better than — new.
            </p>
          </div>

          <div style={{ maxWidth: 720 }}>
            <p
              style={{
                color: "#4a4238",
                fontSize: 15.5,
                lineHeight: 1.75,
                marginBottom: 18,
              }}
            >
              It started with a few requests to seal driveways for friends. That
              led to referrals from them, and those referrals led to more. Since
              then we&apos;ve sealed over 1,000 driveways across Regina and the
              surrounding area, and we now work with multiple Regina home
              builders who refer their clients to us directly.
            </p>
            <p
              style={{
                color: "#4a4238",
                fontSize: 15.5,
                lineHeight: 1.75,
                marginBottom: 18,
              }}
            >
              We pride ourselves on the quality of the work, making every client
              feel 100% comfortable with what they&apos;re paying for, and on
              punctuality — which, if you&apos;ve hired trades before, you know
              is surprisingly hard to find.
            </p>
            <p style={{ color: "#4a4238", fontSize: 15.5, lineHeight: 1.75 }}>
              We use a high-quality sealing product from a trusted local vendor,
              and aim to make our driveway sealing and snow clearing service
              second to none.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section section-ink"
        style={{ paddingTop: 70, paddingBottom: 70 }}
      >
        <div className="wrap">
          <div className="section-head">
            <span className="kicker" style={{ color: "var(--yellow)" }}>
              Why homeowners trust us
            </span>
            <h2>We pay close attention to detail.</h2>
          </div>
          <ul className="svc-list" style={{ maxWidth: 560 }}>
            <li style={{ color: "var(--paper)" }}>
              1,000+ driveways sealed across Regina &amp; area
            </li>
            <li style={{ color: "var(--paper)" }}>
              Referred directly by multiple Regina home builders
            </li>
            <li style={{ color: "var(--paper)" }}>
              Punctual — we show up when we say we will
            </li>
            <li style={{ color: "var(--paper)" }}>
              Customer satisfaction guaranteed before payment
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="process">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">How it runs</span>
            <h2>Four steps. Two visits. Zero muddy footprints.</h2>
            <p>
              Built around drying time, not around rushing a truck off your
              street. Every job follows the same sequence, whether it&apos;s a
              small single-car pad or a driveway with a walkway.
            </p>
          </div>

          <div className="timeline light-timeline">
            <div className="tl-item">
              <div className="day">Day one, afternoon</div>
              <h4>Wash</h4>
              <p>
                We pressure wash the full area with a high-powered gas washer
                and tape off the area so no foot or car traffic gets in the way,
                then leave it to dry overnight.
              </p>
            </div>
            <div className="tl-item">
              <div className="day">Day two, morning</div>
              <h4>Clear &amp; broom</h4>
              <p>
                We come back with a leaf blower and broom to clear anything that
                landed overnight.
              </p>
            </div>
            <div className="tl-item">
              <div className="day">Day two, application</div>
              <h4>Hand-roll the sealer</h4>
              <p>
                Sealer goes on by hand roller — never sprayed — for full, even
                coverage with no blotching or missed patches.
              </p>
            </div>
            <div className="tl-item">
              <div className="day">Before we leave</div>
              <h4>Walkthrough</h4>
              <p>
                We can walk the finished job with you and answer any questions —
                or watch us and ask away. Payment isn&apos;t collected until
                you&apos;re 100% happy with the result.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: 60,
              padding: "30px 34px",
              background: "var(--paper-deep)",
              borderRadius: 6,
              border: "1px solid var(--line)",
            }}
          >
            <h4 style={{ fontSize: 18, marginBottom: 10 }}>
              In a time crunch?
            </h4>
            <p style={{ color: "#4a4238", fontSize: 15, lineHeight: 1.7 }}>
              Subject to availability, we may be able to work with your schedule
              and move you up — just let us know when you book.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">What we offer</span>
            <h2>Free estimates on every service.</h2>
            <p>
              Driveway sealing in Regina, Moose Jaw, White City, Pilot Butte and
              the surrounding area, pressure washing, and snow clearing — each
              with a free, no-obligation estimate.
            </p>
          </div>
          <ul className="svc-list" style={{ maxWidth: 560, marginTop: -10 }}>
            <li>
              Pressure washing available for driveways, garage floors, patios,
              decks, fences, pool areas &amp; other property
            </li>
            <li>
              Everything is taped off during the job to keep foot and car
              traffic away while it cures
            </li>
            <li>
              Clean-up and a full walkthrough before we consider the job done
            </li>
          </ul>
        </div>
      </section>

      <section
        className="section"
        style={{ paddingTop: 0, textAlign: "center" }}
      >
        <div className="wrap">
          <div
            className="cta-block"
            style={{ background: "var(--green)", gridTemplateColumns: "1fr" }}
          >
            <div>
              <h2>Customer satisfaction guaranteed.</h2>
              <p style={{ margin: "0 auto" }}>
                We don&apos;t collect payment until you&apos;re 100% happy with
                the finished job. Get a free estimate — in person, or without
                anyone needing to be home.
              </p>
              <div className="cta-row" style={{ justifyContent: "center" }}>
                <a href="tel:3065408311" className="btn btn-primary">
                  Call (306) 540-8311
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Get a free estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
