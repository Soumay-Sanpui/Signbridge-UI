import {cn} from "@/lib/utils";

export function SystemCheckItem({ icon, label, status, statusColor }) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                    {icon}
                </div>
                <span className="text-sm font-medium text-slate-700">{label}</span>
            </div>
            <span className={cn("text-[9px] font-black px-2 py-1 rounded-full tracking-wider", statusColor)}>
                {status}
            </span>
        </div>
    );
}
