import {MessageSquare, MoreVertical, Video} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {cn} from "@/lib/utils";

export function ContactCard({ contact }) {
    return (
        <div className="group bg-white p-6 rounded-[32px] border border-slate-100/50 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
                <div className="relative">
                    <Avatar className="w-16 h-16 rounded-2xl shadow-sm border border-slate-50">
                        <AvatarImage src={contact.avatar} />
                        <AvatarFallback>{contact.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className={cn(
                        "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white",
                        contact.status === "Online" ? "bg-green-500" : contact.status === "Away" ? "bg-amber-400" : "bg-slate-300"
                    )} />
                </div>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-900 rounded-full h-8 w-8">
                    <MoreVertical className="w-4 h-4" />
                </Button>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-0.5">{contact.name}</h3>
                <p className="text-xs text-slate-400 font-medium">{contact.email}</p>
            </div>

            <div className="flex items-center gap-2 mb-6 p-3 bg-slate-50 rounded-2xl">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">
                    {contact.category}
                </span>
                <div className="h-1 w-1 rounded-full bg-slate-200" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Last call: {contact.lastCall}
                </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full rounded-xl border-slate-200 hover:border-blue-600 hover:bg-blue-50 text-slate-600 hover:text-blue-600 h-10 gap-2 text-xs font-bold transition-all">
                    <MessageSquare className="w-3.5 h-3.5" />
                    Message
                </Button>
                <Button className="w-full rounded-xl bg-slate-900 hover:bg-slate-800 text-white h-10 gap-2 text-xs font-bold transition-all shadow-md shadow-slate-200">
                    <Video className="w-3.5 h-3.5" />
                    Call
                </Button>
            </div>
        </div>
    );
}
