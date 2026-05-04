"use client";

import { useEffect, useState } from "react";

/**
 * HotelsWidget — Hotels.com affiliate search widget (row 3 center slot).
 *
 * Uses the same iframe-blob isolation pattern as ExpediaWidget so the
 * eg-widgets.js script runs in a clean context free from React interference.
 */
export default function HotelsWidget() {
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
         data-program="us-hcom"
         data-lobs="stays"
         data-network="pz"
         data-camref="1100l5IENP"
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
        <div
            className="flex flex-col rounded-lg overflow-hidden"
            style={{
                background: "var(--color-navy-base)",
                border: "1.5px solid var(--color-navy-dark)",
                borderRadius: "8px",
            }}
        >
            <div className="flex flex-col items-center gap-1.5 pt-4 pb-2 px-3">
                {/* Brand name styled in Hotels.com red */}
                <span
                    className="font-cinzel"
                    style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#D5001F",
                        letterSpacing: "0.04em",
                        textShadow: "0 1px 6px rgba(0,0,0,0.4)",
                    }}
                >
                    Hotels.com
                </span>
                <p
                    className="font-cinzel text-center"
                    style={{
                        fontSize: "7.5px",
                        color: "var(--color-navy-text)",
                        letterSpacing: "0.04em",
                        lineHeight: 1.4,
                    }}
                >
                    Search &amp; Book Your Perfect Stay
                </p>
            </div>

            {/* Widget iframe */}
            <iframe
                src={iframeSrc}
                className="w-full border-0"
                style={{ height: 220, background: "transparent" }}
                title="Hotels.com Search Widget"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
            />

            {/* Disclosure */}
            <p
                className="text-center pb-2"
                style={{ fontSize: "5.5px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.04em" }}
            >
                Affiliate link · Prices may vary
            </p>
        </div>
    );
}
