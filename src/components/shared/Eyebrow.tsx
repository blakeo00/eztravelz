import React from 'react';

interface EyebrowProps {
    children: React.ReactNode;
    variant?: 'cream' | 'navy'; // 'cream' implies it's on a cream background (so text is brown), 'navy' implies on navy background (text is gold)
    className?: string;
}

export default function Eyebrow({ children, variant = 'cream', className = '' }: EyebrowProps) {
    const colorClass = variant === 'cream' ? 'text-[var(--color-warm-brown)]' : 'text-[var(--color-gold-base)]';
    
    return (
        <span 
            className={`block font-cinzel text-[9px] sm:text-[10px] uppercase tracking-[0.3em] mb-2 ${colorClass} ${className}`}
        >
            {children}
        </span>
    );
}
