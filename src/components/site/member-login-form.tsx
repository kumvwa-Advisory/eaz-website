"use client";

import Link from "next/link";
import { useState } from "react";
import { ORG } from "@/data/site";
import { FormError, FormSuccess } from "./form-controls";

const inp =
  "w-full rounded-[4px] border-[1.5px] border-[#d3ddd3] bg-[#fbfdfb] py-[13px] pl-[42px] pr-3.5 text-[14.5px] text-ink placeholder:text-[#98a2b3] outline-none transition-colors focus:border-[#d3ddd3] focus:bg-white aria-invalid:border-[#dc2626] aria-invalid:bg-[#fef2f2]";

const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
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

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#6c757d]">
      {children}
    </label>
  );
}

export function MemberLoginForm() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword]     = useState("");
  const [remember, setRemember]     = useState(true);
  const [showPw, setShowPw]         = useState(false);
  const [errors, setErrors]         = useState<{ identifier?: string; password?: string; form?: string }>({});
  const [submitted, setSubmitted]   = useState(false);

  if (submitted) {
    return (
      <FormSuccess
        title="Sign-in is not yet available online"
        onReset={() => { setSubmitted(false); setPassword(""); }}
        resetLabel="Try again"
      >
        <p>
          The members' area is being migrated to the new website. Accounts registered on the
          previous site are being transferred and will be available shortly.
        </p>
        <p>
          For access to the register, conference papers or your subscription statement, contact
          the Membership desk on{" "}
          <a href={`tel:${ORG.phoneHref}`} className="font-medium text-ink underline underline-offset-2">{ORG.phone}</a>
          {" "}or{" "}
          <a href={`mailto:${ORG.membershipEmail}`} className="font-medium text-ink underline underline-offset-2">{ORG.membershipEmail}</a>.
        </p>
      </FormSuccess>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const next: typeof errors = {};
        if (!identifier.trim()) next.identifier = "Enter your username or email address.";
        if (!password) next.password = "Enter your password.";
        else if (password.length < 6) next.password = "Passwords are at least 6 characters.";
        setErrors(next);
        if (Object.keys(next).length === 0) setSubmitted(true);
      }}
      className="space-y-5"
    >
      {errors.form && <FormError message={errors.form} />}

      {/* Username / email */}
      <div>
        <Label htmlFor="login-identifier">Username or email <span className="text-[#dc2626]">*</span></Label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#aaa]">
            <IconUser />
          </span>
          <input
            id="login-identifier"
            type="text"
            autoComplete="username"
            value={identifier}
            aria-invalid={!!errors.identifier}
            placeholder="you@example.co.zm"
            onChange={(e) => { setIdentifier(e.target.value); if (errors.identifier) setErrors((v) => ({ ...v, identifier: undefined })); }}
            className={inp}
          />
        </div>
        {errors.identifier && <p role="alert" className="mt-1.5 text-[12.5px] font-semibold text-[#dc2626]">{errors.identifier}</p>}
      </div>

      {/* Password */}
      <div>
        <Label htmlFor="login-password">Password <span className="text-[#dc2626]">*</span></Label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#aaa]">
            <IconLock />
          </span>
          <input
            id="login-password"
            type={showPw ? "text" : "password"}
            autoComplete="current-password"
            value={password}
            aria-invalid={!!errors.password}
            placeholder="Your password"
            onChange={(e) => { setPassword(e.target.value); if (errors.password) setErrors((v) => ({ ...v, password: undefined })); }}
            className={`${inp} pr-10`}
          />
          <button
            type="button"
            onClick={() => setShowPw((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aaa]"
            aria-label={showPw ? "Hide password" : "Show password"}
          >
            <IconEye off={showPw} />
          </button>
        </div>
        {errors.password && <p role="alert" className="mt-1.5 text-[12.5px] font-semibold text-[#dc2626]">{errors.password}</p>}
      </div>

      {/* Remember + forgot */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="flex cursor-pointer items-center gap-2 text-[14px] text-[#6c757d]">
          <span
            className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border-[1.5px] transition-colors"
            style={{ borderColor: remember ? "var(--color-brand)" : "#d3ddd3", backgroundColor: remember ? "var(--color-brand)" : "white" }}
          >
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)}
              className="absolute inset-0 cursor-pointer opacity-0" />
            {remember && (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            )}
          </span>
          Keep me signed in
        </label>
        <a
          href={`mailto:${ORG.membershipEmail}?subject=Password%20reset%20request`}
          className="text-[13.5px] font-semibold text-brand hover:underline"
        >
          Forgot password?
        </a>
      </div>

      <button type="submit"
        className="w-full rounded-[4px] bg-brand py-[15px] text-[14.5px] font-bold uppercase tracking-[0.04em] text-white">
        Sign in
      </button>

      <p className="border-t border-[#eaeaea] pt-4 text-center text-[14px] text-[#6c757d]">
        Not yet registered?{" "}
        <Link href="/members/register" className="font-semibold text-brand hover:underline">
          Create a website account
        </Link>
      </p>
    </form>
  );
}
