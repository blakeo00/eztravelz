import React, { ReactNode } from 'react';

interface SidebarWidgetsProps {
    widgets?: ReactNode[];
}

export default function SidebarWidgets({ widgets = [] }: SidebarWidgetsProps) {
    const defaultWidget = (
        <div className="bg-slate-100 rounded-xl min-h-[80px] flex items-center justify-center border-2 border-dashed border-slate-300 shadow-sm transition-all hover:bg-slate-50">
            <div className="text-center px-3 py-2">
                <span className="block text-sm font-bold text-slate-600 uppercase tracking-wide">Coming Soon</span>
                <p className="text-slate-400 text-xs">Product Recommendation</p>
            </div>
        </div>
    );

    const displayWidgets = widgets.length > 0 ? widgets : [defaultWidget, defaultWidget, defaultWidget];

    return (
        <aside className="w-full flex flex-col gap-3 sticky top-4" style={{ maxHeight: 'calc(100vh - 2rem)', overflowY: 'auto', scrollbarWidth: 'none' }}>
            {displayWidgets.map((widget, i) => (
                <div key={i}>{widget}</div>
            ))}
        </aside>
    );
}
