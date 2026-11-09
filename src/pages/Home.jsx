import { Link } from "react-router-dom";
import { Band, Phones, Steps } from "../Layout.jsx";
import { services, pins, scenes, steps, patterns } from "../data.js";

const RAIL = [
    { title: "Save water", text: "A pump that stops when the tank is full, and holds when the sump is dry.", icon: <path fill="currentColor" d="M16 3s7 8 7 14a7 7 0 0 1-14 0c0-6 7-14 7-14z" /> },
    { title: "Save energy", text: "Essential circuits on backup. Solar where the roof can earn its place.", icon: <path fill="currentColor" d="M16 2l2.2 8.2L26 12l-6.4 4.2L22 25l-6-4.2L10 25l2.4-8.8L6 12l7.8-1.8z" /> },
    { title: "Your routine", text: "Scenes are written for this house. A stock kit is the starting conversation, not the result.", icon: <><circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="2" /><path fill="currentColor" d="M15 9h2v8l4.5 2.6-1 1.7L15 18.2z" /></> },
    { title: "Two studios", text: "Rathinapuri in Coimbatore, and Grace Hill in Coonoor.", icon: <><path fill="none" stroke="currentColor" strokeWidth="2" d="M8 26V12l8-6 8 6v14H8z" /><path fill="currentColor" d="M14 26v-7h4v7z" /></> },
];

// [x, y] of each numbered pin on the house diagram
const PIN_XY = [[150, 168], [250, 132], [118, 300], [70, 250], [300, 188], [196, 248], [392, 360], [236, 78], [470, 200], [430, 150], [394, 312], [191, 300]];

function House() {
    return (
        <svg className="house" viewBox="0 0 560 420" role="img" aria-label="Diagram of a house with the points a Marshall Tech plan can cover">
            <rect x="36" y="338" width="470" height="16" rx="3" fill="#9e2a24" />
            <path d="M78 214 L214 96 L350 214 Z" fill="#1c4678" />
            <rect x="96" y="214" width="236" height="124" fill="#f4efe6" />
            <rect x="168" y="262" width="46" height="76" fill="#c4322c" />
            <rect x="118" y="242" width="36" height="30" fill="#16365c" />
            <rect x="122" y="246" width="28" height="18" fill="#e7b15a" />
            <rect x="250" y="242" width="36" height="30" fill="#16365c" />
            <rect x="254" y="246" width="28" height="18" fill="#e7b15a" />
            <path d="M286 250 L392 168 L498 250 Z" fill="#16365c" />
            <rect x="318" y="250" width="150" height="88" fill="#f7f3ea" />
            <rect x="346" y="286" width="96" height="52" rx="2" fill="#c96a32" />
            <rect x="214" y="70" width="46" height="28" fill="#12324f" />
            <path d="M214 84 h46" stroke="#e2b33a" strokeWidth="2" />
            {PIN_XY.map(([x, y], i) => (
                <g key={i}>
                    <circle cx={x} cy={y} r="11" fill="#e2b33a" />
                    <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fontFamily="Outfit, sans-serif" fill="#1a120c">{i + 1}</text>
                </g>
            ))}
        </svg>
    );
}

export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="wrap hero-grid">
                    <div className="hero-copy">
                        <p className="kicker">Coimbatore · Coonoor</p>
                        <h1>We automate <em>your home.</em></h1>
                        <p className="lede">We welcome customization in your automation. Lights, locks, cameras, water, and power, drawn for the way the house is actually used.</p>
                        <div className="hero-actions">
                            <Link className="btn" to="/contact">Plan a visit</Link>
                            <Link className="btn btn-ghost" to="/projects">See solutions</Link>
                        </div>
                        <dl className="hero-facts">
                            <div><dt>Call</dt><dd><Phones /></dd></div>
                            <div><dt>Studios</dt><dd>Rathinapuri, Coimbatore<br />Grace Hill, Coonoor</dd></div>
                        </dl>
                    </div>
                    <figure className="hero-figure">
                        <img src="/images/hero.jpg" alt="Concept study of a contemporary villa at dusk, with warm light in the windows and along the garden path." />
                        <figcaption>Concept study · an evening house</figcaption>
                        <div className="stamp" aria-label="ISO 9001:2015 certified">
                            <span>ISO</span><strong>9001:2015</strong><em>Certified</em>
                        </div>
                    </figure>
                </div>
            </section>

            <section className="rail" aria-label="What we hold to">
                <div className="wrap rail-grid">
                    {RAIL.map((r) => (
                        <article key={r.title}>
                            <span className="rail-icon" aria-hidden="true"><svg viewBox="0 0 32 32">{r.icon}</svg></span>
                            <h2>{r.title}</h2>
                            <p>{r.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section" id="services">
                <div className="wrap">
                    <div className="section-head">
                        <p className="kicker">What we take on</p>
                        <h2>The work on the card, planned as one house.</h2>
                        <p className="lede">LEDs, controllers, sensors, and much more. Automation sits on electrical, plumbing, water, and power that were drawn with it.</p>
                    </div>
                    <div className="service-grid">
                        {services.map((s, i) => (
                            <article className="service" key={s.slug}>
                                <p className="service-index">{String(i + 1).padStart(2, "0")}</p>
                                <h3><Link to={`/projects#${s.slug}`}>{s.name}</Link></h3>
                                <p>{s.summary}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="house-band">
                <div className="wrap house-grid">
                    <div>
                        <p className="kicker kicker-light">One home, every point</p>
                        <h2>Point at the thing you want in the scene.</h2>
                        <p className="lede lede-light">The sheet we work from is a house, not a catalogue. These are the points a Marshall Tech plan can include. You choose which ones belong in yours.</p>
                        <ol className="pin-list">
                            {pins.map((p) => <li key={p.number}><span>{p.number}</span><span>{p.label}</span></li>)}
                        </ol>
                    </div>
                    <div className="house-stage">
                        <House />
                        <div className="phone" aria-hidden="true">
                            <p className="phone-top">Scenes</p>
                            {scenes.map((s) => (
                                <div className="phone-scene" key={s.name}><strong>{s.name}</strong><span>{s.summary}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="wrap">
                    <div className="section-head">
                        <p className="kicker">How a job runs</p>
                        <h2>Four steps, then the house is yours to run.</h2>
                    </div>
                    <Steps items={steps} />
                </div>
            </section>

            <section className="section section-tight">
                <div className="wrap">
                    <div className="section-head">
                        <p className="kicker">Patterns</p>
                        <h2>Four kinds of house we keep drawing.</h2>
                        <p className="lede">These are patterns, not a list of finished client names. A real job starts when we have your plan.</p>
                    </div>
                    <div className="pattern-grid">
                        {patterns.map((p) => (
                            <article className="pattern" key={p.title}>
                                <img src={p.image} alt={p.imageAlt} />
                                <div>
                                    <p className="kicker">{p.place}</p>
                                    <h3>{p.title}</h3>
                                    <p>{p.summary}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="section-link"><Link to="/projects">All solutions and patterns</Link></p>
                </div>
            </section>

            <section className="section">
                <div className="wrap">
                    <div className="section-head">
                        <p className="kicker">Customization</p>
                        <h2>Say it the way you would say it at home.</h2>
                    </div>
                    <div className="scene-grid">
                        {scenes.map((s) => (
                            <blockquote key={s.name}><p>{s.summary}</p><footer>{s.name}</footer></blockquote>
                        ))}
                    </div>
                </div>
            </section>

            <Band />
        </>
    );
}
