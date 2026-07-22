export const metadata = {
  title: "Reviews | Douglas Driveway Services",
  description: "26+ Google reviews, 5.0 average, from homeowners across Regina & area.",
};

// Google Maps search link for the business — swap for the exact
// Google Business Profile "share" link once you have it (see README).
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Douglas+Driveway+Services/@50.4734548,-104.9646556,104378m/data=!3m1!1e3!4m8!3m7!1s0x531ea73cd4169b93:0xbded2804b2fd53cf!8m2!3d50.4585942!4d-104.6354091!9m1!1b1!16s%2Fg%2F11h7146wr8?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D";

const REVIEWS = [
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

export default function ReviewsPage() {
  return (
    <>
      <section className="section" style={{ marginTop: 78 }}>
  <div className="wrap">
    <div className="section-head">
      <span className="kicker">Word around Regina</span>
      <h2>5.0 average across all reviews.</h2>
      <p>
        Every review below is a real Google review from a real job.
        Click through to read them straight from Google, or leave one
        of your own.
      </p>
    </div>

          <div className="review-grid">
            {REVIEWS.map((r, i) => (
              <div className="review" key={i}>
                <div className="pin" />
                <div className="stars">★★★★★</div>
                <p>&ldquo;{r.text}&rdquo;</p>
                <div className="who">Google Review — {r.who}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 50 }}>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Read all reviews on Google →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
