import React from 'react';
import Link from 'next/link';

interface CardProps {
    variant?: 'cream' | 'navy';
    href?: string;
    children: React.ReactNode;
    className?: string;
}

export default function Card({ variant = 'cream', href, children, className = '' }: CardProps) {
    const baseClasses = "rounded-lg overflow-hidden flex transition-transform hover:-translate-y-1 duration-300";
    
    // We use border width of 1px since 0.5px isn't consistently supported, but we use the spec colors
    const variantClasses = variant === 'cream' 
        ? "bg-[var(--color-cream-tile)] border border-[var(--color-cream-border)] text-[var(--color-cream-text)]"
        : "bg-[var(--color-navy-base)] border border-[var(--color-navy-border)] text-[var(--color-navy-text)]";
    
    const Wrapper = href ? Link : 'div';
    const props = href ? { href, className: `${baseClasses} flex-col ${variantClasses} ${className}` } : { className: `${baseClasses} flex-col ${variantClasses} ${className}` };

    if (href) {
        return (
            <Link href={href} className={`${baseClasses} flex-col ${variantClasses} block ${className}`}>
                {children}
            </Link>
        );
    }

    return (
        <div className={`${baseClasses} flex-col ${variantClasses} ${className}`}>
            {children}
        </div>
    );
}
