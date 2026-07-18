"use client";

import { useState, FormEvent } from "react";

// Set this in .env.local as NEXT_PUBLIC_FORMSPREE_ENDPOINT
// e.g. https://formspree.io/f/xxxxabcd  (see README for setup steps)
const ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/REPLACE_ME";

type Status = "idle" | "sending" | "ok" | "err";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your name" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email*</label>
          <input id="email" name="email" type="email" required placeholder="you@email.com" />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" placeholder="(306) 000-0000" />
        </div>
        <div className="form-field">
          <label htmlFor="service">What do you need?</label>
          <select id="service" name="service" defaultValue="Driveway Sealing">
            <option>Driveway Sealing</option>
            <option>Pressure Washing</option>
            <option>Snow Clearing</option>
            <option>Not sure / general question</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us a bit about your driveway or project..."
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status === "ok" && (
          <p className="form-status ok">
            Thanks — your message was sent straight to our inbox. We&apos;ll get back to you soon!
          </p>
        )}
        {status === "err" && (
          <p className="form-status err">
            Something went wrong sending that. Please call or WhatsApp us instead — (306) 540-8311.
          </p>
        )}

        <p className="form-note">
          This form goes straight to our email. We never share your info with anyone else.
        </p>
      </form>
    </div>
  );
}
