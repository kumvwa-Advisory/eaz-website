"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FormError, FormSuccess } from "./form-controls";

type Values = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirm: string;
  bio: string;
  accepted: boolean;
};

const EMPTY: Values = {
  firstName: "", lastName: "", username: "", email: "",
  password: "", confirm: "", bio: "", accepted: false,
};

const MAX_WORDS = 100;

function wordCount(s: string) {
  return s.trim() ? s.trim().split(/\s+/).length : 0;
}

/* ── shared input class ── */
const inp =
  "w-full rounded-[4px] border-[1.5px] border-[#d3ddd3] bg-[#fbfdfb] py-[13px] pl-[42px] pr-3.5 text-[14.5px] text-ink placeholder:text-[#98a2b3] outline-none transition-colors hover:border-[#bccabc] focus:border-[#d3ddd3] focus:bg-white aria-invalid:border-[#dc2626] aria-invalid:bg-[#fef2f2]";

/* ── field wrapper ── */
function Field({
  label, id, required, hint, error, children,
}: {
  label: string; id: string; required?: boolean;
  hint?: string; error?: string; children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#6c757d]">
        {label}{required && <span className="ml-0.5 text-[#dc2626]">*</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-[12.5px] text-[#aaa]">{hint}</p>}
      {error && <p role="alert" className="mt-1.5 text-[12.5px] font-semibold text-[#b42318]">{error}</p>}
    </div>
  );
}

/* ── icon wrapper ── */
function InputIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#aaa]">
      {children}
    </span>
  );
}

