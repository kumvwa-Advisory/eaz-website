"use client";

import { useState } from "react";
import { MEMBERSHIP_CLASSES, ORG } from "@/data/site";
import {
  Field,
  FormSuccess,
  inputClass,
  selectClass,
  submitClass,
  textareaClass,
} from "./form-controls";

type Values = {
  category: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  employer: string;
  position: string;
  qualification: string;
  year: string;
  referee: string;
  motivation: string;
  declared: boolean;
};

const EMPTY: Values = {
  category: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  employer: "",
  position: "",
  qualification: "",
  year: "",
  referee: "",
  motivation: "",
  declared: false,
};

export function MembershipForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
  };

  if (submitted) {
    const chosen = MEMBERSHIP_CLASSES.find((item) => item.name === values.category);
    return (
      <FormSuccess
        title="Application submitted for review"
        onReset={() => {
          setValues(EMPTY);
          setErrors({});
          setSubmitted(false);
        }}
        resetLabel="Submit another application"
      >
        <p>
          Thank you, {values.firstName}. Your application for{" "}
          <span className="font-medium text-ink">{chosen?.name ?? "membership"}</span> has been
          received and will be considered by the Membership Committee at its next sitting.
        </p>
        <p>
          You will be notified by email at {values.email}. If your application is approved, the
          Secretariat will advise you of the subscription payable for your class of membership.
        </p>
        <p>
          Questions may be directed to{" "}
          <a href={`mailto:${ORG.membershipEmail}`} className="font-medium text-ink underline underline-offset-2">
            {ORG.membershipEmail}
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

        if (!values.category) next.category = "Select the class of membership you are applying for.";
        if (!values.firstName.trim()) next.firstName = "Enter your first name.";
        if (!values.lastName.trim()) next.lastName = "Enter your surname.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
          next.email = "Enter a valid email address.";
        if (values.phone.replace(/[^\d]/g, "").length < 9)
          next.phone = "Enter a telephone number we can reach you on.";
        if (!values.qualification.trim()) next.qualification = "State your highest qualification.";
        if (!values.motivation.trim()) next.motivation = "Tell us why you wish to join.";
        else if (values.motivation.trim().split(/\s+/).length < 15)
          next.motivation = "Please write at least 15 words.";
        if (!values.declared) next.declared = "Please confirm the declaration to submit.";

        setErrors(next);
        if (Object.keys(next).length === 0) setSubmitted(true);
      }}
      className="space-y-4"
    >
      <Field label="Class of membership" htmlFor="app-category" required error={errors.category}>
        <select
          id="app-category"
          value={values.category}
          aria-invalid={Boolean(errors.category)}
          onChange={(event) => set("category", event.target.value)}
          className={selectClass}
        >
          <option value="">Select a class</option>
          {MEMBERSHIP_CLASSES.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" htmlFor="app-first" required error={errors.firstName}>
          <input
            id="app-first"
            value={values.firstName}
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
            onChange={(event) => set("firstName", event.target.value)}
            className={inputClass}
            placeholder="John"
          />
        </Field>
        <Field label="Surname" htmlFor="app-last" required error={errors.lastName}>
          <input
            id="app-last"
            value={values.lastName}
            autoComplete="family-name"
            aria-invalid={Boolean(errors.lastName)}
            onChange={(event) => set("lastName", event.target.value)}
            className={inputClass}
            placeholder="Banda"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email address" htmlFor="app-email" required error={errors.email}>
          <input
            id="app-email"
            type="email"
            value={values.email}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            onChange={(event) => set("email", event.target.value)}
            className={inputClass}
            placeholder="john.banda@example.co.zm"
          />
        </Field>
        <Field label="Telephone" htmlFor="app-phone" required error={errors.phone}>
          <input
            id="app-phone"
            type="tel"
            value={values.phone}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            onChange={(event) => set("phone", event.target.value)}
            className={inputClass}
            placeholder="+260 97 000 0000"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Employer or institution" htmlFor="app-employer">
          <input
            id="app-employer"
            value={values.employer}
            onChange={(event) => set("employer", event.target.value)}
            className={inputClass}
            placeholder="Ministry of Finance and National Planning"
          />
        </Field>
        <Field label="Position held" htmlFor="app-position">
          <input
            id="app-position"
            value={values.position}
            onChange={(event) => set("position", event.target.value)}
            className={inputClass}
            placeholder="Senior Economist"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-[1fr_130px]">
        <Field
          label="Highest qualification"
          htmlFor="app-qualification"
          required
          error={errors.qualification}
        >
          <input
            id="app-qualification"
            value={values.qualification}
            aria-invalid={Boolean(errors.qualification)}
            onChange={(event) => set("qualification", event.target.value)}
            className={inputClass}
            placeholder="BSc Economics, University of Zambia"
          />
        </Field>
        <Field label="Year awarded" htmlFor="app-year">
          <input
            id="app-year"
            inputMode="numeric"
            maxLength={4}
            value={values.year}
            onChange={(event) => set("year", event.target.value)}
            className={inputClass}
            placeholder="2016"
          />
        </Field>
      </div>

      <Field
        label="Referee"
        htmlFor="app-referee"
        hint="A current member, or your head of department for student applications."
      >
        <input
          id="app-referee"
          value={values.referee}
          onChange={(event) => set("referee", event.target.value)}
          className={inputClass}
          placeholder="Name and contact details"
        />
      </Field>

      <Field
        label="Why do you wish to join?"
        htmlFor="app-motivation"
        required
        error={errors.motivation}
      >
        <textarea
          id="app-motivation"
          rows={4}
          value={values.motivation}
          aria-invalid={Boolean(errors.motivation)}
          onChange={(event) => set("motivation", event.target.value)}
          className={textareaClass}
          placeholder="Describe your interest in the Association and the contribution you hope to make."
        />
      </Field>

      <div>
        <label className="flex cursor-pointer items-start gap-2.5 text-[14px] leading-relaxed text-ink-soft">
          <input
            type="checkbox"
            checked={values.declared}
            aria-invalid={Boolean(errors.declared)}
            onChange={(event) => set("declared", event.target.checked)}
            className="mt-0.5 h-4 w-4 rounded-none border-rule accent-brand"
          />
          <span>
            I declare that the information given is true and complete, and I undertake to abide by
            the constitution and code of conduct of the Association.
          </span>
        </label>
        {errors.declared ? (
          <p role="alert" className="mt-1 text-[13px] text-[#b42318]">
            {errors.declared}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className={submitClass}>
          Submit application
        </button>
      </div>
    </form>
  );
}
