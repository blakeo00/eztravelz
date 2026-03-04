"use client";

import { useEffect, useRef } from "react";

interface TicketWidgetProps {
    src: string;
    id: string;
}

export default function TicketWidget({ src, id }: TicketWidgetProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Clear container to prevent duplicate scripts in development strict mode
        containerRef.current.innerHTML = "";

        const script = document.createElement("script");
        script.id = id;
        script.src = src;
        script.async = true;
        script.charset = "utf-8";

        containerRef.current.appendChild(script);

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = "";
            }
        };
    }, [src, id]);

    return (
        <div
            ref={containerRef}
            className="w-full relative z-10 mx-auto min-h-[600px] block"
        ></div>
    );
}
