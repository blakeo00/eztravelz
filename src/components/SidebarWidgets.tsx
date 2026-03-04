import React, { ReactNode } from 'react';

interface SidebarWidgetsProps {
    widgets?: ReactNode[];
}

export default function SidebarWidgets({ widgets = [] }: SidebarWidgetsProps) {
    const defaultWidget = (
        <div className="bg-slate-100 rounded-2xl min-h-[350px] flex items-center justify-center border-2 border-dashed border-slate-300 shadow-sm transition-all hover:bg-slate-50">
            <div className="text-center px-4">
                <span className="block text-xl font-black text-slate-800 mb-2 uppercase tracking-wide">Coming Soon</span>
                <p className="text-slate-500 font-medium">Widget or Product Offering</p>
            </div>
        </div>
    );

    return (
        <aside className="w-full flex flex-col gap-6 md:gap-8 sticky top-24">
            {/* Widget 1 */}
            {widgets[0] || defaultWidget}

            {/* Widget 2 */}
            {widgets[1] || defaultWidget}

            {/* Widget 3 */}
            {widgets[2] || defaultWidget}
        </aside>
    );
}
