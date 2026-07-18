import ContactForm from "@/components/ContactForm";
import ServiceAreaMapWrapper from "@/components/ServiceAreaMapWrapper";

export const metadata = {
  title: "Contact | Douglas Driveway Services",
  description:
    "Get a free driveway sealing, pressure washing, or snow clearing estimate. Call, WhatsApp, or send a message.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section" style={{ marginTop: 78, paddingBottom: 40 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Get in touch</span>
            <h2>Free estimates. No obligation.</h2>
            <p>
              Call, text, WhatsApp, or send the form below — it goes
              straight to our inbox. We can quote your driveway in person or
              without anyone needing to be home.
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
                  Serving Regina, White City, Emerald Park, Pilot Butte,
                  Moose Jaw &amp; surrounding areas.
                </p>
                <p style={{ marginBottom: 18 }}>
                  <a href="tel:3065408311" style={{ fontWeight: 700, fontSize: 18 }}>
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
