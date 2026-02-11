"use client";

import {Filter, Plus, Search} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {allContacts} from "@/data/dashboardData";
import {ContactCard} from "@/components/custom/dashboard";

export default function ContactsPage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="space-y-1">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900">Contacts</h2>
                    <p className="text-slate-500 text-sm">Manage and connect with your saved contacts.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl gap-2 font-bold shadow-lg shadow-blue-500/10">
                    <Plus className="w-4 h-4" />
                    Add Contact
                </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex gap-4">
                <div className="relative flex-1 group">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                    <Input
                        className="w-full bg-white border border-slate-200 shadow-sm rounded-xl py-6 pl-10 text-sm focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        placeholder="Search by name or email..."
                    />
                </div>
                <Button variant="outline" className="h-auto px-6 rounded-xl bg-white border-slate-200 text-slate-600 font-bold gap-2">
                    <Filter className="w-4 h-4" />
                    Filters
                </Button>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-20">
                {allContacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} />
                ))}
            </div>
        </div>
    );
}
