"use client";

import { useEffect, useRef, useState } from "react";

interface ViatorWidgetProps {
    partnerId: string;
    widgetRef: string;
}

/**
 * Viator partner widget rendered inside an iframe.
 *
 * The Viator script caches its internal state after first execution,
 * which prevents it from re-initialising on Next.js client-side
 * navigations. Wrapping it in an iframe guarantees a clean script
 * context every time the component mounts.
 */
export default function ViatorWidget({ partnerId, widgetRef }: ViatorWidgetProps) {
    const [iframeSrc, setIframeSrc] = useState<string>("");

    useEffect(() => {
        // Build a self-contained HTML page that loads the Viator widget
        const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: transparent; }
    </style>
</head>
<body>
    <div data-vi-partner-id="${partnerId}" data-vi-widget-ref="${widgetRef}"></div>
    <script src="https://www.viator.com/orion/partner/widget.js" async></script>
</body>
</html>`;
        const blob = new Blob([html], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        setIframeSrc(url);

        return () => URL.revokeObjectURL(url);
    }, [partnerId, widgetRef]);

    if (!iframeSrc) return null;

    return (
        <iframe
            src={iframeSrc}
            className="w-full border-0"
            style={{ minHeight: 520, background: "transparent" }}
            title="Viator Experiences"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
    );
}
