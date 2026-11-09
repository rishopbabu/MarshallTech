import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="page-hero">
            <div className="wrap">
                <p className="kicker">Missing page</p>
                <h1>That address is not on this site.</h1>
                <p className="lede">The pages are Home, About, Projects &amp; Solutions, Gallery, and Contact.</p>
                <p className="hero-actions">
                    <Link className="btn" to="/">Back to the home page</Link>
                    <Link className="btn btn-ghost" to="/contact">Contact the studio</Link>
                </p>
            </div>
        </section>
    );
}
