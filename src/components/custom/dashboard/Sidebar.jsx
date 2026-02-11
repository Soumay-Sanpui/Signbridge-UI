"use client";

import {Hand, Handshake, LayoutDashboard, Settings, Users, Video} from "lucide-react";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

import {recentContacts, userData} from "@/data/dashboardData";

const navItems = [
    { label: "Dashboard", href: "/dashboard", Icon: LayoutDashboard },
    { label: "Call History", href: "/dashboard/history", Icon: Video },
    { label: "Contacts", href: "/dashboard/contacts", Icon: Users },
    { label: "Settings", href: "/dashboard/settings", Icon: Settings },
];

export function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r bg-slate-50/50 flex flex-col h-full overflow-y-auto">
            {/* Brand */}
            <div className="p-6">
                <div className="flex items-center gap-2 mb-8">
                    <div className="bg-primary p-1.5 rounded-xl text-white">
                        <Handshake className="w-4 h-4 fill-white" />
                    </div>
                    <h2 className="text-lg font-bold tracking-tight text-slate-900">Sign Bridge</h2>
                </div>

                {/* Navigation */}
                <nav className="space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-semibold",
                                    isActive
                                        ? "bg-white shadow-sm text-primary ring-1 ring-ring"
                                        : "text-slate-500 hover:bg-white hover:text-chart-3"
                                )}
                            >
                                <item.Icon className="w-4 h-4" />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Recent Contacts */}
            <div className="flex-1 px-6 pb-6">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-4 border-t pt-6">
                    Recent Contacts
                </p>
                <div className="space-y-4">
                    {recentContacts.map((contact) => (
                        <div key={contact.id} className="flex items-center gap-3 group cursor-pointer hover:translate-x-0.5 transition-transform">
                            <div className="relative">
                                <Avatar className="w-8 h-8 border border-white shadow-sm">
                                    <AvatarImage src={contact.avatar} />
                                    <AvatarFallback>{contact.name[0]}</AvatarFallback>
                                </Avatar>
                                <div className={cn(
                                    "absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 border-2 border-slate-50 rounded-full",
                                    contact.status === "Online" ? "bg-green-500" : "bg-slate-300"
                                )} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[11px] font-bold text-slate-800 truncate">{contact.name}</p>
                                <p className="text-[10px] text-slate-400 font-medium">{contact.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* User Footer */}
            <div className="p-6 border-t bg-white/50">
                <div className="flex items-center gap-3">
                    <Avatar className="w-9 h-9">
                        <AvatarImage src={userData.avatar} />
                        <AvatarFallback>{userData.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-slate-900 truncate">{userData.name}</p>
                        <p className="text-[9px] font-black text-blue-500 uppercase tracking-wider">{userData.plan}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
