import {cn} from "@/lib/utils";

export function QuickActionCard({ icon, title, description, colorClass }) {
    return (
        <div className="bg-white border border-slate-100 rounded-3xl p-6 hover:shadow-lg hover:shadow-slate-100 transition-all cursor-pointer group">
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform", colorClass)}>
                {icon}
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">{title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
        </div>
    );
}
