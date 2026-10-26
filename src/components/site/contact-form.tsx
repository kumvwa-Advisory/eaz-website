"use client";

import { useState } from "react";
import { ORG } from "@/data/site";
import {
  Field,
  FormSuccess,
  inputClass,
  selectClass,
  submitClass,
  textareaClass,
} from "./form-controls";

const TOPICS = [
  "Membership application or renewal",
  "Conferences and events",
  "Publications and research",
  "Media enquiry",
  "Invoice or payment",
  "Something else",
];

type Values = {
  name: string;
  email: string;
  organisation: string;
  phone: string;
  topic: string;
  message: string;
};

const EMPTY: Values = {
  name: "",
  email: "",
  organisation: "",
  phone: "",
  topic: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [reference, setReference] = useState<string | null>(null);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
  };

  if (reference) {
    return (
      <FormSuccess
        title="Your message has been received"
        onReset={() => {
          setValues(EMPTY);
          setReference(null);
        }}
        resetLabel="Send another message"
      >
        <p>
          Thank you, {values.name.split(" ")[0]}. Your enquiry has been logged under reference{" "}
          <span className="tabular font-medium text-ink">{reference}</span> and passed to the
          relevant desk.
        </p>
        <p>
          The Secretariat aims to respond within two working days. Urgent matters may be raised
          on{" "}
          <a href={`tel:${ORG.phoneHref}`} className="font-medium text-ink underline underline-offset-2">
            {ORG.phone}
          </a>
          .
        </p>
      </FormSuccess>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        const next: typeof errors = {};
        if (!values.name.trim()) next.name = "Enter your full name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
          next.email = "Enter a valid email address.";
        if (!values.topic) next.topic = "Select the subject of your enquiry.";
        if (values.message.trim().length < 20)
          next.message = "Please give us a little more detail (at least 20 characters).";
        setErrors(next);
        if (Object.keys(next).length > 0) return;

        const now = new Date();
        setReference(
          `EAZ-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}-${String(
            Math.floor(1000 + Math.random() * 9000)
          )}`
        );
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="contact-name" required error={errors.name}>
          <input
            id="contact-name"
            value={values.name}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            onChange={(event) => set("name", event.target.value)}
            className={inputClass}
            placeholder="Naomi Banda"
          />
        </Field>
        <Field label="Email address" htmlFor="contact-email" required error={errors.email}>
          <input
            id="contact-email"
            type="email"
            value={values.email}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            onChange={(event) => set("email", event.target.value)}
            className={inputClass}
            placeholder="you@example.co.zm"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Organisation" htmlFor="contact-org">
          <input
            id="contact-org"
            value={values.organisation}
            autoComplete="organization"
            onChange={(event) => set("organisation", event.target.value)}
            className={inputClass}
            placeholder="Bank of Zambia"
          />
        </Field>
        <Field label="Telephone" htmlFor="contact-phone">
          <input
            id="contact-phone"
            type="tel"
            value={values.phone}
            autoComplete="tel"
            onChange={(event) => set("phone", event.target.value)}
            className={inputClass}
            placeholder="+260 97 000 0000"
          />
        </Field>
      </div>

      <Field label="Subject" htmlFor="contact-topic" required error={errors.topic}>
        <select
          id="contact-topic"
          value={values.topic}
          aria-invalid={Boolean(errors.topic)}
          onChange={(event) => set("topic", event.target.value)}
          className={selectClass}
        >
          <option value="">Select a subject</option>
          {TOPICS.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" htmlFor="contact-message" required error={errors.message}>
        <textarea
          id="contact-message"
          rows={5}
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          onChange={(event) => set("message", event.target.value)}
          className={textareaClass}
          placeholder="How may we help?"
        />
      </Field>

      <p className="text-[14px] leading-relaxed text-muted">
        Details submitted through this form are used only to respond to your enquiry. They are
        not added to any mailing list without your consent.
      </p>

      <button type="submit" className={`${submitClass} w-full sm:w-auto`}>
        Send message
      </button>
    </form>
  );
}
