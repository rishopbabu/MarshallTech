import { useState } from "react";
import { Phones, Studios } from "../Layout.jsx";
import { company, interests } from "../data.js";

// Same rules as EnquiryForm.java.
const PHONE_RE = /^(?:\+91[\s-]?)?[6-9](?:\d[\s-]?){9}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validate(f) {
    const e = {};
    if (!f.name.trim()) e.name = "Tell us your name.";
    if (!f.phone.trim()) e.phone = "Enter a mobile number we can call.";
    else if (!PHONE_RE.test(f.phone.trim())) e.phone = "Use a 10-digit mobile number, for example 94428 91189.";
    if (!f.email.trim()) e.email = "Enter an email address.";
    else if (!EMAIL_RE.test(f.email.trim())) e.email = "That email address does not look complete.";
    if (!f.interest) e.interest = "Choose what you want to talk about.";
    const m = f.message.trim();
    if (!m) e.message = "Add a sentence about the house.";
    else if (m.length < 12 || m.length > 1200) e.message = "Keep the note between 12 and 1200 characters.";
    return e;
}

const EMPTY = { name: "", phone: "", email: "", city: "", interest: "", message: "", faxNumber: "" };

export default function Contact() {
    const [form, setForm] = useState(EMPTY);
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);

    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const submit = (e) => {
        e.preventDefault();
        if (form.faxNumber) return setSent(true); // honeypot
        const errs = validate(form);
        setErrors(errs);
        if (Object.keys(errs).length) return;
        // ponytail: no backend here — opens the visitor's mail app. Swap for a fetch() POST when an API exists.
        const body = `Name: ${form.name}\nMobile: ${form.phone}\nEmail: ${form.email}\nCity: ${form.city}\n\n${form.message}`;
        window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Enquiry: ${form.interest}`)}&body=${encodeURIComponent(body)}`;
        setSent(true);
        setForm(EMPTY);
    };

    const field = (k, label, input, span) => (
        <label className={`field${span ? " field-span" : ""}${errors[k] ? " is-invalid" : ""}`}>
            <span>{label}</span>
            {input}
            {errors[k] && <small>{errors[k]}</small>}
        </label>
    );

    return (
        <>
            <section className="page-hero">
                <div className="wrap">
                    <p className="kicker">Contact</p>
                    <h1>Tell us about the house.</h1>
                    <p className="lede">Call either studio, or send a note. A floor plan is useful. A sentence about what should happen at the front door is enough to start.</p>
                </div>
            </section>

            <section className="section section-tight">
                <div className="wrap contact-grid">
                    <div className="contact-facts">
                        <Studios as="h2" className="studio-card" />
                        <article className="studio-card">
                            <h2>Phone and email</h2>
                            <p className="phone-stack"><Phones /></p>
                            <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
                            <p><a href={company.websiteUrl}>{company.websiteLabel}</a></p>
                            <p className="quiet">Call to fix a site visit. Hours are agreed on the phone.</p>
                        </article>
                    </div>

                    <form className="enquiry" onSubmit={submit} noValidate>
                        {sent && (
                            <div className="banner" role="status">
                                <strong>Thank you.</strong>
                                <p>We have your note. Someone from the Coimbatore or Coonoor studio will call you.</p>
                            </div>
                        )}
                        {Object.keys(errors).length > 0 && <p className="form-error">Please check the fields marked below.</p>}
                        <div className="form-grid">
                            {field("name", "Name", <input type="text" value={form.name} onChange={set("name")} autoComplete="name" maxLength={80} required />)}
                            {field("phone", "Mobile", <input type="tel" value={form.phone} onChange={set("phone")} autoComplete="tel" inputMode="tel" placeholder="Your mobile number" maxLength={16} required />)}
                            {field("email", "Email", <input type="email" value={form.email} onChange={set("email")} autoComplete="email" maxLength={120} required />)}
                            {field("city", "City", <input type="text" value={form.city} onChange={set("city")} autoComplete="address-level2" maxLength={80} placeholder="Your city" />)}
                            {field("interest", "What should we talk about?", (
                                <select value={form.interest} onChange={set("interest")} required>
                                    <option value="">Choose a starting point</option>
                                    {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                                </select>
                            ), true)}
                            {field("message", "About the house", (
                                <textarea value={form.message} onChange={set("message")} rows={6} maxLength={1200} required placeholder="Rooms, what should happen at the door, and whether water or backup power is part of it." />
                            ), true)}
                        </div>
                        <div className="hp" aria-hidden="true">
                            <label>Fax number
                                <input type="text" value={form.faxNumber} onChange={set("faxNumber")} tabIndex={-1} autoComplete="off" />
                            </label>
                        </div>
                        <button className="btn" type="submit">Send the note</button>
                    </form>
                </div>
            </section>
        </>
    );
}
