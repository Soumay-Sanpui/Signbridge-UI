import {Checkbox} from "@/components/ui/checkbox";

export function PreferenceItem({ title, desc, checked }) {
    return (
        <div className="flex items-start justify-between group cursor-pointer">
            <div className="space-y-1">
                <p className="text-sm font-bold text-slate-900">{title}</p>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{desc}</p>
            </div>
            <Checkbox defaultChecked={checked} className="rounded-md border-slate-200 mt-1 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
        </div>
    );
}
