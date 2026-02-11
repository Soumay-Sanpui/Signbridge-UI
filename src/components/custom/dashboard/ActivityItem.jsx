import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {ChevronRight} from "lucide-react";

export function ActivityItem({ name, date, avatar }) {
    return (
        <div className="flex items-center gap-3 group cursor-pointer">
            <Avatar className="w-8 h-8">
                <AvatarImage src={avatar} />
                <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-800 truncate">{name}</p>
                <p className="text-[10px] text-slate-400">{date}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-200 group-hover:text-blue-600 transition-colors" />
        </div>
    );
}
