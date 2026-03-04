import React from 'react';
import Image from 'next/image';

interface AmazonProductCardProps {
    title: string;
    description: string;
    imageUrl: string;
    affiliateLink: string;
}

export default function AmazonProductCard({ title, description, imageUrl, affiliateLink }: AmazonProductCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100 overflow-hidden my-8 max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
            <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="block focus:outline-none focus:ring-4 focus:ring-brand-500 rounded-t-2xl">
                <div className="relative w-full h-64 bg-white flex items-center justify-center p-4 border-b border-slate-100">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </a>

            <div className="p-6">
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="block focus:outline-none focus:ring-2 focus:ring-brand-500 rounded text-slate-800 hover:text-brand-600 transition-colors">
                    <h3 className="text-xl font-bold mb-2 leading-tight">{title}</h3>
                </a>

                <p className="text-slate-600 mb-6 line-clamp-3">
                    {description}
                </p>

                <a
                    href={affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-4 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-amber-300 shadow-sm"
                >
                    Check Price on Amazon
                </a>
            </div>
        </div>
    );
}
