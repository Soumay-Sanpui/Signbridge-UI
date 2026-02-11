"use client";

import {Bell, ChevronDown, Search} from "lucide-react";
import {Button} from "@/components/ui/button";
import {historyData} from "@/data/historyData";
import {HistoryCard} from "@/components/custom/dashboard";

export default function CallHistoryPage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="space-y-1">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900">Call History</h2>
                    <p className="text-slate-500 text-sm">Manage your past video interpretations and connections.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative group max-w-xs">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                        <input
                            className="w-full bg-white border border-slate-200 shadow-sm rounded-xl py-2.5 pl-10 pr-4 text-xs focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 font-medium"
                            placeholder="Search interactions..."
                        />
                    </div>
                    <Button variant="outline" size="icon" className="group rounded-xl h-10 w-10 bg-white border-slate-200 shadow-sm">
                        <Bell className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                    </Button>
                </div>
            </div>

            {/* History List */}
            <div className="flex flex-col gap-6 pb-20">
                {historyData.map((item) => (
                    <HistoryCard key={item.id} item={item} />
                ))}

                <div className="flex justify-center mt-6">
                    <Button variant="outline" className="px-8 py-5 border-slate-200 text-slate-500 rounded-xl font-bold bg-white shadow-sm hover:bg-slate-50 group gap-2 text-xs">
                        Load older sessions
                        <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
