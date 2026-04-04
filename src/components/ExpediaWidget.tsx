"use client";

import { useEffect, useState } from "react";

/**
 * ExpediaWidget — iframe-isolated affiliate search widget.
 *
 * Mirrors the ViatorWidget pattern: builds a self-contained HTML blob
 * and renders it inside an iframe so the Expedia script runs in a clean
 * context, free from any React/Next.js interference.
 */
export default function ExpediaWidget() {
    const [iframeSrc, setIframeSrc] = useState<string>("");

    useEffect(() => {
        const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: transparent; overflow: hidden; }
    </style>
</head>
<body>
    <div class="eg-widget"
         data-widget="search"
         data-program="us-expedia"
         data-lobs="stays,flights"
         data-network="pz"
         data-camref="1110lC5VC"
         data-pubref=""></div>
    <script class="eg-widgets-script"
            src="https://creator.expediagroup.com/products/widgets/assets/eg-widgets.js"></script>
</body>
</html>`;

        const blob = new Blob([html], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        setIframeSrc(url);

        return () => URL.revokeObjectURL(url);
    }, []);

    if (!iframeSrc) return null;

    return (
        <div className="w-full mb-10">
            <iframe
                src={iframeSrc}
                className="w-full border-0"
                style={{ height: 320, background: "transparent" }}
                title="Expedia Search Widget"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
            />
        </div>
    );
}
