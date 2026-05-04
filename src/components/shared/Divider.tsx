import React from 'react';

interface DividerProps {
    variant?: 'cream' | 'navy'; // 'cream' for between cream bands, 'navy' for between navy bands
    className?: string;
}

export default function Divider({ variant = 'cream', className = '' }: DividerProps) {
    if (variant === 'navy') {
        return (
            <hr className={`border-t border-[var(--color-gold-base)] opacity-50 m-0 ${className}`} />
        );
    }
    
    // cream variant
    return (
        <hr className={`border-t border-[var(--color-cream-border)] mx-[26px] my-0 ${className}`} />
    );
}