/* ── icons ── */
const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const IconAt = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
  </svg>
);
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>
  </svg>
);
const IconLock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const IconEye = ({ off }: { off?: boolean }) => off ? (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c6.5 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3.5 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>
  </svg>
) : (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

/* ── password strength ── */
function strength(pw: string) {
  let s = 0;
  if (pw.length >= 8) s++;
  if (pw.length >= 12) s++;
  if (/[0-9]/.test(pw) && /[a-zA-Z]/.test(pw)) s++;
  if (/[^a-zA-Z0-9]/.test(pw)) s++;
  return Math.min(s, 4);
}
const STRENGTH_LABEL = ["", "Weak", "Fair", "Good", "Strong"];
const STRENGTH_COLOR = ["", "bg-[#dc2626]", "bg-[#f59e0b]", "bg-[#84cc16]", "bg-brand"];
const STRENGTH_TEXT  = ["", "text-[#dc2626]", "text-[#b45309]", "text-[#4d7c0f]", "text-brand"];

export function MemberRegisterForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values | "form", string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [showCf, setShowCf] = useState(false);

  const words = wordCount(values.bio);
  const pw = useMemo(() => strength(values.password), [values.password]);
  const confirmMatch = values.confirm.length > 0 && values.confirm === values.password;
  const confirmBad   = values.confirm.length > 0 && values.confirm !== values.password;

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  if (submitted) {
    return (
      <FormSuccess
        title="Your account has been created"
        onReset={() => { setValues(EMPTY); setSubmitted(false); }}
        resetLabel="Register another account"
      >
        <p>Welcome, {values.firstName}. You may now complete your membership application.</p>
        <p>A confirmation has been sent to {values.email}.</p>
        <Link href="/membership#apply" className="mt-1 inline-flex rounded-[6px] bg-brand px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-brand-dark">
          Continue to membership application
        </Link>
      </FormSuccess>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const next: typeof errors = {};
        if (!values.firstName.trim()) next.firstName = "Enter your first name.";
        if (!values.lastName.trim()) next.lastName = "Enter your surname.";
        if (values.username.trim().length < 4) next.username = "Usernames are at least 4 characters.";
        else if (!/^[a-zA-Z0-9._-]+$/.test(values.username.trim())) next.username = "Letters, numbers, dots, dashes or underscores only.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) next.email = "Enter a valid email address.";
        if (values.password.length < 8) next.password = "Use at least 8 characters.";
        else if (!/[A-Za-z]/.test(values.password) || !/\d/.test(values.password)) next.password = "Include at least one letter and one number.";
        if (values.confirm !== values.password) next.confirm = "The passwords do not match.";
        if (!values.bio.trim()) next.bio = "Tell us briefly about yourself.";
        else if (words > MAX_WORDS) next.bio = `Please keep this under ${MAX_WORDS} words.`;
        if (!values.accepted) next.accepted = "Please accept the terms to continue.";
        setErrors(next);
        if (Object.keys(next).length === 0) setSubmitted(true);
      }}
      className="space-y-5"
    >
      {errors.form && <FormError message={errors.form} />}

      {/* Name row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" id="reg-first" required error={errors.firstName}>
          <div className="relative">
            <InputIcon><IconUser /></InputIcon>
            <input id="reg-first" className={inp} value={values.firstName} autoComplete="given-name"
              aria-invalid={!!errors.firstName} placeholder="John"
              onChange={(e) => set("firstName", e.target.value)} />
          </div>
        </Field>
        <Field label="Surname" id="reg-last" required error={errors.lastName}>
          <div className="relative">
            <InputIcon><IconUser /></InputIcon>
            <input id="reg-last" className={inp} value={values.lastName} autoComplete="family-name"
              aria-invalid={!!errors.lastName} placeholder="Banda"
              onChange={(e) => set("lastName", e.target.value)} />
          </div>
        </Field>
      </div>

      {/* Username */}
      <Field label="Username" id="reg-username" required hint="At least 4 characters — how you'll be identified in the members' area." error={errors.username}>
        <div className="relative">
          <InputIcon><IconAt /></InputIcon>
          <input id="reg-username" className={inp} value={values.username} autoComplete="username"
            aria-invalid={!!errors.username} placeholder="jbanda"
            onChange={(e) => set("username", e.target.value)} />
        </div>
      </Field>

      {/* Email */}
      <Field label="Email address" id="reg-email" required hint="Use an address you check regularly — notices are sent by email." error={errors.email}>
        <div className="relative">
          <InputIcon><IconMail /></InputIcon>
          <input id="reg-email" type="email" className={inp} value={values.email} autoComplete="email"
            aria-invalid={!!errors.email} placeholder="john.banda@example.co.zm"
            onChange={(e) => set("email", e.target.value)} />
        </div>
      </Field>

      {/* Passwords */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Password" id="reg-password" required error={errors.password}>
          <div className="relative">
            <InputIcon><IconLock /></InputIcon>
            <input id="reg-password" type={showPw ? "text" : "password"} className={`${inp} pr-10`}
              value={values.password} autoComplete="new-password" aria-invalid={!!errors.password}
              placeholder="At least 8 characters" onChange={(e) => set("password", e.target.value)} />
            <button type="button" onClick={() => setShowPw((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aaa] hover:text-ink"
              aria-label={showPw ? "Hide password" : "Show password"}>
              <IconEye off={showPw} />
            </button>
          </div>
          {/* Strength meter */}
          {values.password.length > 0 && (
            <div className="mt-2">
              <div className="flex gap-1">
                {[1,2,3,4].map((i) => (
                  <span key={i} className={`h-[4px] flex-1 rounded-full transition-colors ${pw >= i ? STRENGTH_COLOR[pw] : "bg-[#e0e0e0]"}`} />
                ))}
              </div>
              <p className={`mt-1 text-[12px] font-semibold ${STRENGTH_TEXT[pw]}`}>{STRENGTH_LABEL[pw]}</p>
            </div>
          )}
        </Field>

        <Field label="Confirm password" id="reg-confirm" required error={errors.confirm}>
          <div className="relative">
            <InputIcon><IconLock /></InputIcon>
            <input id="reg-confirm" type={showCf ? "text" : "password"} className={`${inp} pr-10`}
              value={values.confirm} autoComplete="new-password" aria-invalid={!!errors.confirm}
              placeholder="Repeat your password" onChange={(e) => set("confirm", e.target.value)} />
            <button type="button" onClick={() => setShowCf((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aaa] hover:text-ink"
              aria-label={showCf ? "Hide password" : "Show password"}>
              <IconEye off={showCf} />
            </button>
          </div>
          {confirmMatch && <p className="mt-1.5 text-[12px] font-semibold text-brand">✓ Passwords match</p>}
          {confirmBad   && <p className="mt-1.5 text-[12px] font-semibold text-[#b42318]">✗ Passwords don't match</p>}
        </Field>
      </div>

      {/* Bio */}
      <Field label="About you" id="reg-bio" required error={errors.bio}>
        <textarea id="reg-bio" rows={4} value={values.bio} aria-invalid={!!errors.bio}
          placeholder="Economist with the Ministry of Finance, working on fiscal policy and debt sustainability."
          onChange={(e) => {
            const val = e.target.value;
            if (wordCount(val) <= MAX_WORDS) set("bio", val);
          }}
          className="w-full rounded-[4px] border-[1.5px] border-[#d3ddd3] bg-[#fbfdfb] px-3.5 py-[13px] text-[14.5px] text-ink placeholder:text-[#98a2b3] outline-none transition-colors focus:border-[#d3ddd3] focus:bg-white aria-invalid:border-[#dc2626] aria-invalid:bg-[#fef2f2] resize-none" />
        <div className="mt-1.5 flex justify-between">
          <p className="text-[12.5px] text-[#aaa]">A short professional biography for your member profile.</p>
          <span className={`text-[12px] font-semibold tabular ${words >= MAX_WORDS ? "text-[#b42318]" : words >= 90 ? "text-[#b45309]" : "text-[#aaa]"}`}>
            {words} / {MAX_WORDS}
          </span>
        </div>
      </Field>

      {/* Terms */}
      <div>
        <label className="flex cursor-pointer items-start gap-3">
          {/* Custom checkbox */}
          <span className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border-[1.5px] transition-colors"
            style={{ borderColor: values.accepted ? "var(--color-brand)" : "#e0e0e0", backgroundColor: values.accepted ? "var(--color-brand)" : "white" }}>
            <input type="checkbox" checked={values.accepted} aria-invalid={!!errors.accepted}
              onChange={(e) => set("accepted", e.target.checked)}
              className="absolute inset-0 cursor-pointer opacity-0" />
            {values.accepted && (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            )}
          </span>
          <span className="text-[14px] leading-relaxed text-[#6c757d]">
            I accept the Association's terms of use and consent to the Secretariat holding my details
            for membership administration. I understand that registering does not itself confer membership.
          </span>
        </label>
        {errors.accepted && <p role="alert" className="mt-1.5 text-[12.5px] font-semibold text-[#b42318]">{errors.accepted}</p>}
      </div>

      <button type="submit"
        className="w-full rounded-[4px] bg-brand py-[15px] text-[14.5px] font-bold uppercase tracking-[0.04em] text-white">
        Create Account →
      </button>

      <p className="text-center text-[14px] text-[#6c757d]">
        Already registered?{" "}
        <Link href="/members/login" className="font-semibold text-brand hover:underline">Sign in</Link>
      </p>
    </form>
  );
}
