import { Band } from "../Layout.jsx";
import { solutions, patterns } from "../data.js";

const APPLIANCES = {
    id: "appliances", name: "Home appliances", kicker: "Kitchen, laundry, utility",
    summary: "Appliances chosen with the points that feed them. The fridge, the washing line, and the utility are part of the same drawing as the inverter and the lighting.",
    includes: ["Points and protection sized for the appliance, not guessed later", "The utility room kept clear enough to service", "Backup decided per circuit, so a cut does not surprise the fridge", "Placement agreed before the counters are ordered"],
};

export default function Projects() {
    return (
        <>
            <section className="page-hero">
                <div className="wrap">
                    <p className="kicker">Projects &amp; solutions</p>
                    <h1>Systems for a house, and the patterns they make.</h1>
                    <p className="lede">Choose a system, or start from the kind of house. A whole-home plan is welcome. So is a single line: only the pump, only the lights, only the front door.</p>
                </div>
            </section>

            <section className="section" id="solutions">
                <div className="wrap solution-list">
                    {[...solutions, APPLIANCES].map((s) => (
                        <article className="solution" id={s.id} key={s.id}>
                            <div>
                                <p className="kicker">{s.kicker}</p>
                                <h2>{s.name}</h2>
                                <p>{s.summary}</p>
                            </div>
                            <ul>{s.includes.map((item) => <li key={item}>{item}</li>)}</ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section section-tight">
                <div className="wrap">
                    <div className="section-head">
                        <p className="kicker">Project patterns</p>
                        <h2>How those systems meet in a house.</h2>
                        <p className="lede">Patterns we design from. The photographs are concept studies. Bring a plan and the pattern is redrawn for that plan.</p>
                    </div>
                    <div className="pattern-detail">
                        {patterns.map((p) => (
                            <article key={p.title}>
                                <figure>
                                    <img src={p.image} alt={p.imageAlt} />
                                    <figcaption>Concept study</figcaption>
                                </figure>
                                <div>
                                    <p className="kicker">{p.place}</p>
                                    <h3>{p.title}</h3>
                                    <p>{p.summary}</p>
                                    <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Band />
        </>
    );
}
