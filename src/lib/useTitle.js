import { useEffect } from "react";

const SITE = "Jansdale S. Yusi";

// Gives every page its own browser-tab title.
export default function useTitle(title) {
    useEffect(() => {
        if (title === null) return;
        document.title = title ? `${title} | ${SITE}` : `${SITE} | Portfolio & The Evolution of My Prompts`;
    }, [title]);
}
