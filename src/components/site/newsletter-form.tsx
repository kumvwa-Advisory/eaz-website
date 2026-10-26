"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="border border-white/25 bg-white/10 px-4 py-3 text-[14px] leading-relaxed text-white">
        Thank you. A confirmation has been sent to <span className="font-medium">{email}</span>.
        Please check your inbox to complete your subscription.
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
          setError("Please enter a valid email address.");
          return;
        }
        setError("");
        setDone(true);
      }}
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) setError("");
          }}
          placeholder="Your email address"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "newsletter-error" : undefined}
          className="min-h-[38px] flex-1 rounded-[2px] border border-white/30 bg-white/10 px-2.5 py-1.5 text-[16px] text-white placeholder:text-white/45 focus:border-white/70 focus:bg-white/15 focus:outline-none"
        />
        <button
          type="submit"
          className="min-h-[38px] shrink-0 rounded-[2px] bg-white px-4 py-2.5 text-[16px] font-medium text-brand-deep transition-colors hover:bg-brand-soft"
        >
          Subscribe
        </button>
      </div>
      {error ? (
        <p id="newsletter-error" role="alert" className="mt-2 text-[14px] text-[#ffd9c8]">
          {error}
        </p>
      ) : (
        <p className="mt-2 text-[14px] text-white/50">
          Newsletters and notices from the Secretariat. Unsubscribe at any time.
        </p>
      )}
    </form>
  );
}
