export const userData = {
    id: "u123",
    name: "Alex Rivera",
    email: "alex@signbridge.com",
    plan: "Pro Account",
    avatar: "https://github.com/shadcn.png",
    stats: {
        scheduledCalls: 3,
    }
};

export const systemChecks = [
    { id: "cam", label: "Camera", status: "ACTIVE", type: "success" },
    { id: "mic", label: "Microphone", status: "READY", type: "success" },
    { id: "net", label: "Connection", status: "EXCELLENT", type: "info" }
];

export const activities = [
    { id: 1, name: "John Davis", date: "Yesterday, 4:30 PM", avatar: "https://github.com/shadcn.png" },
    { id: 2, name: "Elena Rodriguez", date: "Jan 12, 11:20 AM", avatar: "https://github.com/shadcn.png" },
    { id: 3, name: "Michael Chen", date: "Jan 11, 09:15 AM", avatar: "https://github.com/shadcn.png" }
];

export const recentContacts = [
    { id: 1, name: "Sarah Miller", status: "Online", avatar: "https://github.com/shadcn.png", email: "sarah@example.com", lastCall: "2 days ago" },
    { id: 2, name: "Julian Wan", status: "Offline", avatar: "https://github.com/shadcn.png", email: "julian@example.com", lastCall: "1 week ago" }
];

export const allContacts = [
    { id: 1, name: "Sarah Miller", status: "Online", avatar: "https://github.com/shadcn.png", email: "sarah@example.com", lastCall: "2 days ago", category: "Frequent" },
    { id: 2, name: "Julian Wan", status: "Offline", avatar: "https://github.com/shadcn.png", email: "julian@example.com", lastCall: "1 week ago", category: "Work" },
    { id: 3, name: "Elena Rodriguez", status: "Online", avatar: "https://github.com/shadcn.png", email: "elena@example.com", lastCall: "Yesterday", category: "Frequent" },
    { id: 4, name: "Michael Chen", status: "Away", avatar: "https://github.com/shadcn.png", email: "michael@example.com", lastCall: "3 days ago", category: "Family" },
    { id: 5, name: "John Davis", status: "Offline", avatar: "https://github.com/shadcn.png", email: "john@example.com", lastCall: "5 days ago", category: "Work" },
];

export const userSettings = {
    notifications: {
        email: true,
        push: true,
        alerts: false
    },
    accessibility: {
        highContrast: false,
        autoCaptions: true,
        interpreterDefault: "ASL"
    }
};
