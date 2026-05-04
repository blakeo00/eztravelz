import React from 'react';

interface CategoryPillProps {
    children: React.ReactNode;
    className?: string;
}

export default function CategoryPill({ children, className = '' }: CategoryPillProps) {
    return (
        <span 
            className={`inline-block font-cinzel text-[9px] uppercase text-[var(--color-warm-brown)] px-2 py-[3px] rounded-lg tracking-wider ${className}`}
            style={{ backgroundColor: 'rgba(110, 85, 36, 0.10)' }}
        >
            {children}
        </span>
    );
}
