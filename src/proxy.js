import { NextResponse } from 'next/server';

export function proxy(request) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/login' || path === '/register';
    const session = request.cookies.get('session_user')?.value;

    // Allow access to dashboard without requiring session
    // Users can access with prefilled demo data if not logged in

    // Redirect authenticated users from public auth routes to dashboard
    if (isPublicPath && session) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/login',
        '/register',
    ],
};
