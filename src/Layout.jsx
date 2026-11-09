import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { company } from "./data.js";

const TITLES = {
    "/": "Marshall Tech | We automate your home",
    "/about": "About | Marshall Tech",
    "/projects": "Projects & Solutions | Marshall Tech",
    "/gallery": "Gallery | Marshall Tech",
    "/contact": "Contact | Marshall Tech",
};

export function Mark({ fill = "#0d3158" }) {
    return (
        <svg className="mark" viewBox="0 0 72 72" aria-hidden="true">
            <circle cx="36" cy="36" r="34" fill={fill} />
            <circle cx="36" cy="36" r="30.5" fill="none" stroke="#e2b33a" strokeWidth="1.4" />
            <path fill="#f6f1e7" d="M16 52V22h9l11 17 11-17h9v30h-8V34l-10 15h-4L26 34v18H16z" />
            <path fill="#c4322c" d="M17 18h16v3.4H17z" />
        </svg>
    );
}

export function Phones() {
    return company.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`}>{p.display}</a>);
}

export function Studios({ as: H = "h3", className }) {
    return company.studios.map((s) => (
        <article key={s.name} className={className}>
            <H>{s.name}</H>
            <p>{s.lines}</p>
            <a href={s.mapUrl} target="_blank" rel="noopener">Open in Maps</a>
        </article>
    ));
}

export function Steps({ items }) {
    return (
        <ol className="steps">
            {items.map((s) => (
                <li key={s.number}><span>{s.number}</span><h3>{s.title}</h3><p>{s.summary}</p></li>
            ))}
        </ol>
    );
}

export function Band() {
    return (
        <section className="visit">
            <div className="wrap visit-inner">
                <div>
                    <p className="kicker kicker-light">A site visit</p>
                    <h2>Tell us how the house is used.</h2>
                    <p>A floor plan, a few photos, or a list of rooms. We will say what is worth automating now, and what can wait.</p>
                </div>
                <Link className="btn btn-light" to="/contact">Contact the studio</Link>
            </div>
        </section>
    );
}

const NAV = [["/", "Home"], ["/about", "About"], ["/projects", "Projects & Solutions"], ["/gallery", "Gallery"], ["/contact", "Contact"]];

function Header() {
    const [open, setOpen] = useState(false);
    const [stuck, setStuck] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("nav-open", open);
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    useEffect(() => {
        const onScroll = () => setStuck(window.scrollY > 8);
        onScroll();
        document.addEventListener("scroll", onScroll, { passive: true });
        return () => document.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`site-header${stuck ? " is-stuck" : ""}`}>
            <div className="topbar">
                <div className="wrap topbar-inner">
                    <p>ISO 9001:2015 Certified</p>
                    <p className="topbar-mottos"><span>Save water</span><span>Save energy</span></p>
                    <p className="topbar-phones"><Phones /></p>
                </div>
            </div>
            <div className="bar">
                <div className="wrap bar-inner">
                    <Link className="brand" to="/" aria-label="Marshall Tech, home">
                        <Mark />
                        <span className="brand-text">
                            <strong>{company.name}</strong>
                            <em>{company.tagline}</em>
                            <small>{company.descriptor}</small>
                        </span>
                    </Link>
                    <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
                        <span className="nav-toggle-lines" aria-hidden="true"></span>
                        <span className="nav-toggle-label">Menu</span>
                    </button>
                    <nav id="site-nav" className="nav" aria-label="Primary">
                        {NAV.map(([to, label]) => (
                            <NavLink key={to} to={to} end className={({ isActive }) => (isActive ? "is-active" : undefined)} onClick={() => setOpen(false)}>
                                {label}
                            </NavLink>
                        ))}
                    </nav>
                    <a className="call" href={`tel:${company.phones[0].tel}`}>
                        <span>Call the studio</span>
                        <strong>{company.phones[0].display}</strong>
                    </a>
                </div>
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer className="site-footer">
            <div className="wrap footer-grid">
                <div>
                    <Link className="brand brand-on-dark" to="/">
                        <Mark fill="#123a63" />
                        <span className="brand-text"><strong>{company.name}</strong><em>{company.tagline}</em></span>
                    </Link>
                    <p className="footer-note">We automate your home. We welcome customization in your automation.</p>
                </div>
                <div>
                    <h2>Studios</h2>
                    <Studios />
                </div>
                <div>
                    <h2>Talk</h2>
                    <p><Phones /></p>
                    <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
                    <p><a href={company.websiteUrl}>{company.websiteLabel}</a></p>
                </div>
                <div>
                    <h2>Pages</h2>
                    <p>{NAV.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}</p>
                </div>
            </div>
            <div className="wrap footer-base">
                <p>Photographs on this site are concept studies of the kinds of homes and installations we design. They are not photographs of a named client project.</p>
                <p>&copy; {new Date().getFullYear()} Marshall Tech. ISO 9001:2015 certified.</p>
            </div>
        </footer>
    );
}

export default function Layout() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        document.title = TITLES[pathname] ?? "Page not found | Marshall Tech";
        const target = hash && document.getElementById(hash.slice(1));
        target ? target.scrollIntoView() : window.scrollTo(0, 0);
    }, [pathname, hash]);

    return (
        <>
            <a className="skip" href="#content">Skip to content</a>
            <Header />
            <main id="content"><Outlet /></main>
            <Footer />
        </>
    );
}
