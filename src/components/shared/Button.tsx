import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    variant?: 'primary' | 'ghost-gold' | 'ghost-warm' | 'ghost-cream';
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    className?: string;
}

export default function Button({ variant = 'primary', href, children, className = '', type, ...props }: ButtonProps) {
    const baseClasses = "inline-flex items-center justify-center font-cinzel uppercase text-[10px] tracking-[0.2em] px-4 py-[9px] rounded-lg transition-colors duration-200 text-center";
    
    let variantClasses = "";
    switch (variant) {
        case 'primary':
            variantClasses = "bg-[var(--color-gold-base)] text-[var(--color-navy-base)] hover:bg-[var(--color-gold-light)]";
            break;
        case 'ghost-gold':
            variantClasses = "bg-transparent border border-[var(--color-gold-base)] text-[var(--color-gold-base)] hover:bg-[var(--color-gold-base)] hover:text-[var(--color-navy-base)]";
            break;
        case 'ghost-warm':
            variantClasses = "bg-transparent border border-[var(--color-warm-brown)] text-[#4A3A1A] hover:bg-[var(--color-warm-brown)] hover:text-[var(--color-cream-base)]";
            break;
        case 'ghost-cream':
            variantClasses = "bg-transparent border border-[var(--color-cream-base)] text-[var(--color-cream-base)] hover:bg-[var(--color-cream-base)] hover:text-[var(--color-navy-base)]";
            break;
    }

    if (href) {
        return (
            <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`} {...(props as any)}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type as any || "button"} className={`${baseClasses} ${variantClasses} ${className}`} {...(props as any)}>
            {children}
        </button>
    );
}
