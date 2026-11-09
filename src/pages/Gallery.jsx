import { useRef, useState } from "react";
import { Band } from "../Layout.jsx";
import { gallery, galleryCategories } from "../data.js";

export default function Gallery() {
    const [filter, setFilter] = useState("all");
    const [open, setOpen] = useState(null);
    const dialog = useRef(null);

    const shown = gallery.filter((g) => filter === "all" || g.category === filter);

    const show = (item) => {
        setOpen(item);
        dialog.current.showModal();
    };

    return (
        <>
            <section className="page-hero">
                <div className="wrap">
                    <p className="kicker">Gallery</p>
                    <h1>Concept studies.</h1>
                    <p className="lede">These frames show lighting, security, power, and water the way a finished Marshall Tech house should feel. They are design references, not photographs of a named client project. Real project photographs can replace them as jobs are handed over.</p>
                    <div className="filters" role="toolbar" aria-label="Filter the gallery">
                        {["all", ...galleryCategories].map((c) => (
                            <button key={c} type="button" className={`filter${filter === c ? " is-active" : ""}`} onClick={() => setFilter(c)}>
                                {c === "all" ? "All" : c}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-tight">
                <div className="wrap">
                    <div className="gallery-grid">
                        {shown.map((item) => (
                            <figure className="shot" key={item.title}>
                                <button type="button" className="shot-open" onClick={() => show(item)}>
                                    <img src={item.image} alt={item.caption} />
                                </button>
                                <figcaption><span>{item.category}</span><strong>{item.title}</strong></figcaption>
                            </figure>
                        ))}
                    </div>
                    {shown.length === 0 && <p className="empty-filter">Nothing in that group yet.</p>}
                </div>
            </section>

            <dialog ref={dialog} className="lightbox" onClick={(e) => e.target === dialog.current && dialog.current.close()}>
                <button type="button" className="lightbox-close" onClick={() => dialog.current.close()}>Close</button>
                <figure>
                    <img src={open?.image} alt={open?.caption ?? ""} />
                    <figcaption><h2>{open?.title}</h2><p>{open?.caption}</p></figcaption>
                </figure>
            </dialog>

            <Band />
        </>
    );
}
