import {cn} from "@/lib/utils";

export function SettingsNavLink({ icon, label, isActive = false }) {
    return (
        <button className={cn(
            "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all",
            isActive ? "bg-slate-50 text-blue-600 shadow-sm" : "text-slate-500 hover:bg-slate-50/50 hover:text-slate-900"
        )}>
            <div className="flex items-center gap-3">
                {icon}
                <span>{label}</span>
            </div>
            {isActive && <div className="w-1 h-1 rounded-full bg-blue-600" />}
        </button>
    );
}
