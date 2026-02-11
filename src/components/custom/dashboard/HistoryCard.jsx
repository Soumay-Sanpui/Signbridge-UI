"use client";

import {ArrowDownLeft, ArrowUpRight, CheckCircle2, PhoneMissed, RotateCcw, Timer} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {cn} from "@/lib/utils";

export function HistoryCard({ item }) {
    const isIncoming = item.type === "incoming";
    const isOutgoing = item.type === "outgoing";
    const isMissed = item.type === "missed";

    return (
        <div className="group bg-white p-6 rounded-[32px] shadow-sm border border-slate-50 hover:shadow-xl hover:shadow-blue-900/[0.03] transition-all duration-500">
            <div className="flex items-center gap-8">
                <div className="relative flex-shrink-0">
                    <Avatar className={cn("w-20 h-20 rounded-2xl shadow-lg", isMissed && "grayscale opacity-50")}>
                        <AvatarImage src={item.avatar} />
                        <AvatarFallback>{item.name[0]}</AvatarFallback>
                    </Avatar>
                    {!isMissed && <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white" />}
                </div>

                <div className="flex-1 space-y-3">
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className={cn("text-xl font-extrabold text-slate-900 tracking-tight", isMissed && "opacity-50")}>
                                {item.name}
                            </h3>
                            {item.verified && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                        </div>
                        <p className="text-blue-600 font-bold text-sm mt-0.5">{item.date}</p>
                    </div>

                    <div className="flex items-center gap-6">
                        {item.duration && (
                            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                                <Timer className="w-3.5 h-3.5" />
                                <span>{item.duration}</span>
                            </div>
                        )}

                        <Badge
                            variant="outline"
                            className={cn(
                                "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border-0",
                                isIncoming && "bg-green-50 text-green-600",
                                isOutgoing && "bg-blue-50 text-blue-600",
                                isMissed && "bg-red-50 text-red-600"
                            )}
                        >
                            <div className="flex items-center gap-1.5 leading-none">
                                {isIncoming && <ArrowDownLeft className="w-3.5 h-3.5" />}
                                {isOutgoing && <ArrowUpRight className="w-3.5 h-3.5" />}
                                {isMissed && <PhoneMissed className="w-3.5 h-3.5" />}
                                {item.type}
                            </div>
                        </Badge>

                        {/* Waveform Visualization */}
                        {!isMissed && (
                            <div className="flex items-end gap-0.5 h-6 ml-2 group-hover:opacity-100 opacity-20 transition-opacity">
                                {[2, 4, 7, 5, 3, 6, 4, 2].map((h, i) => (
                                    <div key={i} className="bg-blue-600/20 rounded-full w-0.5" style={{ height: `${h * 10}%` }} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <Button
                        variant="outline"
                        className={cn(
                            "min-w-[140px] px-6 py-5 rounded-xl font-bold transition-all duration-300 active:scale-95 gap-2 border-2 h-auto text-xs",
                            isMissed
                                ? "border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
                                : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                        )}
                    >
                        <RotateCcw className="w-4 h-4" />
                        {isMissed ? "Call Back" : "Re-connect"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
