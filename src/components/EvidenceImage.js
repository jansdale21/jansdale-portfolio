import { ZoomIn } from "lucide-react";
import { useLightbox } from "@/components/Lightbox";
import sizes from "@/data/imageSizes.json";

// Screenshot card: label bar above the image (never on top of it), image capped in height
// so a full page stays readable at a glance; click to open the zoomable viewer.
// `group` is the list of screenshots this one belongs to, so the viewer can step through them.
export default function EvidenceImage({ src, label, caption, alt, className = "", tone, group }) {
    const { open } = useLightbox();
    const dim = sizes[src];
    // Reserve the image's space before it loads so the page does not jump.
    const style = dim
        ? {
              aspectRatio: `${dim[0]} / ${dim[1]}`,
              width: `min(100%, calc(var(--ev-max, 22rem) * ${(dim[0] / dim[1]).toFixed(4)}))`,
          }
        : undefined;
    const show = () => {
        const list = group && group.length > 1 ? group : [{ src, label, caption }];
        const at = Math.max(0, list.findIndex((g) => g.src === src));
        open(list, at);
    };
    return (
        <figure className={`ix-ev ${tone ? `is-${tone}` : ""} ${className}`}>
            <button
                type="button"
                data-testid="evidence-zoom-button"
                onClick={show}
                className="ix-ev-btn"
                aria-label={`Zoom: ${label || caption || "screenshot"}`}
            >
                <span className="ix-ev-bar">
                    <span className="ix-ev-label">{label || "Evidence"}</span>
                    <span className="ix-ev-zoom">
                        <ZoomIn size={13} /> Zoom
                    </span>
                </span>
                <span className="ix-ev-frame">
                    <img
                        src={src}
                        alt={alt || caption || label}
                        loading="lazy"
                        width={dim?.[0]}
                        height={dim?.[1]}
                        style={style}
                    />
                </span>
            </button>
            {caption && <figcaption className="ix-ev-cap">{caption}</figcaption>}
        </figure>
    );
}
